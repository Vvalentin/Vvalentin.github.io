import React from 'react';

export function RegistrationSuccessScreen({ onContinue }) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-[393px] text-center">
        <div className="w-32 h-32 bg-[#E7F5E7] rounded-full mx-auto mb-8 flex items-center justify-center">
          <span className="text-[#4CAF50] text-6xl">✓</span>
        </div>

        <h1 className="text-[#333333] mb-4">Erfolgreich verknüpft!</h1>
        <p className="text-[#666666] mb-12">
          Die Verknüpfung mit deinem Studentenaccount war erfolgreich.
        </p>

        <button
          onClick={onContinue}
          className="w-full bg-[#E30613] text-white py-4 rounded-[12px] hover:bg-[#C00511] transition-colors"
        >
          Weiter zum Profilquiz
        </button>
      </div>
    </div>
  );
}
