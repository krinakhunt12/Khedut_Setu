
import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, Sprout, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { getAgriculturalAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';
import { SUGGESTED_QUESTIONS } from '../constants';

const AiAssistant: React.FC = () => {
  const { t } = useTranslation();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial Greeting
    setMessages([
      {
        id: '1',
        text: t('ai.title') + " - " + t('ai.subtitle'),
        sender: 'ai',
        timestamp: new Date()
      }
    ]);
  }, [t]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (text: string = input) => {
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      text: text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const responseText = await getAgriculturalAdvice(text);
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
    <div className="max-w-4xl mx-auto p-4 h-[calc(100vh-80px)] flex flex-col font-sans">
      <div className="bg-gradient-to-r from-green-600 to-green-800 p-4 rounded-t-2xl shadow-md flex items-center gap-4 text-white">
        <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
          <Bot className="text-white w-8 h-8" />
        </div>
        <div>
          <h2 className="text-xl font-bold">{t('ai.title')}</h2>
          <p className="text-sm opacity-90 flex items-center gap-1">
             <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
             {t('ai.subtitle')}
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto bg-stone-50 p-4 space-y-4 border-x border-gray-200">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`flex items-start max-w-[85%] sm:max-w-[75%] gap-2 ${
                msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm ${
                  msg.sender === 'user' ? 'bg-indigo-100 text-indigo-600' : 'bg-green-600 text-white'
                }`}
              >
                {msg.sender === 'user' ? <User size={18} /> : <Sprout size={18} />}
              </div>
              <div
                className={`p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.sender === 'user'
                    ? 'bg-indigo-600 text-white rounded-tr-none'
                    : 'bg-white text-gray-800 rounded-tl-none border border-gray-100'
                }`}
              >
                {msg.text}
              </div>
            </div>
          </div>
        ))}
        
        {loading && (
          <div className="flex justify-start">
            <div className="flex items-center gap-2 bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce delay-75"></div>
              <div className="w-2 h-2 bg-green-700 rounded-full animate-bounce delay-150"></div>
            </div>
          </div>
        )}
        
        {messages.length === 1 && !loading && (
          <div className="mt-8">
            <p className="text-center text-gray-500 text-sm mb-4 font-medium">{t('ai.suggestions')}</p>
            <div className="flex flex-wrap justify-center gap-2">
              {SUGGESTED_QUESTIONS.map((q, idx) => (
                <button 
                  key={idx}
                  onClick={() => handleSend(q)}
                  className="bg-white hover:bg-green-50 border border-green-200 text-green-800 text-xs sm:text-sm px-4 py-2 rounded-full transition-colors flex items-center gap-1 shadow-sm"
                >
                  <Sparkles size={12} className="text-yellow-500" /> {q}
                </button>
              ))}
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      <div className="bg-white p-4 border rounded-b-2xl border-t-0 shadow-xl relative z-10">
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={t('ai.placeholder')}
            className="flex-1 p-3.5 border border-gray-300 rounded-full focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all bg-gray-50"
          />
          <button
            onClick={() => handleSend()}
            disabled={loading || !input.trim()}
            className="p-3.5 bg-green-600 text-white rounded-full hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl transform active:scale-95"
          >
            <Send size={20} />
          </button>
        </div>
        <p className="text-[10px] text-center text-gray-400 mt-2">
          {t('ai.disclaimer')}
        </p>
      </div>
    </div>
  );
};

export default AiAssistant;
