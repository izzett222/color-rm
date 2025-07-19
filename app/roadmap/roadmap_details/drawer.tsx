import { AlertTriangle, CheckCircle, Circle, type IconNode } from "lucide-react";
import type { IconType } from "react-icons/lib";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Progress } from "~/components/ui/progress";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle
} from "~/components/ui/sheet";
import type { Section } from "./dummy-data";
import { Link, Navigate } from "react-router";
import Comments from "./comments";
import { CommentDialog } from "./comment-dialog";

function CourseDrawer({
  isDrawerOpen,
  setIsDrawerOpen,
  selectedSection,
  getDifficultyColor,
  getTypeIcon,
    content = {
        isRelevant: true,
        isCompleted: false,
    },
}: {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
  selectedSection: Section | null;
  getDifficultyColor: (difficulty: string) => string;
  getTypeIcon: (type: string) => IconType;
    content?: {
        isRelevant: boolean;
        isCompleted: boolean;
    };
}) {
  return (
    <div>
      <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <SheetContent
          side="right"
          className="w-[400px] sm:w-[540px] px-2 h-screen"
        >
          {selectedSection && (
            <>
              <SheetHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`p-2 rounded-lg ${
                      selectedSection.completed
                        ? "bg-green-100"
                        : selectedSection.progress > 0
                          ? "bg-yellow-100"
                          : "bg-blue-100"
                    }`}
                  >
                    <selectedSection.icon
                      className={`w-5 h-5 ${
                        selectedSection.completed
                          ? "text-green-600"
                          : selectedSection.progress > 0
                            ? "text-yellow-600"
                            : "text-blue-600"
                      }`}
                    />
                  </div>
                  <div>
                    <SheetTitle className="text-left">
                      {selectedSection.title}
                    </SheetTitle>
                    <div className="flex items-center gap-2 my-2">
                      <Badge
                        className={getDifficultyColor(
                          selectedSection.difficulty
                        )}
                      >
                        {selectedSection.difficulty}
                      </Badge>
                      <span className="text-sm text-gray-500">
                        {selectedSection.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      {content.isRelevant ? (
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Current & Relevant
                        </Badge>
                      ) : (
                        <Badge
                          variant="destructive"
                          className="bg-red-100 text-red-800 hover:bg-red-100"
                        >
                          <AlertTriangle className="w-3 h-3 mr-1" />
                          Deprecated Content
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
                <SheetDescription className="text-left">
                  {selectedSection.description}
                </SheetDescription>
                <div className="mt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Progress</span>
                    <span className="text-sm text-gray-600">
                      {selectedSection.progress}%
                    </span>
                  </div>
                  <Progress value={selectedSection.progress} />
                </div>
              </SheetHeader>

              <div className="mt-6">
                <h3 className="font-semibold mb-4">Course Content</h3>
                <div className="space-y-3">
                  {selectedSection.subsections.map((subsection, index) => {
                    const TypeIcon = getTypeIcon(subsection.type);
                    return (
                      <div
                        key={subsection.id}
                        className={`flex items-center gap-3 p-3 rounded-lg border transition-colors cursor-pointer hover:bg-gray-50 ${
                          subsection.completed
                            ? "bg-green-50 border-green-200"
                            : "border-gray-200"
                        }`}
                      >
                        <div className="flex items-center gap-3 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-500 w-6">
                              {index + 1}.
                            </span>
                            {subsection.completed ? (
                              <CheckCircle className="w-4 h-4 text-green-500" />
                            ) : (
                              <Circle className="w-4 h-4 text-gray-400" />
                            )}
                          </div>
                          <TypeIcon className="w-4 h-4 text-gray-500" />
                          <div className="flex-1">
                            <div className="font-medium text-sm">
                              {subsection.title}
                            </div>
                            <div className="text-xs text-gray-500 capitalize">
                              {subsection.type} • {subsection.duration}
                            </div>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          variant={
                            subsection.completed ? "secondary" : "default"
                          }
                          className="text-xs"
                        >
                          {subsection.completed ? "Review" : "Start"}
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t">
                <CommentDialog
                    isCompleted={selectedSection.completed}
                    progress={selectedSection.progress}
                />
              </div>
              <Comments />
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
export default CourseDrawer;
