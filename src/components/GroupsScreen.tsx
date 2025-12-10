import React from 'react';
import { ChevronRight } from 'lucide-react';
import { BottomNavigation } from './BottomNavigation';

export function GroupsScreen({ enrolledCourses, currentTab, onTabChange, onCourseDetails }) {
  return (
    <div className="min-h-screen bg-white pb-24">
      <div className="w-full max-w-[393px] mx-auto">
        {/* Header */}
        <div className="bg-white p-6 border-b border-[#E0E0E0]">
          <h2 className="text-[#333333]">Meine Gruppen</h2>
        </div>

        {/* Groups List */}
        <div className="p-6">
          {enrolledCourses.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">👥</div>
              <p className="text-[#666666]">
                Du bist noch keiner Gruppe beigetreten.
              </p>
              <p className="text-[#999999] mt-2">
                Melde dich für einen Kurs an, um einer Gruppe beizutreten.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {enrolledCourses.map((course) => (
                <button
                  key={course.id}
                  onClick={() => onCourseDetails(course)}
                  className="w-full bg-white border border-[#E0E0E0] rounded-[12px] p-5 hover:bg-[#F5F5F5] transition-colors text-left"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-[#333333] mb-1">{course.name}</h4>
                      <p className="text-[#999999] mb-3">{course.professor}</p>
                      <div className="flex items-center gap-2 text-[#666666]">
                        <span className="text-2xl">👥</span>
                        <span>Lerngruppe A</span>
                      </div>
                    </div>
                    <ChevronRight className="w-6 h-6 text-[#999999]" />
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <BottomNavigation currentTab={currentTab} onTabChange={onTabChange} />
    </div>
  );
}
