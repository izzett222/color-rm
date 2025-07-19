import { BookOpen, Code, Zap, Target, Award, Lightbulb } from "lucide-react";

interface Comment {
  id: string;
  name: string;
  time: string;
  avatar: string;
  rating: number;
  content: string;
  likes: number;
  dislikes: number;
}

interface SubSection {
  id: string;
  title: string;
  duration: string;
  type: "video" | "article" | "quiz";
  completed: boolean;
  url: string;
  views: number;
  likes: number;
  updatedAt: string;
  comments: Comment[];
}

interface RoadmapDetails {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  completed: boolean;
  progress: number;
  icon: any;
  subsections: SubSection[];
}

export interface RoadmapProject {
  id: string;
  title: string;
  description: string;
  category: string;
  rating: number;
  votes: number;
  status: "planned" | "in-progress" | "completed" | "on-hold";
  tags: string[];
  priority: "low" | "medium" | "high" | "critical";
  estimatedCompletion: string;
  author: string;
  details: RoadmapDetails;
}


export const roadmapProjects: RoadmapProject[] = [
  {
    id: "1",
    title: "Frontend Developer Roadmap",
    description: "A step-by-step guide to becoming a modern frontend developer.",
    category: "Frontend",
    rating: 4.9,
    votes: 324,
    status: "completed",
    tags: ["html", "css", "javascript", "react", "vue", "frontend"],
    priority: "high",
    estimatedCompletion: "Completed",
    author: "Micheal",
    details: {
      id: "react",
      title: "React Framework",
      description: "Build modern web applications with React",
      duration: "10 hours",
      difficulty: "Advanced",
      completed: false,
      progress: 0.6,
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
          comments: [
            {
              id: "1",
              name: "Dana K.",
              time: "1 week ago",
              avatar: "",
              rating: 5,
              content: "I love this content and it's very nice for beginners!",
              likes: 15,
              dislikes: 0
            }
          ]
        }
      ]
    }
  },
  {
    id: "2",
    title: "Backend Developer Roadmap",
    description: "Everything you need to know to become a backend developer.",
    category: "Backend",
    rating: 4.8,
    votes: 298,
    status: "completed",
    tags: ["nodejs", "python", "databases", "api", "backend", "Django"],
    priority: "high",
    estimatedCompletion: "Completed",
    author: "Peggy",
    details: {
      id: "node",
      title: "Node.js Essentials",
      description: "Core concepts of Node.js for building backend services",
      duration: "8 hours",
      difficulty: "Intermediate",
      completed: true,
      progress: 1,
      icon: Code,
      subsections: [
        {
          id: "node-1",
          title: "Event Loop and Async",
          duration: "1 hour",
          type: "video",
          completed: true,
          url: "https://example.com/node-1",
          views: 1800,
          likes: 300,
          updatedAt: "2025-07-08T09:00:00Z",
          comments: [
            {
              id: "2",
              name: "John D.",
              time: "2 weeks ago",
              avatar: "",
              rating: 4,
              content: "Very clear explanation of async programming.",
              likes: 10,
              dislikes: 1
            }
          ]
        }
      ]
    }
  },
  {
    id: "3",
    title: "DevOps Roadmap",
    description: "Learn the tools and practices for DevOps engineering.",
    category: "DevOps",
    rating: 4.7,
    votes: 256,
    status: "in-progress",
    tags: ["docker", "kubernetes", "ci/cd", "aws", "devops"],
    priority: "high",
    estimatedCompletion: "January 2026",
    author: "Tina",
    details: {
      id: "ci-cd",
      title: "CI/CD with GitHub Actions",
      description: "Automate builds, tests and deployments",
      duration: "6 hours",
      difficulty: "Intermediate",
      completed: false,
      progress: 0.4,
      icon: Zap,
      subsections: [
        {
          id: "ci-1",
          title: "GitHub Actions Workflow",
          duration: "30 min",
          type: "article",
          completed: true,
          url: "https://example.com/ci-1",
          views: 900,
          likes: 210,
          updatedAt: "2025-06-12T15:30:00Z",
          comments: [
            {
              id: "3",
              name: "Grace A.",
              time: "3 days ago",
              avatar: "",
              rating: 5,
              content: "This helped me fix my broken pipeline!",
              likes: 25,
              dislikes: 0
            }
          ]
        }
      ]
    }
  },
  {
    id: "4",
    title: "Fullstack Developer Roadmap",
    description: "Combine frontend and backend skills for fullstack development.",
    category: "Fullstack",
    rating: 4.8,
    votes: 412,
    status: "completed",
    tags: ["fullstack", "mern", "lamp", "mean", "development"],
    priority: "critical",
    estimatedCompletion: "Completed",
    author: "Alby",
    details: {
      id: "mern",
      title: "MERN Stack Basics",
      description: "Build apps using MongoDB, Express, React, and Node.js",
      duration: "12 hours",
      difficulty: "Advanced",
      completed: true,
      progress: 1,
      icon: BookOpen,
      subsections: [
        {
          id: "mern-1",
          title: "MongoDB CRUD",
          duration: "1 hour",
          type: "video",
          completed: true,
          url: "https://example.com/mern-1",
          views: 1400,
          likes: 320,
          updatedAt: "2025-06-20T10:00:00Z",
          comments: [
            {
              id: "4",
              name: "Rob N.",
              time: "5 days ago",
              avatar: "",
              rating: 5,
              content: "Very practical Mongo tutorial!",
              likes: 18,
              dislikes: 0
            }
          ]
        }
      ]
    }
  },
  {
    id: "5",
    title: "ML Engineer Roadmap",
    description: "Path to becoming an AI or ML engineer, from math to deployment.",
    category: "Machine Learning",
    rating: 4.6,
    votes: 189,
    status: "planned",
    tags: ["python", "tensorflow", "pytorch", "ai", "ml", "data"],
    priority: "medium",
    estimatedCompletion: "December 2025",
    author: "Benitha",
    details: {
      id: "ml",
      title: "Intro to Neural Networks",
      description: "Understand the fundamentals of neural networks and backpropagation",
      duration: "9 hours",
      difficulty: "Advanced",
      completed: false,
      progress: 0,
      icon: Lightbulb,
      subsections: [
        {
          id: "ml-1",
          title: "What is a Neuron?",
          duration: "35 min",
          type: "video",
          completed: false,
          url: "https://example.com/ml-1",
          views: 1100,
          likes: 230,
          updatedAt: "2025-07-01T13:00:00Z",
          comments: []
        }
      ]
    }
  },
  {
    id: "6",
    title: "Mobile Development Roadmap",
    description: "Complete guide for native and cross-platform mobile app development.",
    category: "Mobile",
    rating: 4.5,
    votes: 167,
    status: "in-progress",
    tags: ["react-native", "flutter", "ios", "android", "mobile"],
    priority: "medium",
    estimatedCompletion: "October 2025",
    author: "Sam",
    details: {
      id: "flutter",
      title: "Flutter for Beginners",
      description: "Learn to build apps with Flutter and Dart",
      duration: "7 hours",
      difficulty: "Beginner",
      completed: false,
      progress: 0.3,
      icon: Award,
      subsections: [
        {
          id: "flutter-1",
          title: "Widgets in Flutter",
          duration: "40 min",
          type: "video",
          completed: true,
          url: "https://example.com/flutter-1",
          views: 1600,
          likes: 260,
          updatedAt: "2025-07-15T16:00:00Z",
          comments: [
            {
              id: "5",
              name: "Maggie L.",
              time: "2 days ago",
              avatar: "",
              rating: 4,
              content: "Great visual explanation of widgets!",
              likes: 14,
              dislikes: 1
            }
          ]
        }
      ]
    }
  }
];
