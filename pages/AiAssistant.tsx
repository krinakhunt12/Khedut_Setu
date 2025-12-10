
import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, Sprout, Sparkles, MessageCircle, AlertCircle } from 'lucide-react';
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
    <div className="max-w-4xl mx-auto p-0 md:p-6 h-[calc(100vh-80px)] flex flex-col font-sans">
      <div className="bg-gradient-to-r from-green-700 to-emerald-800 p-4 md:rounded-t-3xl shadow-lg flex items-center gap-4 text-white z-10 shrink-0">
        <div className="bg-white/20 p-2.5 rounded-full backdrop-blur-sm border border-white/30 shadow-inner">
          <Bot className="text-white w-7 h-7" />
        </div>
        <div>
          <h2 className="text-xl font-bold">{t('ai.title')}</h2>
          <p className="text-xs md:text-sm text-green-100 flex items-center gap-1.5 opacity-90">
             <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]"></span>
             {t('ai.subtitle')}
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto bg-stone-100 p-4 space-y-6 md:border-x md:border-gray-200 relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')"}}></div>
        
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}
          >
            <div
              className={`flex items-end max-w-[85%] sm:max-w-[75%] gap-2 ${
                msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border ${
                  msg.sender === 'user' ? 'bg-indigo-100 border-indigo-200 text-indigo-600' : 'bg-green-600 border-green-700 text-white'
                }`}
              >
                {msg.sender === 'user' ? <User size={16} /> : <Sprout size={16} />}
              </div>
              <div>
                <div
                  className={`px-4 py-3 text-sm leading-relaxed shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-indigo-600 text-white rounded-2xl rounded-tr-none'
                      : 'bg-white text-gray-800 rounded-2xl rounded-tl-none border border-gray-200'
                  }`}
                >
                  {msg.text}
                </div>
                <div className={`text-[10px] text-gray-400 mt-1 ${msg.sender === 'user' ? 'text-right mr-1' : 'ml-1'}`}>
                  {msg.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {loading && (
          <div className="flex justify-start animate-in fade-in">
             <div className="flex items-end gap-2">
                <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white text-xs border border-green-700">
                  <Bot size={16} />
                </div>
                <div className="flex items-center gap-1.5 bg-white p-4 rounded-2xl rounded-tl-none border border-gray-200 shadow-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce delay-150"></div>
                </div>
             </div>
          </div>
        )}
        
        {messages.length === 1 && !loading && (
          <div className="mt-8 mx-auto max-w-md">
            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-3xl border border-white/60 shadow-sm text-center">
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-yellow-600">
                 <Sparkles size={24} />
              </div>
              <p className="text-gray-600 text-sm mb-6 font-medium">{t('ai.suggestions')}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {SUGGESTED_QUESTIONS.map((q, idx) => (
                  <button 
                    key={idx}
                    onClick={() => handleSend(q)}
                    className="bg-white hover:bg-green-50 border border-green-200 hover:border-green-300 text-green-800 text-xs px-4 py-2.5 rounded-xl transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      <div className="bg-white p-4 md:rounded-b-3xl md:border md:border-t-0 shadow-2xl relative z-10">
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={t('ai.placeholder')}
            className="flex-1 p-4 border border-gray-200 rounded-full focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-50 transition-all bg-gray-50 text-gray-800 placeholder-gray-400 shadow-inner"
          />
          <button
            onClick={() => handleSend()}
            disabled={loading || !input.trim()}
            className="p-4 bg-green-600 text-white rounded-full hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl transform active:scale-95 disabled:active:scale-100"
          >
            <Send size={20} className={input.trim() ? "ml-1" : ""} />
          </button>
        </div>
        <p className="text-[10px] text-center text-gray-400 mt-3 font-medium flex items-center justify-center gap-1">
          <AlertCircle size={10} /> {t('ai.disclaimer')}
        </p>
      </div>
    </div>
  );
};

export default AiAssistant;
