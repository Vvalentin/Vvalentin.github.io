import React, { useState } from "react";
import { RegistrationScreen } from "./components/RegistrationScreen";
import { QuizScreen } from "./components/QuizScreen";
import { OnboardingQuizScreen } from "./components/OnboardingQuizScreen";
import { SuccessScreen } from "./components/SuccessScreen";
import { HomeScreen } from "./components/HomeScreen";
import { SubjectAssessmentScreen } from "./components/SubjectAssessmentScreen";
import { MatchSuccessModal } from "./components/MatchSuccessModal";
import { GroupsScreen } from "./components/GroupsScreen";
import { ProfileScreen } from "./components/ProfileScreen";
import { CourseDetailScreen } from "./components/CourseDetailScreen";
import { GroupChatScreen } from "./components/GroupChatScreen";

export default function App() {
  const [currentScreen, setCurrentScreen] =
    useState("registration");
  const [currentTab, setCurrentTab] = useState("home");
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    university: "",
    studyProgram: "",
  });
  const [onboardingProfile, setOnboardingProfile] = useState(null);
  const [learningType, setLearningType] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [detailCourse, setDetailCourse] = useState(null);

  const handleRegistration = (data) => {
    setUserData(data);
    setCurrentScreen("onboardingQuiz");
  };

  const handleOnboardingComplete = (profileData) => {
    setOnboardingProfile(profileData);
    setCurrentScreen("main");
    setCurrentTab("home");
  };

  const handleQuizComplete = (type) => {
    setLearningType(type);
    setCurrentScreen("success");
  };

  const handleSuccessComplete = () => {
    setCurrentScreen("main");
    setCurrentTab("home");
  };

  const handleCourseEnroll = (course) => {
    setSelectedCourse(course);
    setCurrentScreen("assessment");
  };

  const handleAssessmentComplete = () => {
    if (
      selectedCourse &&
      !enrolledCourses.find((c) => c.id === selectedCourse.id)
    ) {
      setEnrolledCourses([...enrolledCourses, selectedCourse]);
    }
    setCurrentScreen("matchSuccess");
  };

  const handleMatchSuccessClose = () => {
    setCurrentScreen("main");
    setCurrentTab("home");
  };

  const handleLogout = () => {
    setCurrentScreen("registration");
    setUserData({
      firstName: "",
      lastName: "",
      email: "",
      university: "",
      studyProgram: "",
    });
    setOnboardingProfile(null);
    setLearningType("");
    setEnrolledCourses([]);
  };

  const handleUpdateProfile = (data) => {
    setUserData(data);
  };

  const handleCourseDetails = (course) => {
    setDetailCourse(course);
    setCurrentScreen("courseDetail");
  };

  const handleBackFromDetail = () => {
    setCurrentScreen("main");
    setCurrentTab("groups");
  };

  const handleOpenChat = () => {
    setCurrentScreen("groupChat");
  };

  const handleBackFromChat = () => {
    setCurrentScreen("courseDetail");
  };

  if (currentScreen === "registration") {
    return (
      <RegistrationScreen onComplete={handleRegistration} />
    );
  }

  if (currentScreen === "onboardingQuiz") {
    return <OnboardingQuizScreen onComplete={handleOnboardingComplete} />;
  }

  if (currentScreen === "quiz") {
    return <QuizScreen onComplete={handleQuizComplete} />;
  }

  if (currentScreen === "success") {
    return <SuccessScreen onComplete={handleSuccessComplete} />;
  }

  if (currentScreen === "assessment") {
    return (
      <SubjectAssessmentScreen
        course={selectedCourse}
        onComplete={handleAssessmentComplete}
      />
    );
  }

  if (currentScreen === "matchSuccess") {
    return (
      <MatchSuccessModal onClose={handleMatchSuccessClose} />
    );
  }

  if (currentScreen === "courseDetail") {
    return (
      <CourseDetailScreen
        course={detailCourse}
        onBack={handleBackFromDetail}
        onOpenChat={handleOpenChat}
      />
    );
  }

  if (currentScreen === "groupChat") {
    return (
      <GroupChatScreen
        course={detailCourse}
        onBack={handleBackFromChat}
      />
    );
  }

  if (currentScreen === "main") {
    return (
      <>
        {currentTab === "home" && (
          <HomeScreen
            userData={userData}
            enrolledCourses={enrolledCourses}
            onCourseEnroll={handleCourseEnroll}
            currentTab={currentTab}
            onTabChange={setCurrentTab}
          />
        )}
        {currentTab === "groups" && (
          <GroupsScreen
            enrolledCourses={enrolledCourses}
            currentTab={currentTab}
            onTabChange={setCurrentTab}
            onCourseDetails={handleCourseDetails}
          />
        )}
        {currentTab === "profile" && (
          <ProfileScreen
            userData={userData}
            onUpdateProfile={handleUpdateProfile}
            onLogout={handleLogout}
            currentTab={currentTab}
            onTabChange={setCurrentTab}
          />
        )}
      </>
    );
  }

  return null;
}