"use client"

import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import { Button } from "../components/ui/button";
import { Briefcase, Code, Github, Linkedin, Mail, MapPin, Phone, Pencil } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "../components/ui/dialog";
import { useState } from "react";

export function Profile() {
  // Example static data
  const [profile, setProfile] = useState({
    name: "Ishimwe Colors",
    profession: "Software Engineer",
    location: "Kigali, Rwanda",
    contact: "ishimwe.colors@gmail.com",
    bio: "Passionate about building beautiful web experiences. Lover of open source, coffee, and hiking. I'm a software engineer with a passion for building beautiful web experiences. Always looking for new challenges and opportunities to grow.",
    avatarUrl: "https://ui-avatars.com/api/?name=Jane+Doe&background=cccccc&color=222&size=128",
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
  const [edit, setEdit] = useState(profile);

  return (
    <main className="flex items-center justify-center pt-16 pb-4 bg-background text-foreground">
      <div className="flex flex-col items-center w-full max-w-xl px-4 relative">
        {/* Top right action button */}
        <div className="absolute right-0 top-0 flex gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="icon" variant="outline" className="border-neutral-300 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900" aria-label="Edit Profile">
                <Pencil className="w-5 h-5" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>
              </DialogHeader>
              <form
                className="flex flex-col gap-4 mt-2"
                onSubmit={e => {
                  e.preventDefault();
                  setProfile(edit);
                }}
              >
                <label className="flex flex-col gap-1">
                  <span className="text-sm font-medium">Name</span>
                  <input
                    className="border rounded px-2 py-1"
                    value={edit.name}
                    onChange={e => setEdit({ ...edit, name: e.target.value })}
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-sm font-medium">Profession</span>
                  <input
                    className="border rounded px-2 py-1"
                    value={edit.profession}
                    onChange={e => setEdit({ ...edit, profession: e.target.value })}
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-sm font-medium">Location</span>
                  <input
                    className="border rounded px-2 py-1"
                    value={edit.location}
                    onChange={e => setEdit({ ...edit, location: e.target.value })}
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-sm font-medium">Bio</span>
                  <textarea
                    className="border rounded px-2 py-1 min-h-[60px]"
                    value={edit.bio}
                    onChange={e => setEdit({ ...edit, bio: e.target.value })}
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-sm font-medium">Skills</span>
                </label>
                <DialogFooter>
                  <Button type="submit" className="mt-2">Save</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
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
