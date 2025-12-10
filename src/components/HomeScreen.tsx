import React, { useState } from "react";
import { BottomNavigation } from "./BottomNavigation";

const availableCourses = [
  {
    id: 3,
    name: "Mathematik I",
    professor: "Prof. Dr. Reimar Hofmann",
    semester: 1,
  },
  {
    id: 1,
    name: "Software Architektur",
    professor: "Prof. Dr. Jürgen Zimmermann",
    semester: 3,
  },
  {
    id: 2,
    name: "User Centered Design",
    professor: "Prof. Dr. Andreas P. Schmidt",
    semester: 4,
  },
  {
    id: 4,
    name: "E-Business",
    professor: "Prof. Dr. Ingo Stengel",
    semester: 6,
  },
];

export function HomeScreen({
  userData,
  enrolledCourses,
  onCourseEnroll,
  currentTab,
  onTabChange,
}) {
  const [selectedSemester, setSelectedSemester] = useState("1");

  return (
    <div className="min-h-screen bg-white pb-24">
      <div className="w-full max-w-[393px] mx-auto">
        {/* Header */}
        <div className="bg-white p-6 border-b border-[#E0E0E0]">
          <h2 className="text-[#333333] mb-4">
            Hallo, {userData.firstName || "Student"}!
          </h2>
          <div>
            <label className="block text-[#666666] mb-2">
              Semester
            </label>
            <select
              value={selectedSemester}
              onChange={(e) =>
                setSelectedSemester(e.target.value)
              }
              className="w-full px-4 py-3 bg-[#F5F5F5] border-none rounded-[12px] text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#E30613]"
            >
              <option value="1">1. Semester</option>
              <option value="2">2. Semester</option>
              <option value="3">3. Semester</option>
              <option value="4">4. Semester</option>
              <option value="5">5. Semester</option>
              <option value="6">6. Semester</option>
              <option value="7">7. Semester</option>
            </select>
          </div>
        </div>

        {/* Course List */}
        <div className="p-6">
          <h3 className="text-[#333333] mb-4">
            Verfügbare Kurse im Studiengang {userData.studyProgram || 'Informatik'}:
          </h3>
          <div className="space-y-4">
            {availableCourses
              .filter((course) => course.semester === parseInt(selectedSemester))
              .map((course) => {
                const isEnrolled = enrolledCourses.some(
                  (c) => c.id === course.id,
                );
                return (
                  <div
                    key={course.id}
                    className="bg-white border border-[#E0E0E0] rounded-[12px] p-5"
                  >
                    <h4 className="text-[#333333] mb-1">
                      {course.name}
                    </h4>
                    <p className="text-[#999999] mb-4">
                      {course.professor}
                    </p>
                    <button
                      onClick={() =>
                        !isEnrolled && onCourseEnroll(course)
                      }
                      disabled={isEnrolled}
                      className={`px-6 py-2 rounded-[12px] border-2 transition-colors ${
                        isEnrolled
                          ? "border-[#E0E0E0] text-[#999999] cursor-not-allowed"
                          : "border-[#E30613] text-[#E30613] hover:bg-[#FFF5F5]"
                      }`}
                    >
                      {isEnrolled ? "Angemeldet" : "Anmelden"}
                    </button>
                  </div>
                );
              })}
            {availableCourses.filter((course) => course.semester === parseInt(selectedSemester)).length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📚</div>
                <p className="text-[#666666]">
                  Keine Kurse für dieses Semester verfügbar.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <BottomNavigation
        currentTab={currentTab}
        onTabChange={onTabChange}
      />
    </div>
  );
}