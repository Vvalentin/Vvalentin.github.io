import React, { useState } from 'react';
import { User } from 'lucide-react';
import { BottomNavigation } from './BottomNavigation';
import profilpic from '../assets/profil.png';

export function ProfileScreen({ userData, onUpdateProfile, onLogout, currentTab, onTabChange }) {
  const [formData, setFormData] = useState({
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    university: userData.university,
    studyProgram: userData.studyProgram
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateProfile(formData);
  };

  return (
    <div className="min-h-screen bg-white pb-24">
      <div className="w-full max-w-[393px] mx-auto">
        {/* Header */}
        <div className="bg-white p-6 border-b border-[#E0E0E0]">
          <h2 className="text-[#333333]">Profil</h2>
        </div>

        {/* Profile Content */}
        <div className="p-6">
          {/* Avatar */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-[#F5F5F5] rounded-full flex items-center justify-center">
            <img src={profilpic} alt="profil" className="w-full h-full object-cover rounded-full" />
            </div>
          </div>

          {/* Profile Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[#333333] mb-2">Vorname</label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full px-4 py-3 bg-[#F5F5F5] border-none rounded-[12px] text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#E30613]"
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
              className="w-full bg-[#E30613] text-white py-4 rounded-[12px] mt-6 hover:bg-[#C00511] transition-colors"
            >
              Speichern
            </button>
          </form>

          {/* Logout Button */}
          <button
            onClick={onLogout}
            className="w-full text-[#E30613] py-4 mt-8 hover:underline"
          >
            Logout
          </button>
        </div>
      </div>

      <BottomNavigation currentTab={currentTab} onTabChange={onTabChange} />
    </div>
  );
}
