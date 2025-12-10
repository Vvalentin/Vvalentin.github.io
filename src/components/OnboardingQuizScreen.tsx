import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";

export function OnboardingQuizScreen({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({
    // Organisatorisches
    weeklySchedule: [],
    weekendPolicy: "",
    productivityPeaks: [],
    chatTool: "",
    meetingTool: "",
    collaborationStyle: "",
    locationMode: "",
    languagesSpoken: [],
    projectLanguage: "",
    // Softskills
    qualitySlider: "",
    startTiming: "",
    teamRole: "",
    discussionStyle: "",
    feedbackStyle: "",
    desktopStyle: "",
    planningDepth: "",
    focusMode: "",
    // Hardskills
    gpa: "",
    strength: "",
    jobExperience: "",
    projectExperience: "",
    // Ziele & Erwartungen
    energyPoints: {
      note: 25,
      freizeit: 25,
      andereFacher: 25,
      schlaf: 25,
    },
    learningGoal: "",
    semesterLoad: "",
    hoursPerWeek: "",
    // Persönliche Interessen
    interests: [],
  });

  const handleNext = (update) => {
    setAnswers({ ...answers, ...update });
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    onComplete(answers);
  };

  const handleComplete = (finalUpdate = {}) => {
    onComplete({ ...answers, ...finalUpdate });
  };

  // Header for non-intro screens
  const isIntroScreen = [0, 6, 11, 14, 18].includes(currentStep);
  
  const QuizHeader = () => {
    if (isIntroScreen) return null;
    return (
      <div className="fixed top-0 left-0 right-0 bg-white border-b border-[#E0E0E0] z-50">
        <div className="w-full max-w-[393px] mx-auto h-14 flex items-center justify-between px-4">
          <button
            onClick={handleBack}
            className="flex items-center gap-1 text-[#E30613] hover:opacity-80 transition-opacity"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Zurück</span>
          </button>
          <h2 className="text-[#333333] text-center flex-1">Profilquiz</h2>
          <button
            onClick={handleSkip}
            className="text-[#E30613] hover:opacity-80 transition-opacity"
          >
            Überspringen
          </button>
        </div>
      </div>
    );
  };

  const withHeader = (Component) => {
    return (
      <>
        <QuizHeader />
        <div className={isIntroScreen ? "" : "pt-14"}>
          {Component}
        </div>
      </>
    );
  };

  // KATEGORIE 1: ORGANISATORISCHES

  // Step 0: Intro Organisatorisches
  if (currentStep === 0) {
    return (
      <CategoryIntro
        title="Organisatorisches"
        icon="📅"
        description="Lass uns deine Zeit und Tools synchronisieren."
        onNext={() => setCurrentStep(1)}
      />
    );
  }

  // Step 1: Wochenraster
  if (currentStep === 1) {
    return withHeader(<WeeklyScheduleScreen onNext={handleNext} />);
  }

  // Step 2: Wochenende & Produktivität
  if (currentStep === 2) {
    return withHeader(<WeekendProductivityScreen onNext={handleNext} />);
  }

  // Step 3: Tools
  if (currentStep === 3) {
    return withHeader(<ToolsScreen onNext={handleNext} />);
  }

  // Step 4: Arbeitsweise & Ort
  if (currentStep === 4) {
    return withHeader(<WorkStyleLocationScreen onNext={handleNext} />);
  }

  // Step 5: Sprache
  if (currentStep === 5) {
    return withHeader(<LanguageScreen onNext={handleNext} />);
  }

  // KATEGORIE 2: SOFTSKILLS

  // Step 6: Intro Softskills
  if (currentStep === 6) {
    return (
      <CategoryIntro
        title="Softskills"
        icon="🧩"
        description="Wie tickst du im Team?"
        onNext={() => setCurrentStep(7)}
      />
    );
  }

  // Step 7: Arbeitsstil
  if (currentStep === 7) {
    return withHeader(<WorkStyleScreen onNext={handleNext} />);
  }

  // Step 8: Rolle & Konflikt
  if (currentStep === 8) {
    return withHeader(<RoleConflictScreen onNext={handleNext} />);
  }

  // Step 9: Ordnung
  if (currentStep === 9) {
    return withHeader(<OrganizationScreen onNext={handleNext} />);
  }

  // Step 10: Fokus
  if (currentStep === 10) {
    return withHeader(<FocusScreen onNext={handleNext} />);
  }

  // KATEGORIE 3: HARDSKILLS

  // Step 11: Intro Hardskills
  if (currentStep === 11) {
    return (
      <CategoryIntro
        title="Hardskills"
        icon="🎓"
        description="Dein fachlicher Hintergrund."
        onNext={() => setCurrentStep(12)}
      />
    );
  }

  // Step 12: Noten & Stärken
  if (currentStep === 12) {
    return withHeader(<GradesStrengthsScreen onNext={handleNext} />);
  }

  // Step 13: Erfahrung
  if (currentStep === 13) {
    return withHeader(<ExperienceScreen onNext={handleNext} />);
  }

  // KATEGORIE 4: ZIELE & ERWARTUNGEN

  // Step 14: Intro Ziele
  if (currentStep === 14) {
    return (
      <CategoryIntro
        title="Ziele & Erwartungen"
        icon="🎯"
        description="Was erwartest du vom Semester?"
        onNext={() => setCurrentStep(15)}
      />
    );
  }

  // Step 15: Budget
  if (currentStep === 15) {
    return withHeader(
      <BudgetScreen
        onNext={handleNext}
        initialValues={answers.energyPoints}
      />
    );
  }

  // Step 16: Lernziel
  if (currentStep === 16) {
    return withHeader(<LearningGoalScreen onNext={handleNext} />);
  }

  // Step 17: Last & Zeit
  if (currentStep === 17) {
    return withHeader(<LoadTimeScreen onNext={handleNext} />);
  }

  // KATEGORIE 5: PERSÖNLICHE INTERESSEN

  // Step 18: Intro Interessen
  if (currentStep === 18) {
    return (
      <CategoryIntro
        title="Persönliche Interessen"
        icon="❤️"
        description="Worüber redest du in der Kaffeepause?"
        onNext={() => setCurrentStep(19)}
      />
    );
  }

  // Step 19: Interessen
  if (currentStep === 19) {
    return withHeader(<InterestsScreen onComplete={handleComplete} />);
  }

  return null;
}

// ===== SHARED COMPONENTS =====

function CategoryIntro({ title, icon, description, onNext }) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-[393px] text-center">
        <div className="w-32 h-32 bg-[#E30613] rounded-full mx-auto mb-8 flex items-center justify-center">
          <span className="text-white text-6xl">{icon}</span>
        </div>

        <h1 className="text-[#333333] mb-4">{title}</h1>
        <p className="text-[#666666] mb-12">{description}</p>

        <button
          onClick={onNext}
          className="w-full bg-[#E30613] text-white py-4 rounded-[12px] hover:bg-[#C00511] transition-colors"
        >
          Los geht's
        </button>
      </div>
    </div>
  );
}

// ===== KATEGORIE 1: ORGANISATORISCHES =====

function WeeklyScheduleScreen({ onNext }) {
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);

  const days = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
  const timeSlots = [
    "1. Block",
    "2. Block",
    "3. Block",
    "13-14 Uhr",
    "4. Block",
    "5. Block",
    "nach 17:00",
  ];

  const toggleSlot = (day, time) => {
    const slotId = `${day}-${time}`;
    setSelectedSlots((prev) =>
      prev.includes(slotId)
        ? prev.filter((s) => s !== slotId)
        : [...prev, slotId],
    );
  };

  const handleMouseDown = (day, time) => {
    setIsDrawing(true);
    toggleSlot(day, time);
  };

  const handleMouseEnter = (day, time) => {
    if (isDrawing) {
      toggleSlot(day, time);
    }
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="w-full max-w-[393px] mx-auto">
        <div className="mb-6">
          <p className="text-[#999999] mb-2">
            Organisatorisches · 1/5
          </p>
          <h2 className="text-[#333333] mb-3">
            Deine Wochenübersicht
          </h2>
          <p className="text-[#666666]">
            Markiere die Zeiten, in denen du generell für
            Projekte Zeit hast.
          </p>
        </div>

        <div
          className="mb-6 overflow-x-auto"
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div className="min-w-[350px]">
            <div className="grid grid-cols-8 gap-1 mb-2">
              <div className="text-xs text-[#999999]"></div>
              {days.map((day) => (
                <div
                  key={day}
                  className="text-xs text-[#333333] text-center"
                >
                  {day}
                </div>
              ))}
            </div>
            {timeSlots.map((time) => (
              <div
                key={time}
                className="grid grid-cols-8 gap-1 mb-1"
              >
                <div className="text-xs text-[#999999] flex items-center">
                  {time}
                </div>
                {days.map((day) => {
                  const slotId = `${day}-${time}`;
                  const isSelected =
                    selectedSlots.includes(slotId);
                  return (
                    <div
                      key={slotId}
                      onMouseDown={() =>
                        handleMouseDown(day, time)
                      }
                      onMouseEnter={() =>
                        handleMouseEnter(day, time)
                      }
                      className={`h-10 rounded cursor-pointer transition-colors ${
                        isSelected
                          ? "bg-[#E30613]"
                          : "bg-[#E0E0E0] hover:bg-[#FFB3B8]"
                      }`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() =>
            onNext({ weeklySchedule: selectedSlots })
          }
          disabled={selectedSlots.length === 0}
          className={`w-full py-4 rounded-[12px] transition-colors ${
            selectedSlots.length > 0
              ? "bg-[#E30613] text-white hover:bg-[#C00511]"
              : "bg-[#E0E0E0] text-[#999999] cursor-not-allowed"
          }`}
        >
          Weiter
        </button>
      </div>
    </div>
  );
}

function WeekendProductivityScreen({ onNext }) {
  const [weekendPolicy, setWeekendPolicy] = useState("");
  const [productivityPeaks, setProductivityPeaks] = useState(
    [],
  );

  const weekendOptions = [
    {
      id: "heilig",
      emoji: "🚫",
      title: "Heilig",
      desc: "Wochenende ist frei. Nie.",
    },
    {
      id: "notfall",
      emoji: "🆘",
      title: "Notfall",
      desc: "Nur vor Deadlines.",
    },
    {
      id: "flexibel",
      emoji: "✨",
      title: "Flexibel",
      desc: "Gerne am Wochenende.",
    },
  ];

  const productivityOptions = [
    {
      id: "early",
      emoji: "🌅",
      title: "Early Bird",
      desc: "08:00 – 12:00",
    },
    {
      id: "daytime",
      emoji: "☀️",
      title: "Daytime",
      desc: "13:00 – 17:00",
    },
    {
      id: "late",
      emoji: "🌆",
      title: "Late Night",
      desc: "18:00 – 22:00",
    },
    {
      id: "night",
      emoji: "🌙",
      title: "Night Owl",
      desc: "22:00+",
    },
  ];

  const toggleProductivity = (id) => {
    if (productivityPeaks.includes(id)) {
      setProductivityPeaks(
        productivityPeaks.filter((p) => p !== id),
      );
    } else if (productivityPeaks.length < 2) {
      setProductivityPeaks([...productivityPeaks, id]);
    }
  };

  const canProceed =
    weekendPolicy && productivityPeaks.length > 0;

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="w-full max-w-[393px] mx-auto">
        <div className="mb-6">
          <p className="text-[#999999] mb-2">
            Organisatorisches · 2/5
          </p>
          <h2 className="text-[#333333] mb-3">
            Wochenende & Produktivität
          </h2>
        </div>

        <div className="mb-8">
          <p className="text-[#666666] mb-3">
            Wie stehst du zu Arbeit am Wochenende?
          </p>
          <div className="space-y-3">
            {weekendOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setWeekendPolicy(option.id)}
                className={`w-full p-4 rounded-[12px] border-2 transition-all text-left ${
                  weekendPolicy === option.id
                    ? "border-[#E30613] bg-[#FFF5F5]"
                    : "border-[#E0E0E0] bg-white hover:border-[#E30613]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">
                    {option.emoji}
                  </span>
                  <div className="flex-1">
                    <h4 className="text-[#333333]">
                      {option.title}
                    </h4>
                    <p className="text-[#666666] text-sm">
                      {option.desc}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <p className="text-[#666666] mb-3">
            Wann bist du am produktivsten? (Bis zu 2)
          </p>
          <div className="grid grid-cols-2 gap-3">
            {productivityOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => toggleProductivity(option.id)}
                className={`p-4 rounded-[12px] border-2 transition-all ${
                  productivityPeaks.includes(option.id)
                    ? "border-[#E30613] bg-[#FFF5F5]"
                    : "border-[#E0E0E0] bg-white hover:border-[#E30613]"
                }`}
              >
                <div className="text-center">
                  <div className="text-3xl mb-2">
                    {option.emoji}
                  </div>
                  <h4 className="text-[#333333] text-sm mb-1">
                    {option.title}
                  </h4>
                  <p className="text-[#666666] text-xs">
                    {option.desc}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() =>
            onNext({ weekendPolicy, productivityPeaks })
          }
          disabled={!canProceed}
          className={`w-full py-4 rounded-[12px] transition-colors ${
            canProceed
              ? "bg-[#E30613] text-white hover:bg-[#C00511]"
              : "bg-[#E0E0E0] text-[#999999] cursor-not-allowed"
          }`}
        >
          Weiter
        </button>
      </div>
    </div>
  );
}

function ToolsScreen({ onNext }) {
  const [chatTool, setChatTool] = useState("");
  const [meetingTool, setMeetingTool] = useState("");

  const chatOptions = [
    "WhatsApp",
    "Discord",
    "Telegram",
    "Slack",
    "MS Teams",
  ];
  const meetingOptions = [
    "Zoom",
    "MS Teams",
    "Discord Voice",
    "Google Meet",
  ];

  const canProceed = chatTool && meetingTool;

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="w-full max-w-[393px] mx-auto">
        <div className="mb-6">
          <p className="text-[#999999] mb-2">
            Organisatorisches · 3/5
          </p>
          <h2 className="text-[#333333] mb-3">
            Deine bevorzugten Tools
          </h2>
        </div>

        <div className="mb-8">
          <p className="text-[#666666] mb-3">
            für schnelle Absprachen (Chat)
          </p>
          <div className="grid grid-cols-2 gap-3">
            {chatOptions.map((option) => (
              <button
                key={option}
                onClick={() => setChatTool(option)}
                className={`p-4 rounded-[12px] border-2 transition-all ${
                  chatTool === option
                    ? "border-[#E30613] bg-[#FFF5F5]"
                    : "border-[#E0E0E0] bg-white hover:border-[#E30613]"
                }`}
              >
                <span className="text-[#333333]">{option}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <p className="text-[#666666] mb-3">
            für Meetings & Calls
          </p>
          <div className="grid grid-cols-2 gap-3">
            {meetingOptions.map((option) => (
              <button
                key={option}
                onClick={() => setMeetingTool(option)}
                className={`p-4 rounded-[12px] border-2 transition-all ${
                  meetingTool === option
                    ? "border-[#E30613] bg-[#FFF5F5]"
                    : "border-[#E0E0E0] bg-white hover:border-[#E30613]"
                }`}
              >
                <span className="text-[#333333] text-sm">
                  {option}
                </span>
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => onNext({ chatTool, meetingTool })}
          disabled={!canProceed}
          className={`w-full py-4 rounded-[12px] transition-colors ${
            canProceed
              ? "bg-[#E30613] text-white hover:bg-[#C00511]"
              : "bg-[#E0E0E0] text-[#999999] cursor-not-allowed"
          }`}
        >
          Weiter
        </button>
      </div>
    </div>
  );
}

function WorkStyleLocationScreen({ onNext }) {
  const [collaborationStyle, setCollaborationStyle] =
    useState("");
  const [locationMode, setLocationMode] = useState("");

  const workStyleOptions = [
    {
      id: "sprinter",
      emoji: "🏃",
      title: "Sprinter",
      desc: "Tägliche Check-ins (Daily Scrums)",
    },
    {
      id: "marathon",
      emoji: "🚶",
      title: "Marathon",
      desc: "Wöchentliche Meetings",
    },
  ];

  const locationOptions = [
    {
      id: "remote",
      emoji: "💻",
      title: "Remote",
      desc: "100% Online",
    },
    {
      id: "hybrid",
      emoji: "🔄",
      title: "Hybrid",
      desc: "Mix aus Online & Live",
    },
    {
      id: "campus",
      emoji: "📚",
      title: "Campus",
      desc: "Physische Treffen",
    },
  ];

  const canProceed = collaborationStyle && locationMode;

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="w-full max-w-[393px] mx-auto">
        <div className="mb-6">
          <p className="text-[#999999] mb-2">
            Organisatorisches · 4/5
          </p>
          <h2 className="text-[#333333] mb-3">
            Arbeitsweise & Ort
          </h2>
        </div>

        <div className="mb-8">
          <p className="text-[#666666] mb-3">
            Wie eng soll die Zusammenarbeit getaktet sein?
          </p>
          <div className="space-y-3">
            {workStyleOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setCollaborationStyle(option.id)}
                className={`w-full p-5 rounded-[12px] border-2 transition-all text-left ${
                  collaborationStyle === option.id
                    ? "border-[#E30613] bg-[#FFF5F5]"
                    : "border-[#E0E0E0] bg-white hover:border-[#E30613]"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-3xl">
                    {option.emoji}
                  </span>
                  <div className="flex-1">
                    <h4 className="text-[#333333] mb-1">
                      {option.title}
                    </h4>
                    <p className="text-[#666666]">
                      {option.desc}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <p className="text-[#666666] mb-3">
            Wo findet die Arbeit statt?
          </p>
          <div className="space-y-3">
            {locationOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setLocationMode(option.id)}
                className={`w-full p-4 rounded-[12px] border-2 transition-all text-left ${
                  locationMode === option.id
                    ? "border-[#E30613] bg-[#FFF5F5]"
                    : "border-[#E0E0E0] bg-white hover:border-[#E30613]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">
                    {option.emoji}
                  </span>
                  <div className="flex-1">
                    <h4 className="text-[#333333]">
                      {option.title}
                    </h4>
                    <p className="text-[#666666] text-sm">
                      {option.desc}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() =>
            onNext({ collaborationStyle, locationMode })
          }
          disabled={!canProceed}
          className={`w-full py-4 rounded-[12px] transition-colors ${
            canProceed
              ? "bg-[#E30613] text-white hover:bg-[#C00511]"
              : "bg-[#E0E0E0] text-[#999999] cursor-not-allowed"
          }`}
        >
          Weiter
        </button>
      </div>
    </div>
  );
}

function LanguageScreen({ onNext }) {
  const [languagesSpoken, setLanguagesSpoken] = useState([]);
  const [projectLanguage, setProjectLanguage] = useState("");

  const languages = [
    "Deutsch",
    "English",
    "Español",
    "Français",
    "Italiano",
    "Romanian",
  ];
  const projectOptions = [
    "Nur Deutsch",
    "Nur Englisch",
    "Egal (Mix ist okay)",
  ];

  const toggleLanguage = (lang) => {
    setLanguagesSpoken((prev) =>
      prev.includes(lang)
        ? prev.filter((l) => l !== lang)
        : [...prev, lang],
    );
  };

  const canProceed =
    languagesSpoken.length > 0 && projectLanguage;

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="w-full max-w-[393px] mx-auto">
        <div className="mb-6">
          <p className="text-[#999999] mb-2">
            Organisatorisches · 5/5
          </p>
          <h2 className="text-[#333333] mb-3">Sprachen</h2>
        </div>

        <div className="mb-8">
          <p className="text-[#666666] mb-3">
            Welche Sprachen sprichst du fließend?
          </p>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => toggleLanguage(lang)}
                className={`px-4 py-2 rounded-[12px] border-2 transition-all ${
                  languagesSpoken.includes(lang)
                    ? "border-[#E30613] bg-[#FFF5F5] text-[#E30613]"
                    : "border-[#E0E0E0] bg-white text-[#333333] hover:border-[#E30613]"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <p className="text-[#666666] mb-3">
            Projektsprache-Präferenz
          </p>
          <div className="space-y-3">
            {projectOptions.map((option) => (
              <button
                key={option}
                onClick={() => setProjectLanguage(option)}
                className={`w-full p-4 rounded-[12px] border-2 transition-all text-left ${
                  projectLanguage === option
                    ? "border-[#E30613] bg-[#FFF5F5]"
                    : "border-[#E0E0E0] bg-white hover:border-[#E30613]"
                }`}
              >
                <span className="text-[#333333]">{option}</span>
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() =>
            onNext({ languagesSpoken, projectLanguage })
          }
          disabled={!canProceed}
          className={`w-full py-4 rounded-[12px] transition-colors ${
            canProceed
              ? "bg-[#E30613] text-white hover:bg-[#C00511]"
              : "bg-[#E0E0E0] text-[#999999] cursor-not-allowed"
          }`}
        >
          Weiter
        </button>
      </div>
    </div>
  );
}

// ===== KATEGORIE 2: SOFTSKILLS =====

function WorkStyleScreen({ onNext }) {
  const [qualitySlider, setQualitySlider] = useState("");
  const [startTiming, setStartTiming] = useState("");

  const qualityOptions = [
    {
      id: "finisher",
      emoji: "✅",
      title: "Der Finisher",
      desc: "Hauptsache es ist endlich vorbei.",
    },
    {
      id: "polisher",
      emoji: "✨",
      title: "Der Polisher",
      desc: "Die Formatierung muss perfekt sein.",
    },
  ];

  const timingOptions = [
    {
      id: "stetige",
      emoji: "🐢",
      title: "Der Stetige",
      desc: "Sofort anfangen, kein Zeitdruck.",
    },
    {
      id: "deadline",
      emoji: "🏄",
      title: "Deadline-Surfer",
      desc: "Brauche Druck kurz vor Schluss.",
    },
  ];

  const canProceed = qualitySlider && startTiming;

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="w-full max-w-[393px] mx-auto">
        <div className="mb-6">
          <p className="text-[#999999] mb-2">
            Softskills · 1/4
          </p>
          <h2 className="text-[#333333] mb-3">Arbeitsstil</h2>
        </div>

        <div className="mb-8">
          <p className="text-[#666666] mb-3">
            Es ist 22:00 Uhr, die Abgabe ist morgen. Das Projekt ist zwar fertig, aber nicht
            perfekt. Was denkst du?
          </p>
          <div className="space-y-3">
            {qualityOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setQualitySlider(option.id)}
                className={`w-full p-5 rounded-[12px] border-2 transition-all text-left ${
                  qualitySlider === option.id
                    ? "border-[#E30613] bg-[#FFF5F5]"
                    : "border-[#E0E0E0] bg-white hover:border-[#E30613]"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-3xl">
                    {option.emoji}
                  </span>
                  <div className="flex-1">
                    <h4 className="text-[#333333] mb-1">
                      {option.title}
                    </h4>
                    <p className="text-[#666666]">
                      {option.desc}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <p className="text-[#666666] mb-3">
            Wann fängt dein Motor an zu laufen?
          </p>
          <div className="space-y-3">
            {timingOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setStartTiming(option.id)}
                className={`w-full p-5 rounded-[12px] border-2 transition-all text-left ${
                  startTiming === option.id
                    ? "border-[#E30613] bg-[#FFF5F5]"
                    : "border-[#E0E0E0] bg-white hover:border-[#E30613]"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-3xl">
                    {option.emoji}
                  </span>
                  <div className="flex-1">
                    <h4 className="text-[#333333] mb-1">
                      {option.title}
                    </h4>
                    <p className="text-[#666666]">
                      {option.desc}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => onNext({ qualitySlider, startTiming })}
          disabled={!canProceed}
          className={`w-full py-4 rounded-[12px] transition-colors ${
            canProceed
              ? "bg-[#E30613] text-white hover:bg-[#C00511]"
              : "bg-[#E0E0E0] text-[#999999] cursor-not-allowed"
          }`}
        >
          Weiter
        </button>
      </div>
    </div>
  );
}

function RoleConflictScreen({ onNext }) {
  const [teamRole, setTeamRole] = useState("");
  const [discussionStyle, setDiscussionStyle] = useState("");
  const [feedbackStyle, setFeedbackStyle] = useState("");

  const roleOptions = [
    {
      id: "mastermind",
      emoji: "🧠",
      title: "Mastermind",
      desc: "Planer & Stratege",
    },
    {
      id: "gesicht",
      emoji: "🗣️",
      title: "Gesicht",
      desc: "Kommunikator",
    },
    {
      id: "macher",
      emoji: "⚡",
      title: "Macher",
      desc: "Schneller Umsetzer",
    },
    {
      id: "visionaer",
      emoji: "💡",
      title: "Visionär",
      desc: "Ideengeber",
    },
  ];

  const discussionOptions = [
    { id: "laut", label: "laut" },
    { id: "still", label: "still" },
  ];

  const feedbackOptions = [
    { id: "harmonie", emoji: "🕊️", title: "Harmonie" },
    {
      id: "konfrontation",
      emoji: "💪",
      title: "Konfrontation",
    },
    { id: "diplomatie", emoji: "🤝", title: "Diplomatie" },
  ];

  const canProceed =
    teamRole && discussionStyle && feedbackStyle;

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="w-full max-w-[393px] mx-auto">
        <div className="mb-6">
          <p className="text-[#999999] mb-2">
            Softskills · 2/4
          </p>
          <h2 className="text-[#333333] mb-3">
            Rolle & Kommunikation
          </h2>
        </div>

        <div className="mb-6">
          <p className="text-[#666666] mb-3">
            Deine Rolle im Team
          </p>
          <div className="grid grid-cols-2 gap-3">
            {roleOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setTeamRole(option.id)}
                className={`p-4 rounded-[12px] border-2 transition-all ${
                  teamRole === option.id
                    ? "border-[#E30613] bg-[#FFF5F5]"
                    : "border-[#E0E0E0] bg-white hover:border-[#E30613]"
                }`}
              >
                <div className="text-center">
                  <div className="text-3xl mb-2">
                    {option.emoji}
                  </div>
                  <h4 className="text-[#333333] text-sm mb-1">
                    {option.title}
                  </h4>
                  <p className="text-[#666666] text-xs">
                    {option.desc}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <p className="text-[#666666] mb-3">
            In einem Brainstorming denkst du ...
          </p>
          <div className="flex gap-3">
            {discussionOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setDiscussionStyle(option.id)}
                className={`flex-1 p-4 rounded-[12px] border-2 transition-all ${
                  discussionStyle === option.id
                    ? "border-[#E30613] bg-[#FFF5F5]"
                    : "border-[#E0E0E0] bg-white hover:border-[#E30613]"
                }`}
              >
                <span className="text-[#333333]">
                  {option.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <p className="text-[#666666] mb-3">
            Bei schlechter Arbeit eines Teammates wählst du...
          </p>
          <div className="flex gap-3">
            {feedbackOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setFeedbackStyle(option.id)}
                className={`flex-1 p-3 rounded-[12px] border-2 transition-all ${
                  feedbackStyle === option.id
                    ? "border-[#E30613] bg-[#FFF5F5]"
                    : "border-[#E0E0E0] bg-white hover:border-[#E30613]"
                }`}
              >
                <div className="text-center">
                  <div className="text-2xl mb-1">
                    {option.emoji}
                  </div>
                  <p className="text-[#333333] text-xs">
                    {option.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() =>
            onNext({ teamRole, discussionStyle, feedbackStyle })
          }
          disabled={!canProceed}
          className={`w-full py-4 rounded-[12px] transition-colors ${
            canProceed
              ? "bg-[#E30613] text-white hover:bg-[#C00511]"
              : "bg-[#E0E0E0] text-[#999999] cursor-not-allowed"
          }`}
        >
          Weiter
        </button>
      </div>
    </div>
  );
}

function OrganizationScreen({ onNext }) {
  const [desktopStyle, setDesktopStyle] = useState("");
  const [planningDepth, setPlanningDepth] = useState("");

  const desktopOptions = [
    {
      id: "chaos",
      emoji: "🌪️",
      title: "Chaos-Genie",
      desc: "Alles voll",
    },
    {
      id: "purist",
      emoji: "✨",
      title: "Purist",
      desc: "Komplett leer",
    },
    {
      id: "pragmatiker",
      emoji: "⚖️",
      title: "Pragmatiker",
      desc: "Gemischt",
    },
  ];

  const planningOptions = [
    {
      id: "excel",
      emoji: "📊",
      title: "Excel-Liste",
      desc: "Detaillierte Planung",
    },
    {
      id: "spontan",
      emoji: "🎲",
      title: "Spontan",
      desc: "Basics planen, Rest ergibt sich",
    },
  ];

  const canProceed = desktopStyle && planningDepth;

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="w-full max-w-[393px] mx-auto">
        <div className="mb-6">
          <p className="text-[#999999] mb-2">
            Softskills · 3/4
          </p>
          <h2 className="text-[#333333] mb-3">
            Ordnung & Planung
          </h2>
        </div>

        <div className="mb-8">
          <p className="text-[#666666] mb-3">
            Dein Desktop sieht so aus...
          </p>
          <div className="space-y-3">
            {desktopOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setDesktopStyle(option.id)}
                className={`w-full p-4 rounded-[12px] border-2 transition-all text-left ${
                  desktopStyle === option.id
                    ? "border-[#E30613] bg-[#FFF5F5]"
                    : "border-[#E0E0E0] bg-white hover:border-[#E30613]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">
                    {option.emoji}
                  </span>
                  <div className="flex-1">
                    <h4 className="text-[#333333]">
                      {option.title}
                    </h4>
                    <p className="text-[#666666] text-sm">
                      {option.desc}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <p className="text-[#666666] mb-3">Wie sieht deine Urlaubsplanung aus?</p>
          <div className="space-y-3">
            {planningOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setPlanningDepth(option.id)}
                className={`w-full p-5 rounded-[12px] border-2 transition-all text-left ${
                  planningDepth === option.id
                    ? "border-[#E30613] bg-[#FFF5F5]"
                    : "border-[#E0E0E0] bg-white hover:border-[#E30613]"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-3xl">
                    {option.emoji}
                  </span>
                  <div className="flex-1">
                    <h4 className="text-[#333333] mb-1">
                      {option.title}
                    </h4>
                    <p className="text-[#666666]">
                      {option.desc}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() =>
            onNext({ desktopStyle, planningDepth })
          }
          disabled={!canProceed}
          className={`w-full py-4 rounded-[12px] transition-colors ${
            canProceed
              ? "bg-[#E30613] text-white hover:bg-[#C00511]"
              : "bg-[#E0E0E0] text-[#999999] cursor-not-allowed"
          }`}
        >
          Weiter
        </button>
      </div>
    </div>
  );
}

function FocusScreen({ onNext }) {
  const [focusMode, setFocusMode] = useState("");

  const options = [
    {
      id: "multitasking",
      emoji: "📱",
      title: "Multitasking",
      desc: "Immer erreichbar, kurze Häppchen",
    },
    {
      id: "deepwork",
      emoji: "🧘",
      title: "Deep Work",
      desc: "3h Flugmodus, volle Konzentration",
    },
  ];

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="w-full max-w-[393px] mx-auto">
        <div className="mb-6">
          <p className="text-[#999999] mb-2">
            Softskills · 4/4
          </p>
          <h2 className="text-[#333333] mb-3">Fokus-Modus</h2>
          <p className="text-[#666666]">
            Wie arbeitest du am liebsten an einer schweren
            Aufgabe?
          </p>
        </div>

        <div className="space-y-4 mb-8">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => setFocusMode(option.id)}
              className={`w-full p-6 rounded-[12px] border-2 transition-all text-left ${
                focusMode === option.id
                  ? "border-[#E30613] bg-[#FFF5F5]"
                  : "border-[#E0E0E0] bg-white hover:border-[#E30613]"
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="text-4xl">{option.emoji}</span>
                <div className="flex-1">
                  <h4 className="text-[#333333] mb-2">
                    {option.title}
                  </h4>
                  <p className="text-[#666666]">
                    {option.desc}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <button
          onClick={() => onNext({ focusMode })}
          disabled={!focusMode}
          className={`w-full py-4 rounded-[12px] transition-colors ${
            focusMode
              ? "bg-[#E30613] text-white hover:bg-[#C00511]"
              : "bg-[#E0E0E0] text-[#999999] cursor-not-allowed"
          }`}
        >
          Weiter
        </button>
      </div>
    </div>
  );
}

// ===== KATEGORIE 3: HARDSKILLS =====

function GradesStrengthsScreen({ onNext }) {
  const [gpa, setGpa] = useState("");
  const [strength, setStrength] = useState("");

  const gpaOptions = [
    { id: "high", label: "High Performer", desc: "< 1.7" },
    { id: "solid", label: "Solid Midfield", desc: "1.7 - 2.8" },
    { id: "survivor", label: "Survivor", desc: "> 2.8" },
  ];

  const strengthOptions = [
    {
      id: "logiker",
      emoji: "🧮",
      title: "Logiker",
      desc: "Mathe & Algorithmen",
    },
    {
      id: "coder",
      emoji: "💻",
      title: "Coder",
      desc: "Programmierung",
    },
    {
      id: "schreiber",
      emoji: "✍️",
      title: "Schreiber",
      desc: "Dokumentation",
    },
  ];

  const canProceed = gpa && strength;

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="w-full max-w-[393px] mx-auto">
        <div className="mb-6">
          <p className="text-[#999999] mb-2">
            Hardskills · 1/2
          </p>
          <h2 className="text-[#333333] mb-3">
            Noten & Stärken
          </h2>
        </div>

        <div className="mb-8">
          <p className="text-[#666666] mb-3">
            Dein Notendurchschnitt
          </p>
          <div className="space-y-3">
            {gpaOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setGpa(option.id)}
                className={`w-full p-4 rounded-[12px] border-2 transition-all text-left ${
                  gpa === option.id
                    ? "border-[#E30613] bg-[#FFF5F5]"
                    : "border-[#E0E0E0] bg-white hover:border-[#E30613]"
                }`}
              >
                <h4 className="text-[#333333] mb-1">
                  {option.label}
                </h4>
                <p className="text-[#666666] text-sm">
                  {option.desc}
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <p className="text-[#666666] mb-3">
            Deine größte Stärke
          </p>
          <div className="grid grid-cols-3 gap-3">
            {strengthOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setStrength(option.id)}
                className={`p-4 rounded-[12px] border-2 transition-all ${
                  strength === option.id
                    ? "border-[#E30613] bg-[#FFF5F5]"
                    : "border-[#E0E0E0] bg-white hover:border-[#E30613]"
                }`}
              >
                <div className="text-center">
                  <div className="text-3xl mb-2">
                    {option.emoji}
                  </div>
                  <h4 className="text-[#333333] text-sm mb-1">
                    {option.title}
                  </h4>
                  <p className="text-[#666666] text-xs">
                    {option.desc}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => onNext({ gpa, strength })}
          disabled={!canProceed}
          className={`w-full py-4 rounded-[12px] transition-colors ${
            canProceed
              ? "bg-[#E30613] text-white hover:bg-[#C00511]"
              : "bg-[#E0E0E0] text-[#999999] cursor-not-allowed"
          }`}
        >
          Weiter
        </button>
      </div>
    </div>
  );
}

function ExperienceScreen({ onNext }) {
  const [jobExperience, setJobExperience] = useState("");
  const [projectExperience, setProjectExperience] =
    useState("");

  const jobOptions = [
    { id: "level0", label: "Level 0", desc: "Nur Studium" },
    { id: "level1", label: "Level 1", desc: "Praktikum" },
    { id: "level2", label: "Level 2", desc: "Werkstudent" },
    {
      id: "level3",
      label: "Level 3",
      desc: "Vollzeit-Erfahrung",
    },
  ];

  const projectOptions = [
    { id: "tutorial", label: "Tutorial", desc: "Nur Übungen" },
    {
      id: "copy",
      label: "Copy & Paste",
      desc: "Einfache Projekte",
    },
    {
      id: "scratch",
      label: "From Scratch",
      desc: "Eigene Projekte",
    },
    {
      id: "production",
      label: "Production",
      desc: "Live-Systeme",
    },
  ];

  const canProceed = jobExperience && projectExperience;

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="w-full max-w-[393px] mx-auto">
        <div className="mb-6">
          <p className="text-[#999999] mb-2">
            Hardskills · 2/2
          </p>
          <h2 className="text-[#333333] mb-3">Erfahrung</h2>
        </div>

        <div className="mb-8">
          <p className="text-[#666666] mb-3">Job-Erfahrung</p>
          <div className="space-y-2">
            {jobOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setJobExperience(option.id)}
                className={`w-full p-3 rounded-[12px] border-2 transition-all text-left ${
                  jobExperience === option.id
                    ? "border-[#E30613] bg-[#FFF5F5]"
                    : "border-[#E0E0E0] bg-white hover:border-[#E30613]"
                }`}
              >
                <h4 className="text-[#333333]">
                  {option.label}
                </h4>
                <p className="text-[#666666] text-sm">
                  {option.desc}
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <p className="text-[#666666] mb-3">
            Projekt-Erfahrung
          </p>
          <div className="space-y-2">
            {projectOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setProjectExperience(option.id)}
                className={`w-full p-3 rounded-[12px] border-2 transition-all text-left ${
                  projectExperience === option.id
                    ? "border-[#E30613] bg-[#FFF5F5]"
                    : "border-[#E0E0E0] bg-white hover:border-[#E30613]"
                }`}
              >
                <h4 className="text-[#333333]">
                  {option.label}
                </h4>
                <p className="text-[#666666] text-sm">
                  {option.desc}
                </p>
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() =>
            onNext({ jobExperience, projectExperience })
          }
          disabled={!canProceed}
          className={`w-full py-4 rounded-[12px] transition-colors ${
            canProceed
              ? "bg-[#E30613] text-white hover:bg-[#C00511]"
              : "bg-[#E0E0E0] text-[#999999] cursor-not-allowed"
          }`}
        >
          Weiter
        </button>
      </div>
    </div>
  );
}

// ===== KATEGORIE 4: ZIELE & ERWARTUNGEN =====

function BudgetScreen({ onNext, initialValues }) {
  const [energyPoints, setEnergyPoints] =
    useState(initialValues);

  const total =
    energyPoints.note +
    energyPoints.freizeit +
    energyPoints.andereFacher +
    energyPoints.schlaf;
  const isValid = total === 100;

  const handleSliderChange = (category, value) => {
    setEnergyPoints({
      ...energyPoints,
      [category]: parseInt(value),
    });
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="w-full max-w-[393px] mx-auto">
        <div className="mb-6">
          <p className="text-[#999999] mb-2">
            Ziele & Erwartungen · 1/3
          </p>
          <h2 className="text-[#333333] mb-3">
            Dein Semester-Budget
          </h2>
          <p className="text-[#666666]">
            Du hast 100 Energie-Punkte. Wie verteilst du sie?
          </p>
        </div>

        <div
          className={`mb-8 p-4 rounded-[12px] text-center ${
            isValid
              ? "bg-[#E7F5E7] border-2 border-[#4CAF50]"
              : "bg-[#FFF5F5] border-2 border-[#E30613]"
          }`}
        >
          <p className="text-[#333333]">
            Gesamt:{" "}
            <span
              className={
                isValid ? "text-[#4CAF50]" : "text-[#E30613]"
              }
            >
              {total}
            </span>{" "}
            / 100
          </p>
        </div>

        <div className="space-y-6 mb-8">
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-[#333333]">Bestnote</label>
              <span className="text-[#E30613]">
                {energyPoints.note}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={energyPoints.note}
              onChange={(e) =>
                handleSliderChange("note", e.target.value)
              }
              className="w-full h-2 bg-[#E0E0E0] rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #E30613 0%, #E30613 ${energyPoints.note}%, #E0E0E0 ${energyPoints.note}%, #E0E0E0 100%)`,
              }}
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-[#333333]">
                Freizeit / Party / Sport
              </label>
              <span className="text-[#E30613]">
                {energyPoints.freizeit}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={energyPoints.freizeit}
              onChange={(e) =>
                handleSliderChange("freizeit", e.target.value)
              }
              className="w-full h-2 bg-[#E0E0E0] rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #E30613 0%, #E30613 ${energyPoints.freizeit}%, #E0E0E0 ${energyPoints.freizeit}%, #E0E0E0 100%)`,
              }}
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-[#333333]">
                Andere Fächer / Arbeit
              </label>
              <span className="text-[#E30613]">
                {energyPoints.andereFacher}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={energyPoints.andereFacher}
              onChange={(e) =>
                handleSliderChange(
                  "andereFacher",
                  e.target.value,
                )
              }
              className="w-full h-2 bg-[#E0E0E0] rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #E30613 0%, #E30613 ${energyPoints.andereFacher}%, #E0E0E0 ${energyPoints.andereFacher}%, #E0E0E0 100%)`,
              }}
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-[#333333]">
                Schlaf / Wellness
              </label>
              <span className="text-[#E30613]">
                {energyPoints.schlaf}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={energyPoints.schlaf}
              onChange={(e) =>
                handleSliderChange("schlaf", e.target.value)
              }
              className="w-full h-2 bg-[#E0E0E0] rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #E30613 0%, #E30613 ${energyPoints.schlaf}%, #E0E0E0 ${energyPoints.schlaf}%, #E0E0E0 100%)`,
              }}
            />
          </div>
        </div>

        {!isValid && (
          <div className="mb-4 p-3 bg-[#FFF5F5] border border-[#E30613] rounded-[12px] text-center">
            <p className="text-[#E30613]">
              Bitte verteile genau 100 Punkte!
            </p>
          </div>
        )}

        <button
          onClick={() => onNext({ energyPoints })}
          disabled={!isValid}
          className={`w-full py-4 rounded-[12px] transition-colors ${
            isValid
              ? "bg-[#E30613] text-white hover:bg-[#C00511]"
              : "bg-[#E0E0E0] text-[#999999] cursor-not-allowed"
          }`}
        >
          Weiter
        </button>

        <style>{`
          input[type="range"]::-webkit-slider-thumb {
            appearance: none;
            width: 20px;
            height: 20px;
            background: #E30613;
            border-radius: 50%;
            cursor: pointer;
            border: 2px solid white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          }
          
          input[type="range"]::-moz-range-thumb {
            width: 20px;
            height: 20px;
            background: #E30613;
            border-radius: 50%;
            cursor: pointer;
            border: 2px solid white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          }
        `}</style>
      </div>
    </div>
  );
}

function LearningGoalScreen({ onNext }) {
  const [learningGoal, setLearningGoal] = useState("");

  const options = [
    {
      id: "pragmatiker",
      emoji: "💊",
      color: "blue",
      title: "Pragmatiker",
      desc: "Effizienz · Praxis · Schnell fertig werden",
    },
    {
      id: "forscher",
      emoji: "💊",
      color: "red",
      title: "Forscher",
      desc: "Deep Dive · Theorie · Alles verstehen",
    },
  ];

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="w-full max-w-[393px] mx-auto">
        <div className="mb-6">
          <p className="text-[#999999] mb-2">
            Ziele & Erwartungen · 2/3
          </p>
          <h2 className="text-[#333333] mb-3">Dein Lernziel</h2>
          <p className="text-[#666666] mb-6">
            Wie möchtest du lernen?
          </p>
        </div>

        <div className="space-y-4 mb-8">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => setLearningGoal(option.id)}
              className={`w-full p-6 rounded-[12px] border-2 transition-all text-left ${
                learningGoal === option.id
                  ? "border-[#E30613] bg-[#FFF5F5]"
                  : "border-[#E0E0E0] bg-white hover:border-[#E30613]"
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
                    option.color === "blue"
                      ? "bg-blue-100"
                      : "bg-red-100"
                  }`}
                >
                  {option.emoji}
                </div>
                <div className="flex-1">
                  <h4 className="text-[#333333] mb-2">
                    {option.title}
                  </h4>
                  <p className="text-[#666666]">
                    {option.desc}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <button
          onClick={() => onNext({ learningGoal })}
          disabled={!learningGoal}
          className={`w-full py-4 rounded-[12px] transition-colors ${
            learningGoal
              ? "bg-[#E30613] text-white hover:bg-[#C00511]"
              : "bg-[#E0E0E0] text-[#999999] cursor-not-allowed"
          }`}
        >
          Weiter
        </button>
      </div>
    </div>
  );
}

function LoadTimeScreen({ onNext }) {
  const [semesterLoad, setSemesterLoad] = useState("");
  const [hoursPerWeek, setHoursPerWeek] = useState("");

  const loadOptions = [
    {
      id: "allin",
      emoji: "🔥",
      title: "All-In",
      desc: "Nur 1-2 Fächer, volle Power",
    },
    {
      id: "jongleur",
      emoji: "🤹",
      title: "Jongleur",
      desc: "3-4 Fächer parallel",
    },
    {
      id: "wackel",
      emoji: "😰",
      title: "Wackelkandidat",
      desc: "5+ Fächer, Chaos-Modus",
    },
  ];

  const hoursOptions = [
    { id: "low", label: "Low", desc: "2-4h / Woche" },
    { id: "std", label: "Standard", desc: "5-8h / Woche" },
    { id: "high", label: "High", desc: "10h+ / Woche" },
  ];

  const canProceed = semesterLoad && hoursPerWeek;

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="w-full max-w-[393px] mx-auto">
        <div className="mb-6">
          <p className="text-[#999999] mb-2">
            Ziele & Erwartungen · 3/3
          </p>
          <h2 className="text-[#333333] mb-3">Last & Zeit</h2>
        </div>

        <div className="mb-8">
          <p className="text-[#666666] mb-3">
            Deine Semester-Last
          </p>
          <div className="space-y-3">
            {loadOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setSemesterLoad(option.id)}
                className={`w-full p-4 rounded-[12px] border-2 transition-all text-left ${
                  semesterLoad === option.id
                    ? "border-[#E30613] bg-[#FFF5F5]"
                    : "border-[#E0E0E0] bg-white hover:border-[#E30613]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">
                    {option.emoji}
                  </span>
                  <div className="flex-1">
                    <h4 className="text-[#333333]">
                      {option.title}
                    </h4>
                    <p className="text-[#666666] text-sm">
                      {option.desc}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <p className="text-[#666666] mb-3">
            Zeit pro Woche für Gruppenarbeiten
          </p>
          <div className="space-y-2">
            {hoursOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setHoursPerWeek(option.id)}
                className={`w-full p-3 rounded-[12px] border-2 transition-all text-left ${
                  hoursPerWeek === option.id
                    ? "border-[#E30613] bg-[#FFF5F5]"
                    : "border-[#E0E0E0] bg-white hover:border-[#E30613]"
                }`}
              >
                <h4 className="text-[#333333]">
                  {option.label}
                </h4>
                <p className="text-[#666666] text-sm">
                  {option.desc}
                </p>
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => onNext({ semesterLoad, hoursPerWeek })}
          disabled={!canProceed}
          className={`w-full py-4 rounded-[12px] transition-colors ${
            canProceed
              ? "bg-[#E30613] text-white hover:bg-[#C00511]"
              : "bg-[#E0E0E0] text-[#999999] cursor-not-allowed"
          }`}
        >
          Weiter
        </button>
      </div>
    </div>
  );
}

// ===== KATEGORIE 5: PERSÖNLICHE INTERESSEN =====

function InterestsScreen({ onComplete }) {
  const [interests, setInterests] = useState([]);

  const allInterests = [
    { id: "fussball", emoji: "⚽", label: "Fußball" },
    { id: "gaming", emoji: "🎮", label: "Gaming" },
    { id: "kunst", emoji: "🎨", label: "Kunst" },
    { id: "gym", emoji: "💪", label: "Gym" },
    { id: "filme", emoji: "🎬", label: "Filme" },
    { id: "reisen", emoji: "✈️", label: "Reisen" },
    { id: "musik", emoji: "🎵", label: "Musik" },
    { id: "foodie", emoji: "🍕", label: "Foodie" },
    { id: "buecher", emoji: "📚", label: "Bücher" },
    { id: "tech", emoji: "💻", label: "Tech" },
  ];

  const toggleInterest = (id) => {
    if (interests.includes(id)) {
      setInterests(interests.filter((i) => i !== id));
    } else if (interests.length < 3) {
      setInterests([...interests, id]);
    }
  };

  const isValid = interests.length === 3;

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="w-full max-w-[393px] mx-auto">
        <div className="mb-6">
          <p className="text-[#999999] mb-2">
            Persönliche Interessen
          </p>
          <h2 className="text-[#333333] mb-3">
            Deine Interessen
          </h2>
          <p className="text-[#666666] mb-4">
            Wähle genau 3 Favoriten aus
          </p>
          <p className="text-[#E30613]">
            {interests.length} / 3 ausgewählt
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          {allInterests.map((interest) => (
            <button
              key={interest.id}
              onClick={() => toggleInterest(interest.id)}
              className={`px-4 py-3 rounded-[12px] border-2 transition-all ${
                interests.includes(interest.id)
                  ? "border-[#E30613] bg-[#FFF5F5]"
                  : "border-[#E0E0E0] bg-white hover:border-[#E30613]"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">
                  {interest.emoji}
                </span>
                <span className="text-[#333333]">
                  {interest.label}
                </span>
              </div>
            </button>
          ))}
        </div>

        <button
          onClick={() => onComplete({ interests })}
          disabled={!isValid}
          className={`w-full py-4 rounded-[12px] transition-colors ${
            isValid
              ? "bg-[#E30613] text-white hover:bg-[#C00511]"
              : "bg-[#E0E0E0] text-[#999999] cursor-not-allowed"
          }`}
        >
          Profil abschließen
        </button>
      </div>
    </div>
  );
}