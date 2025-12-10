import React from "react";
import {
  ArrowLeft,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

const courseDescriptions = {
  1: "In diesem Kurs lernen Sie die Grundlagen der Software-Architektur kennen. Themen umfassen Design Patterns, Architekturstile und Best Practices für die Entwicklung skalierbarer Systeme.",
  2: "User Centered Design fokussiert sich auf die Gestaltung von Benutzeroberflächen mit dem Nutzer im Mittelpunkt. Sie lernen Methoden wie Personas, User Stories und Prototyping.",
  3: "Mathematik I vermittelt grundlegende mathematische Konzepte für Informatiker, einschließlich Analysis, Lineare Algebra und Diskrete Mathematik.",
  4: "E-Business behandelt die digitale Transformation von Geschäftsprozessen. Themen sind E-Commerce, digitale Geschäftsmodelle und Online-Marketing.",
};

const participants = [
  { id: 1, name: "Luca Burghardt", avatar: "👨" },
  { id: 2, name: "Valentin Moritz", avatar: "🧔" },
  { id: 3, name: "Lukas Botterer", avatar: "👮" },
  { id: 4, name: "Joel Reichel", avatar: "🧔" },
];

export function CourseDetailScreen({
  course,
  onBack,
  onOpenChat,
}) {
  return (
    <div className="min-h-screen bg-white">
      <div className="w-full max-w-[393px] mx-auto">
        {/* Header */}
        <div className="bg-white p-6 border-b border-[#E0E0E0]">
          <button
            onClick={onBack}
            className="mb-4 text-[#E30613] flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Zurück
          </button>
          <h2 className="text-[#333333] mb-1">{course.name}</h2>
          <p className="text-[#999999]">{course.professor}</p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <div>
            <h3 className="text-[#333333] mb-3">
              Kursbeschreibung
            </h3>
            <p className="text-[#666666] leading-relaxed">
              {courseDescriptions[course.id] ||
                "Keine Beschreibung verfügbar."}
            </p>
          </div>

          {/* Group Info */}
          <div className="bg-[#F5F5F5] rounded-[12px] p-4">
            <div className="flex items-center gap-2 text-[#333333]">
              <span className="text-2xl">👥</span>
              <span>Gruppe A</span>
            </div>
          </div>

          {/* Participants */}
          <div>
            <h3 className="text-[#333333] mb-3">
              Teilnehmer ({participants.length})
            </h3>
            <div className="space-y-3">
              {participants.map((participant) => (
                <div
                  key={participant.id}
                  className="flex items-center gap-3 p-3 bg-white border border-[#E0E0E0] rounded-[12px]"
                >
                  <div className="w-10 h-10 bg-[#F5F5F5] rounded-full flex items-center justify-center text-xl">
                    {participant.avatar}
                  </div>
                  <span className="text-[#333333]">
                    {participant.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-[#333333] mb-3">
              Nützliche Links
            </h3>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center justify-between p-4 bg-white border border-[#E0E0E0] rounded-[12px] hover:bg-[#F5F5F5] transition-colors"
              >
                <span className="text-[#333333]">
                  ILIAS Kurs
                </span>
                <ExternalLink className="w-5 h-5 text-[#666666]" />
              </a>
              <a
                href="#"
                className="flex items-center justify-between p-4 bg-white border border-[#E0E0E0] rounded-[12px] hover:bg-[#F5F5F5] transition-colors"
              >
                <span className="text-[#333333]">
                  Discord verknüpfen
                </span>
                <ExternalLink className="w-5 h-5 text-[#666666]" />
              </a>
              <a
                href="#"
                className="flex items-center justify-between p-4 bg-white border border-[#E0E0E0] rounded-[12px] hover:bg-[#F5F5F5] transition-colors"
              >
                <span className="text-[#333333]">
                  WhatsApp verknüpfen
                </span>
                <ExternalLink className="w-5 h-5 text-[#666666]" />
              </a>
            </div>
          </div>

          {/* Chat Button */}
          <button
            onClick={onOpenChat}
            className="w-full bg-[#E30613] text-white py-4 rounded-[12px] hover:bg-[#C00511] transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Gruppenchat öffnen
          </button>
        </div>
      </div>
    </div>
  );
}