import {
  BookOpen,
  Code,
  Zap,
  Target,
  Award,
  Lightbulb,
} from "lucide-react"


export interface SubSection {
  id: string
  title: string
  duration: string
  type: "video" | "reading" | "exercise" | "quiz"
  completed: boolean,
  url: string | undefined
}

export interface Section {
  id: string
  title: string
  description: string
  duration: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  completed: boolean
  progress: number
  subsections: SubSection[]
  icon: any
}


export const courseData: Section[] = [
  {
    id: "intro",
    title: "Introduction to Web Development",
    description: "Get started with the fundamentals of web development",
    duration: "2 hours",
    difficulty: "Beginner",
    completed: true,
    progress: 100,
    icon: BookOpen,
    subsections: [
      { id: "intro-1", title: "What is Web Development?", duration: "15 min", type: "video", completed: true,
        url: "https://example.com/intro-1"
       },
      {
        id: "intro-2",
        title: "Setting up Development Environment",
        duration: "30 min",
        type: "video",
        completed: true,
        url: "https://example.com/intro-2"
      },
      { id: "intro-3", title: "Understanding the Web", duration: "20 min", type: "reading", completed: true,
        url: "https://example.com/intro-3"
       },
      { id: "intro-4", title: "Your First Web Page", duration: "25 min", type: "exercise", completed: true,
        url: "https://example.com/intro-4"
       },
    ],
  },
  {
    id: "html",
    title: "HTML Fundamentals",
    description: "Learn the structure and semantics of HTML",
    duration: "4 hours",
    difficulty: "Beginner",
    completed: true,
    progress: 100,
    icon: Code,
    subsections: [
      { id: "html-1", title: "HTML Document Structure", duration: "30 min", type: "video", completed: true,
        url: "https://example.com/html-1"
       },
      { id: "html-2", title: "Common HTML Elements", duration: "45 min", type: "video", completed: true, 
        url: "https://example.com/html-2"
       },
      { id: "html-3", title: "Forms and Input Elements", duration: "40 min", type: "video", completed: true,
        url: "https://example.com/html-3"
       },
      { id: "html-4", title: "Semantic HTML", duration: "35 min", type: "reading", completed: true,
        url: "https://example.com/html-4"
       },
      { id: "html-5", title: "HTML Best Practices", duration: "20 min", type: "reading", completed: true,
        url: "https://example.com/html-5"
       },
      { id: "html-6", title: "Build a Complete HTML Page", duration: "50 min", type: "exercise", completed: true,
        url: "https://example.com/html-6"
       },
    ],
  },
  {
    id: "css",
    title: "CSS Styling & Layout",
    description: "Master styling and layout techniques with CSS",
    duration: "6 hours",
    difficulty: "Intermediate",
    completed: false,
    progress: 65,
    icon: Lightbulb,
    subsections: [
      { id: "css-1", title: "CSS Selectors and Properties", duration: "40 min", type: "video", completed: true,
        url: "https://example.com/css-1"
       },
      { id: "css-2", title: "Box Model and Layout", duration: "50 min", type: "video", completed: true,
        url: "https://example.com/css-2"
       },
      { id: "css-3", title: "Flexbox Layout", duration: "45 min", type: "video", completed: true,
        url: "https://example.com/css-3"
       },
      { id: "css-4", title: "CSS Grid System", duration: "55 min", type: "video", completed: false, 
        url: "https://example.com/css-4"
       },
      { id: "css-5", title: "Responsive Design", duration: "60 min", type: "video", completed: false,
        url: "https://example.com/css-5"
       },
      { id: "css-6", title: "CSS Animations", duration: "35 min", type: "video", completed: false, 
        url: "https://example.com/css-6"
       },
      { id: "css-7", title: "Style a Complete Website", duration: "75 min", type: "exercise", completed: false,
        url: "https://example.com/css-7"
       },
    ],
  },
  {
    id: "javascript",
    title: "JavaScript Programming",
    description: "Learn programming fundamentals with JavaScript",
    duration: "8 hours",
    difficulty: "Intermediate",
    completed: false,
    progress: 25,
    icon: Zap,
    subsections: [
      { id: "js-1", title: "Variables and Data Types", duration: "45 min", type: "video", completed: true, 
        url: "https://example.com/js-1"
       },
      { id: "js-2", title: "Functions and Scope", duration: "50 min", type: "video", completed: true,
        url: "https://example.com/js-2"
       },
      { id: "js-3", title: "Arrays and Objects", duration: "55 min", type: "video", completed: false,
        url: "https://example.com/js-3"
       },
      { id: "js-4", title: "DOM Manipulation", duration: "60 min", type: "video", completed: false,
        url: "https://example.com/js-4"
       },
      { id: "js-5", title: "Event Handling", duration: "40 min", type: "video", completed: false,
        url: "https://example.com/js-5"
       },
      { id: "js-6", title: "Asynchronous JavaScript", duration: "65 min", type: "video", completed: false,
        url: "https://example.com/js-6"
       },
      { id: "js-7", title: "JavaScript Best Practices", duration: "30 min", type: "reading", completed: false,
        url: "https://example.com/js-7"
       },
      { id: "js-8", title: "Build Interactive Features", duration: "90 min", type: "exercise", completed: false,
        url: "https://example.com/js-8"
       },
    ],
  },
  {
    id: "react",
    title: "React Framework",
    description: "Build modern web applications with React",
    duration: "10 hours",
    difficulty: "Advanced",
    completed: false,
    progress: 0,
    icon: Target,
    subsections: [
      { id: "js-1", title: "Variables and Data Types", duration: "45 min", type: "video", completed: true, 
        url: "https://example.com/js-1"
       },
      { id: "js-2", title: "Functions and Scope", duration: "50 min", type: "video", completed: true,
        url: "https://example.com/js-2"
       },
      { id: "js-3", title: "Arrays and Objects", duration: "55 min", type: "video", completed: false,
        url: "https://example.com/js-3"
       },
      { id: "js-4", title: "DOM Manipulation", duration: "60 min", type: "video", completed: false,
        url: "https://example.com/js-4"
       },
      { id: "js-5", title: "Event Handling", duration: "40 min", type: "video", completed: false,
        url: "https://example.com/js-5"
       },
      { id: "js-6", title: "Asynchronous JavaScript", duration: "65 min", type: "video", completed: false,
        url: "https://example.com/js-6"
       },
      { id: "js-7", title: "JavaScript Best Practices", duration: "30 min", type: "reading", completed: false,
        url: "https://example.com/js-7"
       },
      { id: "js-8", title: "Build Interactive Features", duration: "90 min", type: "exercise", completed: false,
        url: "https://example.com/js-8"
       },
    ],
  },
  {
    id: "deployment",
    title: "Deployment & Production",
    description: "Deploy your applications to the web",
    duration: "3 hours",
    difficulty: "Intermediate",
    completed: false,
    progress: 0,
    icon: Award,
    subsections: [
      { id: "js-1", title: "Variables and Data Types", duration: "45 min", type: "video", completed: true, 
        url: "https://example.com/js-1"
       },
      { id: "js-2", title: "Functions and Scope", duration: "50 min", type: "video", completed: true,
        url: "https://example.com/js-2"
       },
      { id: "js-3", title: "Arrays and Objects", duration: "55 min", type: "video", completed: false,
        url: "https://example.com/js-3"
       },
      { id: "js-4", title: "DOM Manipulation", duration: "60 min", type: "video", completed: false,
        url: "https://example.com/js-4"
       },
      { id: "js-5", title: "Event Handling", duration: "40 min", type: "video", completed: false,
        url: "https://example.com/js-5"
       },
      { id: "js-6", title: "Asynchronous JavaScript", duration: "65 min", type: "video", completed: false,
        url: "https://example.com/js-6"
       },
      { id: "js-7", title: "JavaScript Best Practices", duration: "30 min", type: "reading", completed: false,
        url: "https://example.com/js-7"
       },
      { id: "js-8", title: "Build Interactive Features", duration: "90 min", type: "exercise", completed: false,
        url: "https://example.com/js-8"
       },
    ],
  },
]