import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function ChatButton() {
  return (
    <a 
      href="https://wa.me/1234567890" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group"
    >
      <div className="relative flex items-center">
        <div className="bg-brand-ink text-white text-[10px] font-semibold uppercase tracking-widest px-4 py-2 mr-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0">
          Chat with us
        </div>
        <div className="h-14 w-14 bg-brand-ink text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
          <MessageSquare className="h-6 w-6" />
        </div>
      </div>
    </a>
  );
}
