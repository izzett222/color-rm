import { BookOpen, Code, Zap, Target, Award, Lightbulb } from "lucide-react";

export interface Comment {
  name: string;
  time: string;
  rating: number;
  content: string;
  likes: number;
  dislikes: number;
}

export interface SubSection {
  id: string;
  title: string;
  duration: string;
  type: "video" | "reading" | "exercise" | "quiz";
  completed: boolean;
  url?: string;
  comments: Comment[];
  likes: number;
  views: number;
  updatedAt: string;
}

export interface Section {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  completed: boolean;
  progress: number;
  subsections: SubSection[];
  icon: any;
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
      {
        id: "html-1",
        title: "Understanding HTML Structure: The Foundation",
        duration: "30 min",
        type: "video",
        completed: true,
        url: "https://example.com/html-1",
        likes: 128,
        views: 920,
        updatedAt: "2025-07-01T09:00:00Z",
        comments: [
          {
            name: "Jane Doe",
            time: "2025-07-10T14:22:00Z",
            rating: 5,
            content: "This video helped me finally understand nesting in HTML!",
            likes: 10,
            dislikes: 0
          },
          {
            name: "Kevin N.",
            time: "2025-07-12T10:45:00Z",
            rating: 4,
            content: "Clear and straight to the point.",
            likes: 7,
            dislikes: 1
          }
        ]
      }
    ]
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
      {
        id: "css-1",
        title: "CSS Selectors and Properties",
        duration: "40 min",
        type: "video",
        completed: true,
        url: "https://example.com/css-1",
        likes: 120,
        views: 890,
        updatedAt: "2025-07-17T14:00:00Z",
        comments: [
          {
            name: "Jane Doe",
            time: "2025-07-18T10:00:00Z",
            rating: 5,
            content: "Very clear explanation of CSS selectors!",
            likes: 10,
            dislikes: 0
          },
          {
            name: "Paul M.",
            time: "2025-07-18T12:45:00Z",
            rating: 4,
            content: "Great examples, but could use more advanced cases.",
            likes: 5,
            dislikes: 1
          }
        ]
      },
    ]
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
      {
        id: "js-1",
        title: "Variables and Data Types",
        duration: "45 min",
        type: "video",
        completed: true,
        url: "https://example.com/js-1",
        likes: 120,
        views: 980,
        updatedAt: "2025-07-15T14:30:00Z",
        comments: [
          {
            name: "Anna J.",
            time: "2025-07-16T09:00:00Z",
            rating: 4,
            content: "Clear explanations with useful examples!",
            likes: 5,
            dislikes: 0
          },
          {
            name: "Liam K.",
            time: "2025-07-16T11:15:00Z",
            rating: 5,
            content: "Great pace and clarity!",
            likes: 3,
            dislikes: 0
          }
        ]
      }
    ]
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
      {
        id: "react-1",
        title: "JSX and Rendering",
        duration: "45 min",
        type: "video",
        completed: true,
        url: "https://example.com/react-1",
        views: 2100,
        likes: 450,
        updatedAt: "2025-07-10T12:00:00Z",
        comments: []
      },
    ]
  }
];
