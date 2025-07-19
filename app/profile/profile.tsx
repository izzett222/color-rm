"use client"

import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import { Button } from "../components/ui/button";
import { Briefcase, Code, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Profile() {
  // Example static data
  const profile = {
    name: "Ishimwe Colors",
    profession: "Software Engineer",
    location: "Kigali, Rwanda",
    contact: "ishimwe.colors@gmail.com",
    bio: "Passionate about building beautiful web experiences. Lover of open source, coffee, and hiking. I'm a software engineer with a passion for building beautiful web experiences. Always looking for new challenges and opportunities to grow.",
    avatarUrl: "https://ui-avatars.com/api/?name=Jane+Doe&background=cccccc&color=222&size=128",
    skills: ["Designing", "Developing", "Testing", "Deploying", "React", "Next.js", "Tailwind CSS", "TypeScript", "JavaScript", "HTML", "CSS", "Angular"],
  };

  return (
    <main className="flex items-center justify-center pt-16 pb-4 bg-background text-foreground">
      <div className="flex flex-col items-center w-full max-w-xl px-4">
        <Avatar className="size-24 mb-4">
          <AvatarImage src={profile.avatarUrl} alt={profile.name} />
          <AvatarFallback>{profile.name[0]}</AvatarFallback>
        </Avatar>
        <h1 className="text-2xl font-bold text-neutral-900 text-center my-4">{profile.name}</h1>
        <div className="flex flex-col w-full justify-center items-center border-b border-neutral-200 pb-2 gap-2 mb-4">
          <Badge className="bg-neutral-100 text-neutral-700 border-none flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            {profile.profession}
          </Badge>
        </div>
        <Badge className="bg-neutral-100 text-neutral-700 border-none flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          {profile.location}
        </Badge>
        <div className="flex gap-2 my-5">
          <Button variant="outline" className="border-neutral-300 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900">
            <Mail />
          </Button>
          <Button variant="outline" className="border-neutral-300 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900">
            <Phone />
          </Button>
          <Button variant="outline" className="border-neutral-300 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900">
            <Github />
          </Button>
          <Button variant="outline" className="border-neutral-300 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900">
            <Linkedin />
          </Button>
        </div>
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="bg-neutral-100 text-neutral-700 justify-center m-auto">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="posts">My Posts</TabsTrigger>
            <TabsTrigger value="bookmarks">Bookmarks</TabsTrigger>
          </TabsList>
          <TabsContent value="about">
            <p className="mt-4 text-neutral-700 text-center text-sm  border-b border-neutral-200 pb-6 mb-4">{profile.bio}</p>
            <div className="flex flex-col gap-2 pb-2 mb-4">
              <h1 className="text-lg font-bold text-neutral-900 text-center">My Skills</h1>
              <div className="flex flex-wrap gap-3 w-full justify-center mt-2">
                {profile.skills.map((skill) => (
                  <Badge key={skill} className="bg-neutral-100 text-neutral-700 border-none flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="posts">
            <div className="mt-4 text-neutral-500 text-center">No posts yet.</div>
          </TabsContent>
          <TabsContent value="bookmarks">
            <div className="mt-4 text-neutral-500 text-center">No bookmarks yet.</div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
