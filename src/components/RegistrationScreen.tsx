import React, { useState } from 'react';

export function RegistrationScreen({ onComplete }) {
  const [formData, setFormData] = useState({
    firstName: 'Luca',
    lastName: 'Burghardt',
    email: 'bulu1021@h-ka.de',
    password: '123',
    university: '',
    studyProgram: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.firstName && formData.lastName && formData.email && formData.password && formData.university && formData.studyProgram) {
      onComplete(formData);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-[393px]">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-[#E30613] rounded-[12px] mx-auto mb-6 flex items-center justify-center">
            <span className="text-white text-3xl">H</span>
          </div>
          <h1 className="text-[#333333] mb-2">Willkommen</h1>
          <p className="text-[#666666]">Bitte registriere dich mit deinen Universitäts-Zugangsdaten</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[#333333] mb-2">Vorname</label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="w-full px-4 py-3 bg-[#F5F5F5] border-none rounded-[12px] text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#E30613]"
              placeholder="Max"
              required
            />
          </div>

          <div>
            <label className="block text-[#333333] mb-2">Nachname</label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="w-full px-4 py-3 bg-[#F5F5F5] border-none rounded-[12px] text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#E30613]"
              placeholder="Mustermann"
              required
            />
          </div>

          <div>
            <label className="block text-[#333333] mb-2">E-Mail</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-[#F5F5F5] border-none rounded-[12px] text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#E30613]"
              placeholder="max.mustermann@hs-karlsruhe.de"
              required
            />
          </div>

          <div>
            <label className="block text-[#333333] mb-2">Passwort</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-4 py-3 bg-[#F5F5F5] border-none rounded-[12px] text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#E30613]"
              placeholder="••••••••"
              required
            />
          </div>

          <div>
            <label className="block text-[#333333] mb-2">Universität</label>
            <select
              value={formData.university}
              onChange={(e) => setFormData({ ...formData, university: e.target.value })}
              className="w-full px-4 py-3 bg-[#F5F5F5] border-none rounded-[12px] text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#E30613]"
              required
            >
              <option value="">Auswählen...</option>
              <option value="HKA">HKA - Hochschule Karlsruhe</option>
              <option value="KIT">KIT - Karlsruher Institut für Technologie</option>
              <option value="DHBW">DHBW - Duale Hochschule Baden-Württemberg</option>
            </select>
          </div>

          <div>
            <label className="block text-[#333333] mb-2">Studiengang</label>
            <select
              value={formData.studyProgram}
              onChange={(e) => setFormData({ ...formData, studyProgram: e.target.value })}
              className="w-full px-4 py-3 bg-[#F5F5F5] border-none rounded-[12px] text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#E30613]"
              required
            >
              <option value="">Auswählen...</option>
              <option value="Wirtschaftsinformatik">Wirtschaftsinformatik</option>
              <option value="International IT-Business">International IT-Business</option>
              <option value="Data Science">Data Science</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-[#E30613] text-white py-4 rounded-[12px] mt-8 hover:bg-[#C00511] transition-colors"
          >
            Registrierung abschließen
          </button>
        </form>
      </div>
    </div>
  );
}