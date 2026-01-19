
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Loader2, Plane } from 'lucide-react';
import { getRelocationAdvice } from '../services/geminiService';

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; content: string }[]>([
    { 
      role: 'bot', 
      content: "Jambo! I am your Ubuntu Guide. Looking for a Safari experience or curious about land ownership in Kenya? I'm here to help." 
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const botResponse = await getRelocationAdvice(userMsg);
    setMessages(prev => [...prev, { role: 'bot', content: botResponse || 'I am having a moment. Please try again soon.' }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-white w-[350px] sm:w-[400px] h-[550px] rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden border border-gray-100 animate-in zoom-in duration-200 origin-bottom-right">
          {/* Header */}
          <div className="bg-[#1E3A34] p-6 flex justify-between items-center text-white">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#C5A059] flex items-center justify-center">
                <Plane size={20} className="text-white" />
              </div>
              <div>
                <p className="font-serif font-bold text-lg leading-none">Ubuntu Guide</p>
                <p className="text-[10px] text-gray-300 uppercase tracking-widest mt-1">Live from Nairobi</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-[#C5A059] transition-colors p-2">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#F9F8F6]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-3xl text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-[#1E3A34] text-white rounded-tr-none' 
                    : 'bg-white text-[#1E3A34] shadow-md rounded-tl-none border border-gray-100'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100">
                  <Loader2 className="animate-spin text-[#C5A059]" size={20} />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-100 flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about trips or land..."
              className="flex-1 bg-gray-50 border-none focus:ring-2 focus:ring-[#C5A059]/20 rounded-2xl px-5 py-3 text-sm outline-none"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="bg-[#C5A059] text-white p-3 rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#C5A059]/20"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="group bg-[#1E3A34] text-white p-5 rounded-full shadow-2xl hover:bg-[#C5A059] transition-all flex items-center space-x-3"
        >
          <div className="relative">
            <MessageSquare size={24} />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#C5A059] border-2 border-[#1E3A34] rounded-full group-hover:bg-white transition-colors" />
          </div>
          <span className="font-bold text-sm tracking-widest hidden md:block">PLAN YOUR TRIP</span>
        </button>
      )}
    </div>
  );
};

export default Assistant;
