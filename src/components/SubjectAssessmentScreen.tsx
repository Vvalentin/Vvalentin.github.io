import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';

export function SubjectAssessmentScreen({ course, onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({
    // Organisatorisches
    groupSize: '',
    courseSchedule: [],
    // Zielsetzung
    gradeGoal: '',
    timeCommitment: '',
    // Hard Skills Informatik
    javaKotlinExperience: '',
    projectPreference: '',
    androidStudioExperience: '',
    uiDevelopment: '',
    frameworksLibraries: '',
    architectureUnderstanding: '',
    databaseModeling: '',
    gitExperience: '',
    testingExperience: '',
    codeDocumentation: '',
    cicdExperience: '',
    mockupPrototyping: '',
    // Hard Skills Wirtschaftsinformatik
    requirementsAnalysis: '',
    businessModeling: '',
    presentationDesign: '',
    pitching: ''
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
  const isIntroScreen = [0, 3, 6, 19].includes(currentStep);
  
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
          <h2 className="text-[#333333] text-center flex-1">{course?.name} Quiz</h2>
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
    return <CategoryIntro 
      title="Organisatorisches" 
      icon="📅"
      description="Lass uns deine Verfügbarkeit für diesen Kurs klären."
      onNext={() => setCurrentStep(1)}
    />;
  }

  // Step 1: Gruppengröße
  if (currentStep === 1) {
    return withHeader(<GroupSizeScreen course={course} onNext={handleNext} />);
  }

  // Step 2: Zeitverfügbarkeit
  if (currentStep === 2) {
    return withHeader(<CourseScheduleScreen course={course} onNext={handleNext} />);
  }

  // KATEGORIE 2: ZIELSETZUNG

  // Step 3: Intro Zielsetzung
  if (currentStep === 3) {
    return <CategoryIntro 
      title="Zielsetzung" 
      icon="🎯"
      description="Was möchtest du in diesem Kurs erreichen?"
      onNext={() => setCurrentStep(4)}
    />;
  }

  // Step 4: Notenziel
  if (currentStep === 4) {
    return <GradeGoalScreen course={course} onNext={handleNext} />;
  }

  // Step 5: Time-Commitment
  if (currentStep === 5) {
    return <TimeCommitmentScreen course={course} onNext={handleNext} />;
  }

  // KATEGORIE 3: HARD SKILLS INFORMATIK

  // Step 6: Intro Hard Skills Informatik
  if (currentStep === 6) {
    return <CategoryIntro 
      title="Hard Skills Informatik" 
      icon="💻"
      description="Wie sicher bist du in der technischen Umsetzung?"
      onNext={() => setCurrentStep(7)}
    />;
  }

  // Block A: Programmiersprachen & Basis
  // Step 7: Java/Kotlin Erfahrung
  if (currentStep === 7) {
    return <JavaKotlinExperienceScreen course={course} onNext={handleNext} />;
  }

  // Step 8: Projekt-Präferenz
  if (currentStep === 8) {
    return <ProjectPreferenceScreen course={course} onNext={handleNext} />;
  }

  // Step 9: Android Studio & Gradle
  if (currentStep === 9) {
    return <AndroidStudioScreen course={course} onNext={handleNext} />;
  }

  // Block B: Mobile Development
  // Step 10: UI-Entwicklung
  if (currentStep === 10) {
    return <UIDevScreen course={course} onNext={handleNext} />;
  }

  // Step 11: Frameworks & Bibliotheken
  if (currentStep === 11) {
    return <FrameworksScreen course={course} onNext={handleNext} />;
  }

  // Step 12: Architektur-Verständnis
  if (currentStep === 12) {
    return <ArchitectureScreen course={course} onNext={handleNext} />;
  }

  // Block C: Daten & Infrastruktur
  // Step 13: Datenbankmodellierung
  if (currentStep === 13) {
    return <DatabaseScreen course={course} onNext={handleNext} />;
  }

  // Step 14: Git
  if (currentStep === 14) {
    return <GitScreen course={course} onNext={handleNext} />;
  }

  // Block D: Qualitätssicherung
  // Step 15: Test-Erfahrung
  if (currentStep === 15) {
    return <TestingScreen course={course} onNext={handleNext} />;
  }

  // Step 16: Code-Dokumentation
  if (currentStep === 16) {
    return <DocumentationScreen course={course} onNext={handleNext} />;
  }

  // Step 17: CI/CD
  if (currentStep === 17) {
    return <CICDScreen course={course} onNext={handleNext} />;
  }

  // Block E: Design-Schnittstelle
  // Step 18: Mockup & Prototyping
  if (currentStep === 18) {
    return <MockupScreen course={course} onNext={handleNext} />;
  }

  // KATEGORIE 4: HARD SKILLS WIRTSCHAFTSINFORMATIK

  // Step 19: Intro Hard Skills WI
  if (currentStep === 19) {
    return <CategoryIntro 
      title="Hard Skills Wirtschaftsinformatik" 
      icon="📊"
      description="Wie sicher bist du im Business-Bereich?"
      onNext={() => setCurrentStep(20)}
    />;
  }

  // Block A: Business Engineering
  // Step 20: Anforderungsanalyse
  if (currentStep === 20) {
    return <RequirementsScreen course={course} onNext={handleNext} />;
  }

  // Step 21: Geschäftsmodell
  if (currentStep === 21) {
    return <BusinessModelScreen course={course} onNext={handleNext} />;
  }

  // Block B: Kommunikation & Verkauf
  // Step 22: Präsentations-Design
  if (currentStep === 22) {
    return <PresentationDesignScreen course={course} onNext={handleNext} />;
  }

  // Step 23: Pitching
  if (currentStep === 23) {
    return <PitchingScreen course={course} onComplete={handleComplete} />;
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

function GroupSizeScreen({ course, onNext }) {
  const [groupSize, setGroupSize] = useState('');

  const options = ['3', '4', '5', 'Egal'];

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="w-full max-w-[393px] mx-auto">
        <div className="mb-6">
          <p className="text-[#999999] mb-2">Organisatorisches · 1/2</p>
          <h2 className="text-[#333333] mb-2">{course?.name}</h2>
          <h3 className="text-[#333333] mb-3">Bevorzugte Gruppengröße</h3>
          <p className="text-[#666666]">Mit wie vielen Personen möchtest du arbeiten?</p>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-8">
          {options.map(option => (
            <button
              key={option}
              onClick={() => setGroupSize(option)}
              className={`p-6 rounded-[12px] border-2 transition-all ${
                groupSize === option
                  ? 'border-[#E30613] bg-[#FFF5F5]'
                  : 'border-[#E0E0E0] bg-white hover:border-[#E30613]'
              }`}
            >
              <span className="text-[#333333] text-xl">{option}</span>
            </button>
          ))}
        </div>

        <button
          onClick={() => onNext({ groupSize })}
          disabled={!groupSize}
          className={`w-full py-4 rounded-[12px] transition-colors ${
            groupSize
              ? 'bg-[#E30613] text-white hover:bg-[#C00511]'
              : 'bg-[#E0E0E0] text-[#999999] cursor-not-allowed'
          }`}
        >
          Weiter
        </button>
      </div>
    </div>
  );
}

function CourseScheduleScreen({ course, onNext }) {
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);

  const days = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
  const timeSlots = ['08:00', '09:30', '11:00', '12:30', '14:00', '15:30', '17:00', '18:30', '20:00'];

  const toggleSlot = (day, time) => {
    const slotId = `${day}-${time}`;
    setSelectedSlots(prev => 
      prev.includes(slotId) 
        ? prev.filter(s => s !== slotId)
        : [...prev, slotId]
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
          <p className="text-[#999999] mb-2">Organisatorisches · 2/2</p>
          <h2 className="text-[#333333] mb-2">{course?.name}</h2>
          <h3 className="text-[#333333] mb-3">Wann hast du Zeit für {course?.name}?</h3>
          <p className="text-[#666666] mb-2">Markiere die Zeiten, in denen du für diesen Kurs Zeit hast.</p>
          <div className="bg-[#FFF5F5] border-l-4 border-[#E30613] p-3 rounded-[12px]">
            <p className="text-[#666666] text-sm">💡 Mehr Zeitslots = höhere Chance auf passende Gruppe!</p>
          </div>
        </div>

        <div className="mb-6 overflow-x-auto" onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}>
          <div className="min-w-[350px]">
            <div className="grid grid-cols-8 gap-1 mb-2">
              <div className="text-xs text-[#999999]"></div>
              {days.map(day => (
                <div key={day} className="text-xs text-[#333333] text-center">{day}</div>
              ))}
            </div>
            {timeSlots.map(time => (
              <div key={time} className="grid grid-cols-8 gap-1 mb-1">
                <div className="text-xs text-[#999999] flex items-center">{time}</div>
                {days.map(day => {
                  const slotId = `${day}-${time}`;
                  const isSelected = selectedSlots.includes(slotId);
                  return (
                    <div
                      key={slotId}
                      onMouseDown={() => handleMouseDown(day, time)}
                      onMouseEnter={() => handleMouseEnter(day, time)}
                      className={`h-10 rounded cursor-pointer transition-colors ${
                        isSelected ? 'bg-[#E30613]' : 'bg-[#E0E0E0] hover:bg-[#FFB3B8]'
                      }`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => onNext({ courseSchedule: selectedSlots })}
          disabled={selectedSlots.length === 0}
          className={`w-full py-4 rounded-[12px] transition-colors ${
            selectedSlots.length > 0
              ? 'bg-[#E30613] text-white hover:bg-[#C00511]'
              : 'bg-[#E0E0E0] text-[#999999] cursor-not-allowed'
          }`}
        >
          Weiter
        </button>
      </div>
    </div>
  );
}

// ===== KATEGORIE 2: ZIELSETZUNG =====

function GradeGoalScreen({ course, onNext }) {
  const [gradeGoal, setGradeGoal] = useState('');

  const options = [
    { id: 'excellent', emoji: '🏆', title: '1.0 oder 1.3', desc: 'Bestnote anstreben' },
    { id: 'good', emoji: '👍', title: '1.7 bis 2.3', desc: 'Gute Note reicht' },
    { id: 'pass', emoji: '✅', title: 'Hauptsache bestehen', desc: 'Note ist zweitrangig' }
  ];

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="w-full max-w-[393px] mx-auto">
        <div className="mb-6">
          <p className="text-[#999999] mb-2">Zielsetzung · 1/2</p>
          <h2 className="text-[#333333] mb-2">{course?.name}</h2>
          <h3 className="text-[#333333] mb-3">Notenziel</h3>
          <p className="text-[#666666]">Welche Note wäre für dich das Mindeste, was dich zufriedenstellen würde?</p>
        </div>

        <div className="space-y-3 mb-8">
          {options.map(option => (
            <button
              key={option.id}
              onClick={() => setGradeGoal(option.id)}
              className={`w-full p-5 rounded-[12px] border-2 transition-all text-left ${
                gradeGoal === option.id
                  ? 'border-[#E30613] bg-[#FFF5F5]'
                  : 'border-[#E0E0E0] bg-white hover:border-[#E30613]'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl">{option.emoji}</span>
                <div className="flex-1">
                  <h4 className="text-[#333333] mb-1">{option.title}</h4>
                  <p className="text-[#666666]">{option.desc}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <button
          onClick={() => onNext({ gradeGoal })}
          disabled={!gradeGoal}
          className={`w-full py-4 rounded-[12px] transition-colors ${
            gradeGoal
              ? 'bg-[#E30613] text-white hover:bg-[#C00511]'
              : 'bg-[#E0E0E0] text-[#999999] cursor-not-allowed'
          }`}
        >
          Weiter
        </button>
      </div>
    </div>
  );
}

function TimeCommitmentScreen({ course, onNext }) {
  const [timeCommitment, setTimeCommitment] = useState('');

  const options = [
    { id: 'low', emoji: '⏱️', title: '1-2h', desc: 'Pro Woche' },
    { id: 'medium', emoji: '⏰', title: '2-5h', desc: 'Pro Woche' },
    { id: 'high', emoji: '⏲️', title: '5-10h', desc: 'Pro Woche' }
  ];

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="w-full max-w-[393px] mx-auto">
        <div className="mb-6">
          <p className="text-[#999999] mb-2">Zielsetzung · 2/2</p>
          <h2 className="text-[#333333] mb-2">{course?.name}</h2>
          <h3 className="text-[#333333] mb-3">Time-Commitment</h3>
          <p className="text-[#666666]">Wie viel Zeit wärst du bereit pro Woche für {course?.name} zu investieren, um deine gewünschte Note zu erreichen?</p>
        </div>

        <div className="space-y-3 mb-8">
          {options.map(option => (
            <button
              key={option.id}
              onClick={() => setTimeCommitment(option.id)}
              className={`w-full p-5 rounded-[12px] border-2 transition-all text-left ${
                timeCommitment === option.id
                  ? 'border-[#E30613] bg-[#FFF5F5]'
                  : 'border-[#E0E0E0] bg-white hover:border-[#E30613]'
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl">{option.emoji}</span>
                <div className="flex-1">
                  <h4 className="text-[#333333] text-xl mb-1">{option.title}</h4>
                  <p className="text-[#666666]">{option.desc}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <button
          onClick={() => onNext({ timeCommitment })}
          disabled={!timeCommitment}
          className={`w-full py-4 rounded-[12px] transition-colors ${
            timeCommitment
              ? 'bg-[#E30613] text-white hover:bg-[#C00511]'
              : 'bg-[#E0E0E0] text-[#999999] cursor-not-allowed'
          }`}
        >
          Weiter
        </button>
      </div>
    </div>
  );
}

// ===== KATEGORIE 3: HARD SKILLS INFORMATIK =====

// Block A: Programmiersprachen & Basis

function JavaKotlinExperienceScreen({ course, onNext }) {
  const [experience, setExperience] = useState('');

  const options = [
    { id: 'none', label: 'Noch nie eine Zeile Code geschrieben' },
    { id: 'basic', label: 'Syntax bekannt, einfache Anwendungen' },
    { id: 'intermediate', label: 'OOP-Konzepte selbstständig angewendet' },
    { id: 'advanced', label: 'Komplexe Anwendung eigenständig umgesetzt' }
  ];

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="w-full max-w-[393px] mx-auto">
        <div className="mb-6">
          <p className="text-[#999999] mb-2">Hard Skills Informatik · Block A · 1/3</p>
          <h2 className="text-[#333333] mb-2">{course?.name}</h2>
          <h3 className="text-[#333333] mb-3">Erfahrung mit Java und Kotlin</h3>
        </div>

        <div className="space-y-2 mb-8">
          {options.map(option => (
            <button
              key={option.id}
              onClick={() => setExperience(option.id)}
              className={`w-full p-4 rounded-[12px] border-2 transition-all text-left ${
                experience === option.id
                  ? 'border-[#E30613] bg-[#FFF5F5]'
                  : 'border-[#E0E0E0] bg-white hover:border-[#E30613]'
              }`}
            >
              <p className="text-[#333333]">{option.label}</p>
            </button>
          ))}
        </div>

        <button
          onClick={() => onNext({ javaKotlinExperience: experience })}
          disabled={!experience}
          className={`w-full py-4 rounded-[12px] transition-colors ${
            experience
              ? 'bg-[#E30613] text-white hover:bg-[#C00511]'
              : 'bg-[#E0E0E0] text-[#999999] cursor-not-allowed'
          }`}
        >
          Weiter
        </button>
      </div>
    </div>
  );
}

function ProjectPreferenceScreen({ course, onNext }) {
  const [preference, setPreference] = useState('');

  const options = [
    { id: 'flexible', label: 'Mir egal, ich passe mich an' },
    { id: 'java', label: 'Bevorzugt Java (fühle mich hier sicherer)' },
    { id: 'kotlin', label: 'Bevorzugt Kotlin (möchte modern entwickeln)' },
    { id: 'javaOnly', label: 'Zwingend Java (kann kein Kotlin)' },
    { id: 'kotlinOnly', label: 'Zwingend Kotlin (will kein Java mehr)' }
  ];

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="w-full max-w-[393px] mx-auto">
        <div className="mb-6">
          <p className="text-[#999999] mb-2">Hard Skills Informatik · Block A · 2/3</p>
          <h2 className="text-[#333333] mb-2">{course?.name}</h2>
          <h3 className="text-[#333333] mb-3">Präferenz für das Projekt</h3>
        </div>

        <div className="space-y-2 mb-8">
          {options.map(option => (
            <button
              key={option.id}
              onClick={() => setPreference(option.id)}
              className={`w-full p-3 rounded-[12px] border-2 transition-all text-left ${
                preference === option.id
                  ? 'border-[#E30613] bg-[#FFF5F5]'
                  : 'border-[#E0E0E0] bg-white hover:border-[#E30613]'
              }`}
            >
              <p className="text-[#333333]">{option.label}</p>
            </button>
          ))}
        </div>

        <button
          onClick={() => onNext({ projectPreference: preference })}
          disabled={!preference}
          className={`w-full py-4 rounded-[12px] transition-colors ${
            preference
              ? 'bg-[#E30613] text-white hover:bg-[#C00511]'
              : 'bg-[#E0E0E0] text-[#999999] cursor-not-allowed'
          }`}
        >
          Weiter
        </button>
      </div>
    </div>
  );
}

function AndroidStudioScreen({ course, onNext }) {
  const [experience, setExperience] = useState('');

  const options = [
    { id: 'never', label: 'Nie benutzt / Musste es erst installieren' },
    { id: 'basic', label: 'Kann Projekt öffnen und starten, bei Fehlern ratlos' },
    { id: 'intermediate', label: 'Nutze Debugger, kann einfache Gradle-Fehler beheben' },
    { id: 'advanced', label: 'Sehr sicher, kenne Shortcuts, manage Dependencies' }
  ];

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="w-full max-w-[393px] mx-auto">
        <div className="mb-6">
          <p className="text-[#999999] mb-2">Hard Skills Informatik · Block A · 3/3</p>
          <h2 className="text-[#333333] mb-2">{course?.name}</h2>
          <h3 className="text-[#333333] mb-3">Android Studio & Gradle</h3>
        </div>

        <div className="space-y-2 mb-8">
          {options.map(option => (
            <button
              key={option.id}
              onClick={() => setExperience(option.id)}
              className={`w-full p-4 rounded-[12px] border-2 transition-all text-left ${
                experience === option.id
                  ? 'border-[#E30613] bg-[#FFF5F5]'
                  : 'border-[#E0E0E0] bg-white hover:border-[#E30613]'
              }`}
            >
              <p className="text-[#333333]">{option.label}</p>
            </button>
          ))}
        </div>

        <button
          onClick={() => onNext({ androidStudioExperience: experience })}
          disabled={!experience}
          className={`w-full py-4 rounded-[12px] transition-colors ${
            experience
              ? 'bg-[#E30613] text-white hover:bg-[#C00511]'
              : 'bg-[#E0E0E0] text-[#999999] cursor-not-allowed'
          }`}
        >
          Weiter
        </button>
      </div>
    </div>
  );
}

// Block B: Mobile Development

function UIDevScreen({ course, onNext }) {
  const [experience, setExperience] = useState('');

  const options = [
    { id: 'none', label: 'Neuland: Noch nie ein UI für eine App gebaut' },
    { id: 'dragdrop', label: 'Drag & Drop: Nutze visuellen Editor' },
    { id: 'basic', label: 'Basic Coder: Kann einfache Layouts im XML anpassen' },
    { id: 'advanced', label: 'Advanced: Baue komplexe Layouts oder nutze Compose' }
  ];

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="w-full max-w-[393px] mx-auto">
        <div className="mb-6">
          <p className="text-[#999999] mb-2">Hard Skills Informatik · Block B · 1/3</p>
          <h2 className="text-[#333333] mb-2">{course?.name}</h2>
          <h3 className="text-[#333333] mb-3">UI-Entwicklung in Android</h3>
        </div>

        <div className="space-y-2 mb-8">
          {options.map(option => (
            <button
              key={option.id}
              onClick={() => setExperience(option.id)}
              className={`w-full p-4 rounded-[12px] border-2 transition-all text-left ${
                experience === option.id
                  ? 'border-[#E30613] bg-[#FFF5F5]'
                  : 'border-[#E0E0E0] bg-white hover:border-[#E30613]'
              }`}
            >
              <p className="text-[#333333]">{option.label}</p>
            </button>
          ))}
        </div>

        <button
          onClick={() => onNext({ uiDevelopment: experience })}
          disabled={!experience}
          className={`w-full py-4 rounded-[12px] transition-colors ${
            experience
              ? 'bg-[#E30613] text-white hover:bg-[#C00511]'
              : 'bg-[#E0E0E0] text-[#999999] cursor-not-allowed'
          }`}
        >
          Weiter
        </button>
      </div>
    </div>
  );
}

function FrameworksScreen({ course, onNext }) {
  const [experience, setExperience] = useState('');

  const options = [
    { id: 'standard', label: 'Nur Android-Standard-Tools' },
    { id: 'basic', label: 'Einfache Libraries nach Anleitung eingebunden' },
    { id: 'advanced', label: 'Erfahrung mit Retrofit, Room, Hilt/Dagger' }
  ];

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="w-full max-w-[393px] mx-auto">
        <div className="mb-6">
          <p className="text-[#999999] mb-2">Hard Skills Informatik · Block B · 2/3</p>
          <h2 className="text-[#333333] mb-2">{course?.name}</h2>
          <h3 className="text-[#333333] mb-3">Frameworks & Bibliotheken</h3>
        </div>

        <div className="space-y-3 mb-8">
          {options.map(option => (
            <button
              key={option.id}
              onClick={() => setExperience(option.id)}
              className={`w-full p-4 rounded-[12px] border-2 transition-all text-left ${
                experience === option.id
                  ? 'border-[#E30613] bg-[#FFF5F5]'
                  : 'border-[#E0E0E0] bg-white hover:border-[#E30613]'
              }`}
            >
              <p className="text-[#333333]">{option.label}</p>
            </button>
          ))}
        </div>

        <button
          onClick={() => onNext({ frameworksLibraries: experience })}
          disabled={!experience}
          className={`w-full py-4 rounded-[12px] transition-colors ${
            experience
              ? 'bg-[#E30613] text-white hover:bg-[#C00511]'
              : 'bg-[#E0E0E0] text-[#999999] cursor-not-allowed'
          }`}
        >
          Weiter
        </button>
      </div>
    </div>
  );
}

function ArchitectureScreen({ course, onNext }) {
  const [experience, setExperience] = useState('');

  const options = [
    { id: 'mainActivity', label: 'Alles in die Main-Activity: Eine Datei, Hauptsache es läuft' },
    { id: 'separation', label: 'Trennung der Belange: Logik und UI in verschiedenen Klassen' },
    { id: 'patterns', label: 'Pattern-Orientiert: MVVM, MVP oder Clean Architecture angewendet' }
  ];

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="w-full max-w-[393px] mx-auto">
        <div className="mb-6">
          <p className="text-[#999999] mb-2">Hard Skills Informatik · Block B · 3/3</p>
          <h2 className="text-[#333333] mb-2">{course?.name}</h2>
          <h3 className="text-[#333333] mb-3">Architektur-Verständnis</h3>
        </div>

        <div className="space-y-3 mb-8">
          {options.map(option => (
            <button
              key={option.id}
              onClick={() => setExperience(option.id)}
              className={`w-full p-4 rounded-[12px] border-2 transition-all text-left ${
                experience === option.id
                  ? 'border-[#E30613] bg-[#FFF5F5]'
                  : 'border-[#E0E0E0] bg-white hover:border-[#E30613]'
              }`}
            >
              <p className="text-[#333333]">{option.label}</p>
            </button>
          ))}
        </div>

        <button
          onClick={() => onNext({ architectureUnderstanding: experience })}
          disabled={!experience}
          className={`w-full py-4 rounded-[12px] transition-colors ${
            experience
              ? 'bg-[#E30613] text-white hover:bg-[#C00511]'
              : 'bg-[#E0E0E0] text-[#999999] cursor-not-allowed'
          }`}
        >
          Weiter
        </button>
      </div>
    </div>
  );
}

// Block C: Daten & Infrastruktur

function DatabaseScreen({ course, onNext }) {
  const [experience, setExperience] = useState('');

  const options = [
    { id: 'theory', label: 'Theorie-Wissen: ER-Modelle aus Vorlesung, nie echte DB' },
    { id: 'simple', label: 'Simple Storage: SharedPreferences oder Textdateien' },
    { id: 'relational', label: 'Relationale Praxis: SQLite/Room mit mehreren Tabellen' },
    { id: 'cloud', label: 'Cloud & Sync: Firebase, AWS oder lokale/Server-Sync' }
  ];

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="w-full max-w-[393px] mx-auto">
        <div className="mb-6">
          <p className="text-[#999999] mb-2">Hard Skills Informatik · Block C · 1/2</p>
          <h2 className="text-[#333333] mb-2">{course?.name}</h2>
          <h3 className="text-[#333333] mb-3">Datenbankmodellierung</h3>
        </div>

        <div className="space-y-2 mb-8">
          {options.map(option => (
            <button
              key={option.id}
              onClick={() => setExperience(option.id)}
              className={`w-full p-4 rounded-[12px] border-2 transition-all text-left ${
                experience === option.id
                  ? 'border-[#E30613] bg-[#FFF5F5]'
                  : 'border-[#E0E0E0] bg-white hover:border-[#E30613]'
              }`}
            >
              <p className="text-[#333333]">{option.label}</p>
            </button>
          ))}
        </div>

        <button
          onClick={() => onNext({ databaseModeling: experience })}
          disabled={!experience}
          className={`w-full py-4 rounded-[12px] transition-colors ${
            experience
              ? 'bg-[#E30613] text-white hover:bg-[#C00511]'
              : 'bg-[#E0E0E0] text-[#999999] cursor-not-allowed'
          }`}
        >
          Weiter
        </button>
      </div>
    </div>
  );
}

function GitScreen({ course, onNext }) {
  const [experience, setExperience] = useState('');

  const options = [
    { id: 'none', label: 'Keine Erfahrung: Speichere als "Projekt_Final_v2.zip"' },
    { id: 'gui', label: 'Basic User: Nutze GUI für Commit/Push, brauche Hilfe bei Problemen' },
    { id: 'advanced', label: 'CLI / Advanced: Sicher mit Branches, PRs, Merge Conflicts' }
  ];

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="w-full max-w-[393px] mx-auto">
        <div className="mb-6">
          <p className="text-[#999999] mb-2">Hard Skills Informatik · Block C · 2/2</p>
          <h2 className="text-[#333333] mb-2">{course?.name}</h2>
          <h3 className="text-[#333333] mb-3">Versionsverwaltung (Git)</h3>
        </div>

        <div className="space-y-3 mb-8">
          {options.map(option => (
            <button
              key={option.id}
              onClick={() => setExperience(option.id)}
              className={`w-full p-4 rounded-[12px] border-2 transition-all text-left ${
                experience === option.id
                  ? 'border-[#E30613] bg-[#FFF5F5]'
                  : 'border-[#E0E0E0] bg-white hover:border-[#E30613]'
              }`}
            >
              <p className="text-[#333333]">{option.label}</p>
            </button>
          ))}
        </div>

        <button
          onClick={() => onNext({ gitExperience: experience })}
          disabled={!experience}
          className={`w-full py-4 rounded-[12px] transition-colors ${
            experience
              ? 'bg-[#E30613] text-white hover:bg-[#C00511]'
              : 'bg-[#E0E0E0] text-[#999999] cursor-not-allowed'
          }`}
        >
          Weiter
        </button>
      </div>
    </div>
  );
}

// Block D: Qualitätssicherung

function TestingScreen({ course, onNext }) {
  const [experience, setExperience] = useState('');

  const options = [
    { id: 'manual', label: 'Manuelles Testen: Klicke die App durch, keine automatischen Tests' },
    { id: 'beginner', label: 'Einsteiger: Habe einfachen Unit-Test geschrieben oder kopiert' },
    { id: 'tester', label: 'Tester: Schreibe regelmäßig Tests, kenne Mocking oder TDD' }
  ];

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="w-full max-w-[393px] mx-auto">
        <div className="mb-6">
          <p className="text-[#999999] mb-2">Hard Skills Informatik · Block D · 1/3</p>
          <h2 className="text-[#333333] mb-2">{course?.name}</h2>
          <h3 className="text-[#333333] mb-3">Test-Erfahrung</h3>
        </div>

        <div className="space-y-3 mb-8">
          {options.map(option => (
            <button
              key={option.id}
              onClick={() => setExperience(option.id)}
              className={`w-full p-4 rounded-[12px] border-2 transition-all text-left ${
                experience === option.id
                  ? 'border-[#E30613] bg-[#FFF5F5]'
                  : 'border-[#E0E0E0] bg-white hover:border-[#E30613]'
              }`}
            >
              <p className="text-[#333333]">{option.label}</p>
            </button>
          ))}
        </div>

        <button
          onClick={() => onNext({ testingExperience: experience })}
          disabled={!experience}
          className={`w-full py-4 rounded-[12px] transition-colors ${
            experience
              ? 'bg-[#E30613] text-white hover:bg-[#C00511]'
              : 'bg-[#E0E0E0] text-[#999999] cursor-not-allowed'
          }`}
        >
          Weiter
        </button>
      </div>
    </div>
  );
}

function DocumentationScreen({ course, onNext }) {
  const [experience, setExperience] = useState('');

  const options = [
    { id: 'none', label: 'Keine Doku: Code muss für sich selbst sprechen' },
    { id: 'comments', label: 'Kommentare: Schreibe Kommentare an schwierigen Stellen' },
    { id: 'professional', label: 'Professionell: Nutze Javadoc/KDoc für externe Dokumentation' }
  ];

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="w-full max-w-[393px] mx-auto">
        <div className="mb-6">
          <p className="text-[#999999] mb-2">Hard Skills Informatik · Block D · 2/3</p>
          <h2 className="text-[#333333] mb-2">{course?.name}</h2>
          <h3 className="text-[#333333] mb-3">Code-Dokumentation</h3>
        </div>

        <div className="space-y-3 mb-8">
          {options.map(option => (
            <button
              key={option.id}
              onClick={() => setExperience(option.id)}
              className={`w-full p-4 rounded-[12px] border-2 transition-all text-left ${
                experience === option.id
                  ? 'border-[#E30613] bg-[#FFF5F5]'
                  : 'border-[#E0E0E0] bg-white hover:border-[#E30613]'
              }`}
            >
              <p className="text-[#333333]">{option.label}</p>
            </button>
          ))}
        </div>

        <button
          onClick={() => onNext({ codeDocumentation: experience })}
          disabled={!experience}
          className={`w-full py-4 rounded-[12px] transition-colors ${
            experience
              ? 'bg-[#E30613] text-white hover:bg-[#C00511]'
              : 'bg-[#E0E0E0] text-[#999999] cursor-not-allowed'
          }`}
        >
          Weiter
        </button>
      </div>
    </div>
  );
}

function CICDScreen({ course, onNext }) {
  const [experience, setExperience] = useState('');

  const options = [
    { id: 'none', label: 'Nie gehört / Nie benutzt' },
    { id: 'user', label: 'Nutzer: Habe in Projekt mit Pipeline gearbeitet, nicht selbst eingerichtet' },
    { id: 'devops', label: 'DevOps: Habe selbst Pipeline konfiguriert (GitHub Actions, GitLab CI)' }
  ];

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="w-full max-w-[393px] mx-auto">
        <div className="mb-6">
          <p className="text-[#999999] mb-2">Hard Skills Informatik · Block D · 3/3</p>
          <h2 className="text-[#333333] mb-2">{course?.name}</h2>
          <h3 className="text-[#333333] mb-3">Continuous Integration / Delivery</h3>
        </div>

        <div className="space-y-3 mb-8">
          {options.map(option => (
            <button
              key={option.id}
              onClick={() => setExperience(option.id)}
              className={`w-full p-4 rounded-[12px] border-2 transition-all text-left ${
                experience === option.id
                  ? 'border-[#E30613] bg-[#FFF5F5]'
                  : 'border-[#E0E0E0] bg-white hover:border-[#E30613]'
              }`}
            >
              <p className="text-[#333333]">{option.label}</p>
            </button>
          ))}
        </div>

        <button
          onClick={() => onNext({ cicdExperience: experience })}
          disabled={!experience}
          className={`w-full py-4 rounded-[12px] transition-colors ${
            experience
              ? 'bg-[#E30613] text-white hover:bg-[#C00511]'
              : 'bg-[#E0E0E0] text-[#999999] cursor-not-allowed'
          }`}
        >
          Weiter
        </button>
      </div>
    </div>
  );
}

// Block E: Design-Schnittstelle

function MockupScreen({ course, onNext }) {
  const [experience, setExperience] = useState('');

  const options = [
    { id: 'none', label: 'Keine Erfahrung: Brauche fertige Bilder oder Anweisungen' },
    { id: 'viewer', label: 'Viewer: Kann Designs in Figma ansehen und Codes herauskopieren' },
    { id: 'creator', label: 'Creator: Kann klickbare Prototypen und Design-Systeme bauen' }
  ];

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="w-full max-w-[393px] mx-auto">
        <div className="mb-6">
          <p className="text-[#999999] mb-2">Hard Skills Informatik · Block E · 1/1</p>
          <h2 className="text-[#333333] mb-2">{course?.name}</h2>
          <h3 className="text-[#333333] mb-3">Mockup & Prototyping</h3>
        </div>

        <div className="space-y-3 mb-8">
          {options.map(option => (
            <button
              key={option.id}
              onClick={() => setExperience(option.id)}
              className={`w-full p-4 rounded-[12px] border-2 transition-all text-left ${
                experience === option.id
                  ? 'border-[#E30613] bg-[#FFF5F5]'
                  : 'border-[#E0E0E0] bg-white hover:border-[#E30613]'
              }`}
            >
              <p className="text-[#333333]">{option.label}</p>
            </button>
          ))}
        </div>

        <button
          onClick={() => onNext({ mockupPrototyping: experience })}
          disabled={!experience}
          className={`w-full py-4 rounded-[12px] transition-colors ${
            experience
              ? 'bg-[#E30613] text-white hover:bg-[#C00511]'
              : 'bg-[#E0E0E0] text-[#999999] cursor-not-allowed'
          }`}
        >
          Weiter
        </button>
      </div>
    </div>
  );
}

// ===== KATEGORIE 4: HARD SKILLS WIRTSCHAFTSINFORMATIK =====

// Block A: Business Engineering

function RequirementsScreen({ course, onNext }) {
  const [experience, setExperience] = useState('');

  const options = [
    { id: 'intuitive', label: 'Intuitiv: To-Do-Liste mit Features, die mir einfallen' },
    { id: 'textbased', label: 'Text-basiert: User Stories oder grobe Funktionsbeschreibungen' },
    { id: 'methodical', label: 'Methodisch: Use-Case-Diagramme (UML) oder Lastenheft' },
    { id: 'professional', label: 'Profi: Funktionale/nicht-funktionale Anforderungen, Akzeptanzkriterien' }
  ];

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="w-full max-w-[393px] mx-auto">
        <div className="mb-6">
          <p className="text-[#999999] mb-2">Hard Skills WI · Block A · 1/2</p>
          <h2 className="text-[#333333] mb-2">{course?.name}</h2>
          <h3 className="text-[#333333] mb-3">Anforderungsanalyse</h3>
        </div>

        <div className="space-y-2 mb-8">
          {options.map(option => (
            <button
              key={option.id}
              onClick={() => setExperience(option.id)}
              className={`w-full p-4 rounded-[12px] border-2 transition-all text-left ${
                experience === option.id
                  ? 'border-[#E30613] bg-[#FFF5F5]'
                  : 'border-[#E0E0E0] bg-white hover:border-[#E30613]'
              }`}
            >
              <p className="text-[#333333]">{option.label}</p>
            </button>
          ))}
        </div>

        <button
          onClick={() => onNext({ requirementsAnalysis: experience })}
          disabled={!experience}
          className={`w-full py-4 rounded-[12px] transition-colors ${
            experience
              ? 'bg-[#E30613] text-white hover:bg-[#C00511]'
              : 'bg-[#E0E0E0] text-[#999999] cursor-not-allowed'
          }`}
        >
          Weiter
        </button>
      </div>
    </div>
  );
}

function BusinessModelScreen({ course, onNext }) {
  const [experience, setExperience] = useState('');

  const options = [
    { id: 'product', label: 'Produkt-Fokus: Features wichtiger, Geld verdienen später' },
    { id: 'theory', label: 'Theorie: Kenne Business Model Canvas aus Vorlesung' },
    { id: 'canvas', label: 'Canvas-Nutzer: Habe vollständiges Canvas erarbeitet' },
    { id: 'validator', label: 'Validator: Habe Annahmen validiert (Interviews, Markt-Recherche)' }
  ];

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="w-full max-w-[393px] mx-auto">
        <div className="mb-6">
          <p className="text-[#999999] mb-2">Hard Skills WI · Block A · 2/2</p>
          <h2 className="text-[#333333] mb-2">{course?.name}</h2>
          <h3 className="text-[#333333] mb-3">Geschäftsmodell-Entwicklung</h3>
        </div>

        <div className="space-y-2 mb-8">
          {options.map(option => (
            <button
              key={option.id}
              onClick={() => setExperience(option.id)}
              className={`w-full p-4 rounded-[12px] border-2 transition-all text-left ${
                experience === option.id
                  ? 'border-[#E30613] bg-[#FFF5F5]'
                  : 'border-[#E0E0E0] bg-white hover:border-[#E30613]'
              }`}
            >
              <p className="text-[#333333]">{option.label}</p>
            </button>
          ))}
        </div>

        <button
          onClick={() => onNext({ businessModeling: experience })}
          disabled={!experience}
          className={`w-full py-4 rounded-[12px] transition-colors ${
            experience
              ? 'bg-[#E30613] text-white hover:bg-[#C00511]'
              : 'bg-[#E0E0E0] text-[#999999] cursor-not-allowed'
          }`}
        >
          Weiter
        </button>
      </div>
    </div>
  );
}

// Block B: Kommunikation & Verkauf

function PresentationDesignScreen({ course, onNext }) {
  const [experience, setExperience] = useState('');

  const options = [
    { id: 'text', label: 'Text-Lastig: Standard-Vorlagen, alle Infos als Text/Stichpunkte' },
    { id: 'structured', label: 'Strukturiert: Sauberes Layout, einheitliche Schriftarten, Templates' },
    { id: 'visual', label: 'Visual Storyteller: Wenig Text, hochwertige Grafiken, durchgehende Story' }
  ];

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="w-full max-w-[393px] mx-auto">
        <div className="mb-6">
          <p className="text-[#999999] mb-2">Hard Skills WI · Block B · 1/2</p>
          <h2 className="text-[#333333] mb-2">{course?.name}</h2>
          <h3 className="text-[#333333] mb-3">Präsentations-Design</h3>
        </div>

        <div className="space-y-3 mb-8">
          {options.map(option => (
            <button
              key={option.id}
              onClick={() => setExperience(option.id)}
              className={`w-full p-4 rounded-[12px] border-2 transition-all text-left ${
                experience === option.id
                  ? 'border-[#E30613] bg-[#FFF5F5]'
                  : 'border-[#E0E0E0] bg-white hover:border-[#E30613]'
              }`}
            >
              <p className="text-[#333333]">{option.label}</p>
            </button>
          ))}
        </div>

        <button
          onClick={() => onNext({ presentationDesign: experience })}
          disabled={!experience}
          className={`w-full py-4 rounded-[12px] transition-colors ${
            experience
              ? 'bg-[#E30613] text-white hover:bg-[#C00511]'
              : 'bg-[#E0E0E0] text-[#999999] cursor-not-allowed'
          }`}
        >
          Weiter
        </button>
      </div>
    </div>
  );
}

function PitchingScreen({ course, onComplete }) {
  const [experience, setExperience] = useState('');

  const options = [
    { id: 'backstage', label: 'Backstage: Fühle mich unwohl, würde es gerne anderen überlassen' },
    { id: 'reader', label: 'Ableser: Kann präsentieren, brauche Karteikarten als Sicherheit' },
    { id: 'speaker', label: 'Speaker: Kann frei reden, wirke sicher, keine Angst vor Rückfragen' },
    { id: 'pitcher', label: 'Pitcher: Liebe es zu begeistern, kann verkaufen, Elevator Pitch in 2min' }
  ];

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="w-full max-w-[393px] mx-auto">
        <div className="mb-6">
          <p className="text-[#999999] mb-2">Hard Skills WI · Block B · 2/2</p>
          <h2 className="text-[#333333] mb-2">{course?.name}</h2>
          <h3 className="text-[#333333] mb-3">Auftreten & Pitching</h3>
        </div>

        <div className="space-y-2 mb-8">
          {options.map(option => (
            <button
              key={option.id}
              onClick={() => setExperience(option.id)}
              className={`w-full p-4 rounded-[12px] border-2 transition-all text-left ${
                experience === option.id
                  ? 'border-[#E30613] bg-[#FFF5F5]'
                  : 'border-[#E0E0E0] bg-white hover:border-[#E30613]'
              }`}
            >
              <p className="text-[#333333]">{option.label}</p>
            </button>
          ))}
        </div>

        <button
          onClick={() => onComplete({ pitching: experience })}
          disabled={!experience}
          className={`w-full py-4 rounded-[12px] transition-colors ${
            experience
              ? 'bg-[#E30613] text-white hover:bg-[#C00511]'
              : 'bg-[#E0E0E0] text-[#999999] cursor-not-allowed'
          }`}
        >
          Quiz abschließen
        </button>
      </div>
    </div>
  );
}
