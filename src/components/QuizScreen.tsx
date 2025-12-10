import React, { useState } from 'react';

export function QuizScreen({ onComplete }) {
  const [selectedType, setSelectedType] = useState('');

  const handleSelect = (type) => {
    setSelectedType(type);
    setTimeout(() => {
      onComplete(type);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="w-full max-w-[393px] mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[#666666]">Nutzerprofil Analyse</span>
            <span className="text-[#666666]">{selectedType ? '1' : '0'} von 1</span>
          </div>
          <div className="w-full h-2 bg-[#E0E0E0] rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#E30613] transition-all duration-300"
              style={{ width: selectedType ? '100%' : '0%' }}
            />
          </div>
        </div>

        <div className="text-center mb-12 mt-16">
          <h1 className="text-[#333333] mb-4">Zu welcher Uhrzeit bist du am produktivsten?</h1>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => handleSelect('Morgens')}
            className={`w-full p-6 rounded-[12px] border-2 transition-all ${
              selectedType === 'Morgens'
                ? 'border-[#E30613] bg-[#FFF5F5]'
                : 'border-[#E0E0E0] bg-white hover:border-[#E30613]'
            }`}
          >
            <div className="text-center">
              <div className="text-4xl mb-3">🌅</div>
              <h3 className="text-[#333333]">Morgens</h3>
              <p className="text-[#666666] mt-2">Ich bin am Morgen am konzentriertesten</p>
            </div>
          </button>

          <button
            onClick={() => handleSelect('Mittags')}
            className={`w-full p-6 rounded-[12px] border-2 transition-all ${
              selectedType === 'Mittags'
                ? 'border-[#E30613] bg-[#FFF5F5]'
                : 'border-[#E0E0E0] bg-white hover:border-[#E30613]'
            }`}
          >
            <div className="text-center">
              <div className="text-4xl mb-3">☀️</div>
              <h3 className="text-[#333333]">Mittags</h3>
              <p className="text-[#666666] mt-2">Mittags läuft es bei mir am besten</p>
            </div>
          </button>

          <button
            onClick={() => handleSelect('Abends')}
            className={`w-full p-6 rounded-[12px] border-2 transition-all ${
              selectedType === 'Abends'
                ? 'border-[#E30613] bg-[#FFF5F5]'
                : 'border-[#E0E0E0] bg-white hover:border-[#E30613]'
            }`}
          >
            <div className="text-center">
              <div className="text-4xl mb-3">🌙</div>
              <h3 className="text-[#333333]">Abends</h3>
              <p className="text-[#666666] mt-2">Ich arbeite abends am produktivsten</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
