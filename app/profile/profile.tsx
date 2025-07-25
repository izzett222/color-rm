"use client"

import { Badge } from "../components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import { Button } from "../components/ui/button";
import { Briefcase, Code, Github, Linkedin, Mail, MapPin, Phone, Pencil, Plus } from "lucide-react";
import { useState } from "react";
import EditProfileDialog from "../components/features/EditProfileDialog";
import type { Profile as ProfileType } from "../components/features/EditProfileDialog";
import { Popover, PopoverTrigger, PopoverContent } from "../components/ui/popover";

export function Profile() {
  const [profile, setProfile] = useState<ProfileType>({
    name: "Ishimwe Colors",
    profession: "Software Engineer",
    location: "Kigali, Rwanda",
    contact: "ishimwe.colors@gmail.com",
    bio: "Passionate about building beautiful web experiences. Lover of open source, coffee, and hiking. I'm a software engineer with a passion for building beautiful web experiences. Always looking for new challenges and opportunities to grow.",
    avatarUrl: "https://cdn-icons-png.flaticon.com/512/3607/3607444.png",
    skills: [
      "Designing",
      "Developing",
      "Testing",
      "Deploying",
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Angular",
    ],
  });
  const [editOpen, setEditOpen] = useState(false);

  return (
    <main className="flex items-center justify-center pt-16 pb-4 bg-background text-foreground">
      <div className="flex flex-col items-center w-full max-w-xl px-4 relative">
        <div className="absolute right-0 top-0 flex gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button size="icon" variant="outline" className="border-neutral-300 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900" aria-label="Add">
                <Plus className="w-5 h-5" />
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-40 p-2 flex flex-col gap-2">
              <Button variant="ghost" className="justify-start w-full">Add Post/Project</Button>
              <Button variant="ghost" className="justify-start w-full">Add Roadmap</Button>
            </PopoverContent>
          </Popover>
          <Button size="icon" variant="outline" className="border-neutral-300 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900" aria-label="Edit Profile" onClick={() => setEditOpen(true)}>
            <Pencil className="w-5 h-5" />
          </Button>
          <EditProfileDialog
            open={editOpen}
            onOpenChange={setEditOpen}
            profile={profile}
            onSave={setProfile}
          />
        </div>
        <div className="flex h-32 w-32 border-2 mb-2 border-neutral-200 rounded-full overflow-hidden relative">
          <img src={profile.avatarUrl} alt={profile.name} className="w-full h-full object-cover absolute top-0 left-0 grayscale-100" />
        </div>
        <div className="flex flex-col w-full justify-center items-center">
          <h1 className="text-2xl font-bold text-neutral-900 text-center my-4">{profile.name}</h1>
        </div>
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
