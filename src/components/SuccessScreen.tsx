import React from 'react';
import { Check } from 'lucide-react';

export function SuccessScreen({ onComplete }) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-[393px] text-center">
        <div className="w-32 h-32 bg-[#E30613] rounded-full mx-auto mb-8 flex items-center justify-center">
          <Check className="w-20 h-20 text-white" strokeWidth={3} />
        </div>

        <h1 className="text-[#333333] mb-4">Profil erfolgreich angelegt!</h1>
        <p className="text-[#666666] mb-12">
          Dein Konto wurde erstellt. Du kannst jetzt mit dem Matching beginnen.
        </p>

        <button
          onClick={onComplete}
          className="w-full bg-[#E30613] text-white py-4 rounded-[12px] hover:bg-[#C00511] transition-colors"
        >
          Weiter zur App
        </button>
      </div>
    </div>
  );
}
