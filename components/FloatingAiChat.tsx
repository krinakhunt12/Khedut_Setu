
import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, Sprout, X, MessageCircle, ChevronDown, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { getAgriculturalAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';
import { SUGGESTED_QUESTIONS } from '../constants';

const FloatingAiChat: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [hasOpened, setHasOpened] = useState(false);

  useEffect(() => {
    if (isOpen && !hasOpened) {
      setMessages([
        {
          id: '1',
          text: t('ai.title') + " - " + t('ai.subtitle'),
          sender: 'ai',
          timestamp: new Date()
        }
      ]);
      setHasOpened(true);
    }
  }, [isOpen, hasOpened, t]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

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
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Chat Window */}
      {isOpen && (
        <div className="pointer-events-auto bg-white rounded-2xl shadow-2xl w-[90vw] md:w-96 h-[500px] max-h-[80vh] flex flex-col overflow-hidden border border-gray-200 mb-4 animate-in slide-in-from-bottom-5 fade-in duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-700 to-green-600 p-4 text-white flex justify-between items-center shadow-sm">
            <div className="flex items-center gap-3">
               <div className="bg-white/20 p-1.5 rounded-full backdrop-blur-sm">
                 <Bot size={20} />
               </div>
               <div>
                 <h3 className="font-bold text-sm">{t('ai.title')}</h3>
                 <p className="text-[10px] text-green-100 flex items-center gap-1">
                   <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                   Online
                 </p>
               </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded transition">
               <ChevronDown size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-stone-50 space-y-4">
             {messages.map((msg) => (
               <div
                 key={msg.id}
                 className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
               >
                 <div
                   className={`flex items-end max-w-[85%] gap-2 ${
                     msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                   }`}
                 >
                   <div
                     className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] ${
                       msg.sender === 'user' ? 'bg-indigo-100 text-indigo-600' : 'bg-green-600 text-white'
                     }`}
                   >
                     {msg.sender === 'user' ? <User size={12} /> : <Sprout size={12} />}
                   </div>
                   <div
                     className={`px-3 py-2 text-sm rounded-2xl shadow-sm ${
                       msg.sender === 'user'
                         ? 'bg-indigo-600 text-white rounded-br-none'
                         : 'bg-white text-gray-800 rounded-bl-none border border-gray-100'
                     }`}
                   >
                     {msg.text}
                   </div>
                 </div>
               </div>
             ))}
             
             {loading && (
               <div className="flex justify-start">
                  <div className="flex items-end gap-2">
                     <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white">
                       <Bot size={12} />
                     </div>
                     <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-gray-100 shadow-sm flex gap-1">
                       <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce"></div>
                       <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-bounce delay-75"></div>
                       <div className="w-1.5 h-1.5 bg-green-600 rounded-full animate-bounce delay-150"></div>
                     </div>
                  </div>
               </div>
             )}

             {messages.length === 1 && (
               <div className="mt-4">
                  <p className="text-xs text-gray-400 text-center mb-3 flex items-center justify-center gap-1">
                    <Sparkles size={12} /> Try asking:
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {SUGGESTED_QUESTIONS.slice(0, 4).map((q, i) => (
                      <button 
                        key={i} 
                        onClick={() => handleSend(q)}
                        className="text-[10px] bg-white border border-green-200 text-green-700 px-2 py-1 rounded-full hover:bg-green-50 transition"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
               </div>
             )}
             <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-gray-100">
             <div className="flex items-center gap-2 bg-gray-50 p-1.5 rounded-full border border-gray-200 focus-within:border-green-400 focus-within:ring-2 focus-within:ring-green-100 transition-all">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={t('ai.placeholder')}
                  className="flex-1 bg-transparent px-3 text-sm focus:outline-none min-w-0"
                />
                <button 
                  onClick={() => handleSend()}
                  disabled={!input.trim() || loading}
                  className="p-2 bg-green-600 text-white rounded-full hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                  <Send size={16} />
                </button>
             </div>
             <div className="text-[10px] text-center text-gray-400 mt-2">
               AI can make mistakes. Check important info.
             </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`pointer-events-auto p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center relative ${isOpen ? 'bg-red-500 rotate-90 text-white' : 'bg-gradient-to-r from-yellow-400 to-orange-500 text-green-900'}`}
      >
        {isOpen ? <X size={28} /> : (
          <>
            <MessageCircle size={28} fill="currentColor" className="text-white" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[10px] font-bold text-white items-center justify-center">1</span>
            </span>
          </>
        )}
      </button>
    </div>
  );
};

export default FloatingAiChat;
