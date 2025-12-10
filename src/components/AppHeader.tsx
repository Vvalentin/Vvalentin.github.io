import React from 'react';
import { ChevronLeft } from 'lucide-react';

export function AppHeader({ title, showBack, onBack, rightAction }) {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white border-b border-[#E0E0E0] z-50">
      <div className="w-full max-w-[393px] mx-auto h-14 flex items-center justify-between px-4">
        {showBack ? (
          <button
            onClick={onBack}
            className="flex items-center gap-1 text-[#E30613] hover:opacity-80 transition-opacity"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Zurück</span>
          </button>
        ) : (
          <div className="w-16" />
        )}

        <h2 className="text-[#333333] text-center flex-1">{title}</h2>

        {rightAction || <div className="w-16" />}
      </div>
    </div>
  );
}
