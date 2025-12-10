import React from 'react';
import { Home, Users, User } from 'lucide-react';

export function BottomNavigation({ currentTab, onTabChange }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E0E0E0]">
      <div className="w-full max-w-[393px] mx-auto flex items-center justify-around py-3">
        <button
          onClick={() => onTabChange('home')}
          className={`flex flex-col items-center gap-1 py-2 px-6 rounded-[12px] transition-colors ${
            currentTab === 'home'
              ? 'text-[#E30613]'
              : 'text-[#999999] hover:text-[#666666]'
          }`}
        >
          <Home className="w-6 h-6" />
          <span className="text-xs">Home</span>
        </button>

        <button
          onClick={() => onTabChange('groups')}
          className={`flex flex-col items-center gap-1 py-2 px-6 rounded-[12px] transition-colors ${
            currentTab === 'groups'
              ? 'text-[#E30613]'
              : 'text-[#999999] hover:text-[#666666]'
          }`}
        >
          <Users className="w-6 h-6" />
          <span className="text-xs">Groups</span>
        </button>

        <button
          onClick={() => onTabChange('profile')}
          className={`flex flex-col items-center gap-1 py-2 px-6 rounded-[12px] transition-colors ${
            currentTab === 'profile'
              ? 'text-[#E30613]'
              : 'text-[#999999] hover:text-[#666666]'
          }`}
        >
          <User className="w-6 h-6" />
          <span className="text-xs">Profile</span>
        </button>
      </div>
    </div>
  );
}
