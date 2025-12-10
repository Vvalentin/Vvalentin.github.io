import React from 'react';
import { Check } from 'lucide-react';

export function MatchSuccessModal({ onClose }) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-[393px] text-center">
        <div className="w-32 h-32 bg-[#E30613] rounded-full mx-auto mb-8 flex items-center justify-center">
          <Check className="w-20 h-20 text-white" strokeWidth={3} />
        </div>

        <h1 className="text-[#333333] mb-4">Erfolgreich zugeteilt!</h1>
        <p className="text-[#666666] mb-12">
          Du wurdest basierend auf deinem Vorwissen einer passenden Projektgruppe zugeordnet.
        </p>

        <button
          onClick={onClose}
          className="w-full bg-[#E30613] text-white py-4 rounded-[12px] hover:bg-[#C00511] transition-colors"
        >
          Zurück zum Hauptmenü
        </button>
      </div>
    </div>
  );
}
