import React from 'react';

export function OnboardingCompleteScreen({ onContinue }) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-[393px] text-center">
        <div className="w-32 h-32 bg-[#E30613] rounded-full mx-auto mb-8 flex items-center justify-center">
          <span className="text-white text-6xl">🎉</span>
        </div>

        <h1 className="text-[#333333] mb-4">Alles erledigt!</h1>
        <p className="text-[#666666] mb-12">
          Die Einrichtung deines Accounts ist abgeschlossen. Viel Spaß mit PeerUp!
        </p>

        <button
          onClick={onContinue}
          className="w-full bg-[#E30613] text-white py-4 rounded-[12px] hover:bg-[#C00511] transition-colors"
        >
          Zum Hauptmenü
        </button>
      </div>
    </div>
  );
}
