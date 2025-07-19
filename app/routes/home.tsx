import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import RoadMapDetailsScreen from "~/roadmap/roadmap_details/roadmap_details_screen";

interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  category: string;
  rating: number;
  votes: number;
  status: 'planned' | 'in-progress' | 'completed' | 'on-hold';
  tags: string[];
  priority: 'low' | 'medium' | 'high' | 'critical';
  estimatedCompletion: string;
  author: string;
}

export default function Home() {
  return <RoadMapDetailsScreen />;
}
