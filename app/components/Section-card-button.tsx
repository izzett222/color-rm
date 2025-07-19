"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Progress } from "./ui/progress"
import { CheckCircle, Clock, Users, BookOpen, Code, Palette, Database } from "lucide-react"

interface SectionCardButtonProps {
  title: string
  description: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  duration: number
  lessons: number
  progress: number
  isCompleted?: boolean
  icon?: "book" | "code" | "palette" | "database"
  onClick?: () => void
}

const iconMap = {
  book: BookOpen,
  code: Code,
  palette: Palette,
  database: Database,
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner":
      return "bg-green-100 text-green-800 hover:bg-green-200"
    case "Intermediate":
      return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
    case "Advanced":
      return "bg-red-100 text-red-800 hover:bg-red-200"
    default:
      return "bg-gray-100 text-gray-800 hover:bg-gray-200"
  }
}

export default function SectionCardButton({
  title,
  description,
  difficulty,
  duration,
  lessons,
  progress,
  isCompleted = false,
  icon = "book",
  onClick,
}: SectionCardButtonProps
) {
  const IconComponent = iconMap[icon]
  const hasProgress = progress > 0
  const completed = isCompleted || progress >= 100

  return (
    <Card
      className={`cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-[1.02] ${
        completed
          ? "border-green-200 bg-green-50"
          : hasProgress
            ? "border-yellow-200 bg-yellow-50"
            : "border-gray-200 hover:border-blue-300"
      }`}
      onClick={onClick}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div
              className={`p-2 rounded-lg ${completed ? "bg-green-100" : hasProgress ? "bg-yellow-100" : "bg-blue-100"}`}
            >
              <IconComponent
                className={`w-5 h-5 ${
                  completed ? "text-green-600" : hasProgress ? "text-yellow-600" : "text-blue-600"
                }`}
              />
            </div>
            <div>
              <CardTitle className="text-xl">{title}</CardTitle>
              <CardDescription className="mt-1">{description}</CardDescription>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge className={getDifficultyColor(difficulty)}>{difficulty}</Badge>
            {completed && <CheckCircle className="w-5 h-5 text-green-500" />}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {duration} min
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              {lessons} lessons
            </div>
          </div>
          <span className="text-sm font-medium text-gray-700">{progress}% complete</span>
        </div>
        {hasProgress && <Progress value={progress} className="h-2" />}
      </CardContent>
    </Card>
  )
}
