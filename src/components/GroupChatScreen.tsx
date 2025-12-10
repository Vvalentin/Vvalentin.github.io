import React, { useState } from 'react';
import { ArrowLeft, Send } from 'lucide-react';

const initialMessages = [
  {
    id: 1,
    sender: 'Anna Schmidt',
    avatar: '👩',
    message: 'Hey! Hat jemand schon die Aufgaben für nächste Woche gemacht?',
    time: '14:23',
    isOwn: false
  },
  {
    id: 2,
    sender: 'Max Müller',
    avatar: '👨',
    message: 'Ja, ich bin gerade dabei. Die zweite Aufgabe ist echt tricky!',
    time: '14:25',
    isOwn: false
  }
];

export function GroupChatScreen({ course, onBack }) {
  const [messages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      // In a real app, this would send the message
      setNewMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
      <div className="w-full max-w-[393px] mx-auto flex flex-col h-screen">
        {/* Header */}
        <div className="bg-[#E30613] text-white p-4">
          <div className="flex items-center gap-3">
            <button onClick={onBack}>
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl">
              👥
            </div>
            <div className="flex-1">
              <h3 className="text-white">{course.name}</h3>
              <p className="text-white/80 text-xs">Lerngruppe A · 4 Teilnehmer</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-2 ${msg.isOwn ? 'justify-end' : 'justify-start'}`}
            >
              {!msg.isOwn && (
                <div className="w-8 h-8 bg-[#F5F5F5] rounded-full flex items-center justify-center flex-shrink-0">
                  {msg.avatar}
                </div>
              )}
              <div className={`max-w-[75%] ${msg.isOwn ? 'order-first' : ''}`}>
                {!msg.isOwn && (
                  <p className="text-xs text-[#666666] mb-1">{msg.sender}</p>
                )}
                <div
                  className={`rounded-[12px] p-3 ${
                    msg.isOwn
                      ? 'bg-[#E30613] text-white'
                      : 'bg-white text-[#333333]'
                  }`}
                >
                  <p>{msg.message}</p>
                  <p className={`text-xs mt-1 ${msg.isOwn ? 'text-white/70' : 'text-[#999999]'}`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="bg-white border-t border-[#E0E0E0] p-4">
          <form onSubmit={handleSend} className="flex gap-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Nachricht schreiben..."
              className="flex-1 px-4 py-3 bg-[#F5F5F5] border-none rounded-[12px] text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#E30613]"
            />
            <button
              type="submit"
              className="w-12 h-12 bg-[#E30613] rounded-[12px] flex items-center justify-center text-white hover:bg-[#C00511] transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
