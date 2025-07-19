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
      },
      {
        id: "html-2",
        title: "Mastering Essential HTML Tags",
        duration: "45 min",
        type: "video",
        completed: true,
        url: "https://example.com/html-2",
        likes: 93,
        views: 710,
        updatedAt: "2025-06-20T16:40:00Z",
        comments: [
          {
            name: "Linda M.",
            time: "2025-07-05T11:10:00Z",
            rating: 5,
            content:
              "Loved the examples using real-world elements like forms and buttons!",
            likes: 12,
            dislikes: 0
          },
          {
            name: "Tony Bright",
            time: "2025-07-06T08:35:00Z",
            rating: 3,
            content:
              "Good content, but could use a bit more explanation on <table> tags.",
            likes: 4,
            dislikes: 2
          }
        ]
      },
      {
        id: "html-3",
        title: "Creating Forms and Handling User Input",
        duration: "40 min",
        type: "video",
        completed: true,
        url: "https://example.com/html-3",
        likes: 76,
        views: 670,
        updatedAt: "2025-07-15T13:00:00Z",
        comments: [
          {
            name: "Amara O.",
            time: "2025-07-18T07:55:00Z",
            rating: 5,
            content:
              "Exactly what I needed to start building my own contact forms!",
            likes: 15,
            dislikes: 0
          },
          {
            name: "Boris T.",
            time: "2025-07-18T09:02:00Z",
            rating: 4,
            content:
              "Very informative. Would love a follow-up on form validation.",
            likes: 6,
            dislikes: 0
          },
          {
            name: "Emily R.",
            time: "2025-07-18T12:21:00Z",
            rating: 4,
            content: "Well-structured tutorial with clear visual aids.",
            likes: 5,
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
      {
        id: "css-2",
        title: "Box Model and Layout",
        duration: "50 min",
        type: "video",
        completed: true,
        url: "https://example.com/css-2",
        likes: 145,
        views: 980,
        updatedAt: "2025-07-18T09:30:00Z",
        comments: [
          {
            name: "Anna B.",
            time: "2025-07-18T15:20:00Z",
            rating: 5,
            content: "Box model is finally clear to me!",
            likes: 7,
            dislikes: 0
          },
          {
            name: "Chris Y.",
            time: "2025-07-19T08:15:00Z",
            rating: 4,
            content: "Could use a visual summary at the end.",
            likes: 3,
            dislikes: 0
          }
        ]
      },
      {
        id: "css-3",
        title: "Flexbox Layout",
        duration: "45 min",
        type: "video",
        completed: true,
        url: "https://example.com/css-3",
        likes: 200,
        views: 1400,
        updatedAt: "2025-07-18T14:50:00Z",
        comments: [
          {
            name: "Dana K.",
            time: "2025-07-18T17:00:00Z",
            rating: 5,
            content: "Flexbox finally makes sense. Loved it!",
            likes: 15,
            dislikes: 0
          },
          {
            name: "Ibrahim T.",
            time: "2025-07-19T10:12:00Z",
            rating: 5,
            content: "Best explanation on the internet.",
            likes: 9,
            dislikes: 0
          }
        ]
      },
      {
        id: "css-4",
        title: "CSS Grid System",
        duration: "55 min",
        type: "video",
        completed: false,
        url: "https://example.com/css-4",
        likes: 98,
        views: 810,
        updatedAt: "2025-07-16T11:00:00Z",
        comments: [
          {
            name: "Liam G.",
            time: "2025-07-18T13:30:00Z",
            rating: 4,
            content: "A little fast-paced, but very informative.",
            likes: 4,
            dislikes: 2
          }
        ]
      },
      {
        id: "css-5",
        title: "Responsive Design",
        duration: "60 min",
        type: "video",
        completed: false,
        url: "https://example.com/css-5",
        likes: 134,
        views: 1150,
        updatedAt: "2025-07-18T13:00:00Z",
        comments: [
          {
            name: "Zara M.",
            time: "2025-07-18T18:10:00Z",
            rating: 5,
            content: "Excellent demo on media queries!",
            likes: 6,
            dislikes: 0
          },
          {
            name: "Emmanuel R.",
            time: "2025-07-19T09:30:00Z",
            rating: 4,
            content: "I would love to see more real-world examples.",
            likes: 4,
            dislikes: 1
          }
        ]
      },
      {
        id: "css-6",
        title: "CSS Animations",
        duration: "35 min",
        type: "video",
        completed: false,
        url: "https://example.com/css-6",
        likes: 110,
        views: 750,
        updatedAt: "2025-07-17T17:30:00Z",
        comments: [
          {
            name: "Joshua O.",
            time: "2025-07-18T20:45:00Z",
            rating: 5,
            content: "Animations were super fun to implement!",
            likes: 8,
            dislikes: 0
          }
        ]
      }
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
      },
      {
        id: "js-2",
        title: "Functions and Scope",
        duration: "50 min",
        type: "video",
        completed: true,
        url: "https://example.com/js-2",
        likes: 150,
        views: 1100,
        updatedAt: "2025-07-14T18:00:00Z",
        comments: [
          {
            name: "Nina S.",
            time: "2025-07-17T08:45:00Z",
            rating: 5,
            content: "I finally understand scope. Thank you!",
            likes: 7,
            dislikes: 0
          }
        ]
      },
      {
        id: "js-3",
        title: "Arrays and Objects",
        duration: "55 min",
        type: "video",
        completed: false,
        url: "https://example.com/js-3",
        likes: 95,
        views: 870,
        updatedAt: "2025-07-13T10:20:00Z",
        comments: [
          {
            name: "Chris T.",
            time: "2025-07-14T12:30:00Z",
            rating: 4,
            content: "More real-world use cases would help.",
            likes: 2,
            dislikes: 1
          }
        ]
      },
      {
        id: "js-4",
        title: "DOM Manipulation",
        duration: "60 min",
        type: "video",
        completed: false,
        url: "https://example.com/js-4",
        likes: 130,
        views: 1120,
        updatedAt: "2025-07-12T16:10:00Z",
        comments: [
          {
            name: "Olivia R.",
            time: "2025-07-13T09:50:00Z",
            rating: 5,
            content: "Now the browser makes sense to me!",
            likes: 4,
            dislikes: 0
          },
          {
            name: "Brian F.",
            time: "2025-07-14T07:00:00Z",
            rating: 3,
            content: "Good intro but too fast at the end.",
            likes: 1,
            dislikes: 2
          }
        ]
      },
      {
        id: "js-5",
        title: "Event Handling",
        duration: "40 min",
        type: "video",
        completed: false,
        url: "https://example.com/js-5",
        likes: 85,
        views: 720,
        updatedAt: "2025-07-11T08:00:00Z",
        comments: [
          {
            name: "Jade N.",
            time: "2025-07-11T10:15:00Z",
            rating: 4,
            content: "Good coverage of event listeners.",
            likes: 3,
            dislikes: 0
          }
        ]
      },
      {
        id: "js-6",
        title: "Asynchronous JavaScript",
        duration: "65 min",
        type: "video",
        completed: false,
        url: "https://example.com/js-6",
        likes: 160,
        views: 1350,
        updatedAt: "2025-07-10T13:15:00Z",
        comments: [
          {
            name: "Ethan W.",
            time: "2025-07-10T16:30:00Z",
            rating: 5,
            content: "Async/await finally makes sense!",
            likes: 6,
            dislikes: 0
          },
          {
            name: "Melanie C.",
            time: "2025-07-11T12:00:00Z",
            rating: 4,
            content: "Could use more fetch examples.",
            likes: 2,
            dislikes: 1
          }
        ]
      },
      {
        id: "js-7",
        title: "JavaScript Best Practices",
        duration: "30 min",
        type: "reading",
        completed: false,
        url: "https://example.com/js-7",
        likes: 60,
        views: 510,
        updatedAt: "2025-07-09T09:00:00Z",
        comments: [
          {
            name: "Alex Z.",
            time: "2025-07-09T10:45:00Z",
            rating: 5,
            content: "Short and sweet summary of best practices!",
            likes: 4,
            dislikes: 0
          }
        ]
      },
      {
        id: "js-8",
        title: "Build Interactive Features",
        duration: "90 min",
        type: "exercise",
        completed: false,
        url: "https://example.com/js-8",
        likes: 190,
        views: 1400,
        updatedAt: "2025-07-08T11:30:00Z",
        comments: [
          {
            name: "Fatima Y.",
            time: "2025-07-08T15:00:00Z",
            rating: 5,
            content: "Loved doing this project-based section!",
            likes: 5,
            dislikes: 0
          },
          {
            name: "Dylan V.",
            time: "2025-07-09T08:40:00Z",
            rating: 4,
            content: "Very helpful but a bit long.",
            likes: 3,
            dislikes: 1
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
      {
        id: "react-2",
        title: "Components and Props",
        duration: "50 min",
        type: "video",
        completed: true,
        url: "https://example.com/react-2",
        views: 1980,
        likes: 420,
        updatedAt: "2025-07-11T10:00:00Z",
        comments: []
      },
      {
        id: "react-3",
        title: "State and Lifecycle",
        duration: "55 min",
        type: "video",
        completed: false,
        url: "https://example.com/react-3",
        views: 1750,
        likes: 380,
        updatedAt: "2025-07-13T09:00:00Z",
        comments: [
          {
            name: "Nina O.",
            time: "2025-07-17T10:15:00Z",
            rating: 4,
            likes: 2,
            dislikes: 0,
            content: "Great explanation of state management in React!"
          }
        ]
      },
      {
        id: "react-4",
        title: "Handling Events in React",
        duration: "60 min",
        type: "video",
        completed: false,
        url: "https://example.com/react-4",
        views: 1600,
        likes: 340,
        updatedAt: "2025-07-15T13:30:00Z",
        comments: [
          {
            name: "Leo G.",
            time: "2025-07-18T12:00:00Z",
            rating: 3,
            likes: 1,
            dislikes: 1,
            content: "Good intro, but could use more examples."
          }
        ]
      },
      {
        id: "react-5",
        title: "Conditional Rendering",
        duration: "40 min",
        type: "video",
        completed: false,
        url: "https://example.com/react-5",
        views: 1400,
        likes: 300,
        updatedAt: "2025-07-16T08:45:00Z",
        comments: []
      },
      {
        id: "react-6",
        title: "React Hooks Overview",
        duration: "65 min",
        type: "video",
        completed: false,
        url: "https://example.com/react-6",
        views: 1850,
        likes: 390,
        updatedAt: "2025-07-16T17:00:00Z",
        comments: [
          {
            name: "Diana M.",
            time: "2025-07-17T14:00:00Z",
            rating: 5,
            likes: 5,
            dislikes: 0,
            content: "Hooks are a game changer! Loved this section."
          }
        ]
      },
      {
        id: "react-7",
        title: "React Best Practices",
        duration: "30 min",
        type: "reading",
        completed: false,
        url: "https://example.com/react-7",
        views: 1300,
        likes: 310,
        updatedAt: "2025-07-17T10:00:00Z",
        comments: []
      },
      {
        id: "react-8",
        title: "Build a To-Do App",
        duration: "90 min",
        type: "exercise",
        completed: false,
        url: "https://example.com/react-8",
        views: 1900,
        likes: 410,
        updatedAt: "2025-07-18T11:00:00Z",
        comments: [
          {
            name: "Aaron P.",
            time: "2025-07-18T17:45:00Z",
            rating: 5,
            likes: 4,
            dislikes: 0,
            content: "This project was super fun and educational!"
          }
        ]
      }
    ]
  }
];
