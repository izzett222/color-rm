import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Search, Star, Calendar, Users, Tag, X } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

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

// mock data
const roadmapData: RoadmapItem[] = [
  {
    id: '1',
    title: 'Frontend Developer Roadmap',
    description: 'A step-by-step guide to becoming a modern frontend developer.',
    category: 'Frontend',
    rating: 4.9,
    votes: 324,
    status: 'completed',
    tags: ['html', 'css', 'javascript', 'react', 'vue', 'frontend'],
    priority: 'high',
    estimatedCompletion: 'Completed',
    author: 'Micheal'
  },
  {
    id: '2',
    title: 'Backend Developer Roadmap',
    description: 'Everything you need to know to become a backend developer.',
    category: 'Backend',
    rating: 4.8,
    votes: 298,
    status: 'completed',
    tags: ['nodejs', 'python', 'databases', 'api', 'backend', 'Django'],
    priority: 'high',
    estimatedCompletion: 'Completed',
    author: 'Peggy'
  },
  {
    id: '3',
    title: 'DevOps Roadmap',
    description: 'Learn the tools and practices for DevOps engineering.',
    category: 'DevOps',
    rating: 4.7,
    votes: 256,
    status: 'in-progress',
    tags: ['docker', 'kubernetes', 'ci/cd', 'aws', 'devops'],
    priority: 'high',
    estimatedCompletion: 'january 2026',
    author: 'Tina'
  },
  {
    id: '4',
    title: 'Fullstack Developer Roadmap',
    description: 'Combine frontend and backend skills for fullstack development.',
    category: 'Fullstack',
    rating: 4.8,
    votes: 412,
    status: 'completed',
    tags: ['fullstack', 'mern', 'lamp', 'mean', 'development'],
    priority: 'critical',
    estimatedCompletion: 'Completed',
    author: 'Alby'
  },
  {
    id: '5',
    title: 'ML Engineer Roadmap',
    description: 'Path to becoming an AI or ML engineer, from math to deployment.',
    category: 'Machine Learning',
    rating: 4.6,
    votes: 189,
    status: 'planned',
    tags: ['python', 'tensorflow', 'pytorch', 'ai', 'ml', 'data'],
    priority: 'medium',
    estimatedCompletion: 'December 2025',
    author: 'Benitha'
  },
  {
    id: '6',
    title: 'Mobile Development Roadmap',
    description: 'Complete guide for native and cross-platform mobile app development.',
    category: 'Mobile',
    rating: 4.5,
    votes: 167,
    status: 'in-progress',
    tags: ['react-native', 'flutter', 'ios', 'android', 'mobile'],
    priority: 'medium',
    estimatedCompletion: 'October 2025',
    author: 'Sam'
  }
];

const RoadmapSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Get categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(roadmapData.map(item => item.category)));
    return ['all', ...cats];
  }, []);

  // Get suggested tags based on search query
  const suggestedTags = useMemo(() => {
    if (!searchQuery.trim() || searchQuery.length < 2) return [];

    const query = searchQuery.toLowerCase();
    const relevantItems = roadmapData.filter(item =>
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
    );

    // Get all unique tags from the relevant items
    const allTags = new Set<string>();
    relevantItems.forEach(item => {
      item.tags.forEach(tag => {
        if (tag.toLowerCase().includes(query) ||
          item.title.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)) {
          allTags.add(tag);
        }
      });
    });

    roadmapData.forEach(item => {
      item.tags.forEach(tag => {
        if (tag.toLowerCase().includes(query)) {
          allTags.add(tag);
        }
      });
    });

    return Array.from(allTags).filter(tag => !selectedTags.includes(tag)).slice(0, 8);
  }, [searchQuery, selectedTags]);

  // Filter and search functionality 
  const filteredRoadmaps = useMemo(() => {
    let filtered = roadmapData;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    if (searchQuery.trim() || selectedTags.length > 0) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(item => {
        const matchesSearch = !query ||
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.tags.some(tag => tag.toLowerCase().includes(query)) ||
          item.category.toLowerCase().includes(query);

        const matchesTags = selectedTags.length === 0 ||
          selectedTags.some(selectedTag =>
            item.tags.some(tag => tag.toLowerCase() === selectedTag.toLowerCase())
          );

        return matchesSearch && matchesTags;
      });
    }
    return filtered.sort((a, b) => b.rating - a.rating);
  }, [searchQuery, selectedCategory, selectedTags]);

  // Handle clicking outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleTagSelect = (tag: string) => {
    setSelectedTags(prev => [...prev, tag]);
    setSearchQuery('');
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  const handleTagRemove = (tagToRemove: string) => {
    setSelectedTags(prev => prev.filter(tag => tag !== tagToRemove));
  };

  const getStatusColor = (status: RoadmapItem['status']) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'planned': return 'bg-yellow-100 text-yellow-800';
      case 'on-hold': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: RoadmapItem['priority']) => {
    switch (priority) {
      case 'critical': return 'bg-red-100 text-red-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className={`max-w-6xl mx-auto p-6 space-y-6 ${!searchQuery ? 'flex flex-col items-center justify-center min-h-[80vh]' : ''}`}>
      {/* Header */}
      <div className={`text-center space-y-2 ${!searchQuery ? '' : ''}`}>
        <h1 className="text-3xl font-bold text-gray-900">Roadmap Search</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our product roadmap to discover features, share suggestions, 
          vote on priorities, and track progress, all designed to 
          boost productivity and foster innovation within Rwanda's growing talent ecosystem.
        </p>
      </div>

      {/* Search Section */}
      <div className="space-y-4 w-full max-w-xl mx-auto">
        <div className="relative" ref={searchRef}>
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 z-10" />
          <Input
            ref={inputRef}
            type="text"
            placeholder="Search roadmap items, features, or tags..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(true)}
            className="pl-10 h-12 text-lg"
          />
          {searchQuery && showSuggestions && suggestedTags.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-20 max-h-60 overflow-y-auto">
              <div className="p-2">
                <div className="text-xs text-gray-500 font-medium mb-2">Suggested tags:</div>
                <div className="flex flex-wrap gap-1">
                  {suggestedTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => handleTagSelect(tag)}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 hover:bg-blue-100 text-blue-700 text-sm rounded-md transition-colors"
                    >
                      <Tag className="h-3 w-3" />
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {(searchQuery || selectedTags.length > 0) && (
        <>
          {/* Selected Tags */}
          {selectedTags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-gray-500 font-medium">Selected tags:</span>
              {selectedTags.map((tag) => (
                <Badge key={tag} variant="default" className="flex items-center gap-1">
                  <Tag className="h-3 w-3" />
                  {tag}
                  <button
                    onClick={() => handleTagRemove(tag)}
                    className="ml-1 hover:bg-black/20 rounded-full p-0.5"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
          )}

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className="capitalize"
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              {filteredRoadmaps.length} result{filteredRoadmaps.length !== 1 ? 's' : ''} found
              {searchQuery && ` for "${searchQuery}"`}
              {selectedTags.length > 0 && ` with tags: ${selectedTags.join(', ')}`}
            </p>
          </div>

          {/* Grid section*/}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredRoadmaps.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1 flex-1">
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      <CardDescription className="text-sm text-gray-500">
                        by {item.author}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{item.rating}</span>
                      <span className="text-gray-400">({item.votes})</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>

                  {/* Status and Badges */}
                  <div className="flex flex-wrap gap-2">
                    <Badge className={getStatusColor(item.status)}>
                      {item.status.replace('-', ' ')}
                    </Badge>
                    <Badge className={getPriorityColor(item.priority)}>
                      {item.priority} priority
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {item.estimatedCompletion}
                    </Badge>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {item.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant={selectedTags.includes(tag) ? "default" : "secondary"}
                        className="text-xs cursor-pointer hover:bg-blue-100"
                        onClick={() => !selectedTags.includes(tag) && handleTagSelect(tag)}
                      >
                        <Tag className="h-2 w-2 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Vote */}
                  <div className="flex items-center justify-between pt-2 border-t">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Users className="h-4 w-4" />
                      {item.votes} votes
                    </div>
                    <Button size="sm" variant="outline">
                      Vote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredRoadmaps.length === 0 && (
            <div className="text-center py-12">
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-500">
                Explain well what you are looking for.
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default RoadmapSearch;