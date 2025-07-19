import { useState } from "react";
import {
  CheckCircle,
  Circle,
  Clock,
  PlayCircle,
  FileText,
  Code,
  Target,
  Users
} from "lucide-react";
import { Progress } from "~/components/ui/progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { courseData, type Section } from "./dummy-data";
import CourseDrawer from "./drawer";

const getTypeIcon = (type: string) => {
  switch (type) {
    case "video":
      return PlayCircle;
    case "reading":
      return FileText;
    case "exercise":
      return Code;
    case "quiz":
      return Target;
    default:
      return Circle;
  }
};

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner":
      return "bg-green-100 text-green-800";
    case "Intermediate":
      return "bg-yellow-100 text-yellow-800";
    case "Advanced":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function CourseRoadmap() {
  const [selectedSection, setSelectedSection] = useState<Section | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleSectionClick = (section: Section) => {
    setSelectedSection(section);
    setIsDrawerOpen(true);
  };

  const completedSections = courseData.filter(
    (section) => section.completed
  ).length;
  const totalProgress = Math.round(
    courseData.reduce((acc, section) => acc + section.progress, 0) /
      courseData.length
  );

  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Master Geomatics
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Complete roadmap to becoming a full-stack developer
          </p>
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {completedSections}/{courseData.length}
              </div>
              <div className="text-sm text-gray-500">Sections Complete</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {totalProgress}%
              </div>
              <div className="text-sm text-gray-500">Overall Progress</div>
            </div>
          </div>
          <Progress value={totalProgress} className="w-full max-w-md mx-auto" />
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400"></div>

          {courseData.map((section, index) => {
            const Icon = section.icon;
            return (
              <div key={section.id} className="relative mb-8">
                <div
                  className={`absolute left-6 w-4 h-4 rounded-full border-4 border-white shadow-lg ${
                    section.completed
                      ? "bg-green-500"
                      : section.progress > 0
                        ? "bg-yellow-500"
                        : "bg-gray-300"
                  }`}
                ></div>

                <div className="ml-16">
                  <Card
                    className={`cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-[1.02] ${
                      section.completed
                        ? "border-green-200 bg-green-50"
                        : section.progress > 0
                          ? "border-yellow-200 bg-yellow-50"
                          : "border-gray-200 hover:border-blue-300"
                    }`}
                    onClick={() => handleSectionClick(section)}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className={`p-2 rounded-lg ${
                              section.completed
                                ? "bg-green-100"
                                : section.progress > 0
                                  ? "bg-yellow-100"
                                  : "bg-blue-100"
                            }`}
                          >
                            <Icon
                              className={`w-5 h-5 ${
                                section.completed
                                  ? "text-green-600"
                                  : section.progress > 0
                                    ? "text-yellow-600"
                                    : "text-blue-600"
                              }`}
                            />
                          </div>
                          <div>
                            <CardTitle className="text-xl">
                              {section.title}
                            </CardTitle>
                            <CardDescription className="mt-1">
                              {section.description}
                            </CardDescription>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge
                            className={getDifficultyColor(section.difficulty)}
                          >
                            {section.difficulty}
                          </Badge>
                          {section.completed && (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {section.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {section.subsections.length} lessons
                          </div>
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                          {section.progress}% complete
                        </span>
                      </div>
                      {section.progress > 0 && (
                        <Progress value={section.progress} className="h-2" />
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* // drawer section */}

      <CourseDrawer
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        selectedSection={selectedSection}
        getDifficultyColor={getDifficultyColor}
        getTypeIcon={getTypeIcon}
      />
    
    </div>
  );
}
