import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, Sprout } from 'lucide-react';
import { getAgriculturalAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const AiAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: 'નમસ્તે! હું તમારો "AI કૃષિ સલાહકાર" છું. તમે મને ખેતી, પાક, હવામાન અથવા બજાર ભાવ વિશે પ્રશ્નો પૂછી શકો છો.',
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const responseText = await getAgriculturalAdvice(input);
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 h-[calc(100vh-80px)] flex flex-col">
      <div className="bg-green-100 p-4 rounded-t-xl border-b border-green-200 flex items-center gap-3">
        <div className="bg-green-600 p-2 rounded-full">
          <Sprout className="text-white w-6 h-6" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-green-900">કૃષિ સલાહકાર (AI Expert)</h2>
          <p className="text-xs text-green-700">ખેતી વિષયક પ્રશ્નો પૂછો</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto bg-gray-50 p-4 space-y-4 border-x border-gray-200">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`flex items-start max-w-[80%] gap-2 ${
                msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  msg.sender === 'user' ? 'bg-gray-300' : 'bg-green-600'
                }`}
              >
                {msg.sender === 'user' ? <User size={16} /> : <Bot size={16} className="text-white" />}
              </div>
              <div
                className={`p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.sender === 'user'
                    ? 'bg-white text-gray-800 rounded-tr-none'
                    : 'bg-green-600 text-white rounded-tl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="flex items-center gap-2 bg-green-50 p-3 rounded-2xl rounded-tl-none">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-75"></div>
              <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce delay-150"></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="bg-white p-4 border rounded-b-xl border-t-0 shadow-lg">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="અહીં તમારો પ્રશ્ન લખો..."
            className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
          />
          <button
            onClick={handleSend}
            disabled={loading || !input.trim()}
            className="p-3 bg-green-700 text-white rounded-full hover:bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send size={20} />
          </button>
        </div>
        <p className="text-xs text-center text-gray-400 mt-2">
          AI કદાચ ખોટી માહિતી આપી શકે છે. હંમેશા નિષ્ણાતની સલાહ લેવી.
        </p>
      </div>
    </div>
  );
};

export default AiAssistant;
