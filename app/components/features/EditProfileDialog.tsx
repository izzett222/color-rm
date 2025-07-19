import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";
import { X } from "lucide-react";

export type Profile = {
  name: string;
  profession: string;
  location: string;
  contact: string;
  bio: string;
  avatarUrl: string;
  skills: string[];
};

type EditProfileDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  profile: Profile;
  onSave: (profile: Profile) => void;
  onSaveToBackend?: (profile: Profile) => Promise<void>;
};

export default function EditProfileDialog({ open, onOpenChange, profile, onSave, onSaveToBackend }: EditProfileDialogProps) {
  const [edit, setEdit] = useState<Profile>(profile);
  const [skillInput, setSkillInput] = useState("");

  function handleAddSkill(e?: React.FormEvent) {
    if (e) e.preventDefault();
    const skill = skillInput.trim();
    if (skill && !edit.skills.includes(skill)) {
      setEdit({ ...edit, skills: [...edit.skills, skill] });
      setSkillInput("");
    }
  }

  function handleRemoveSkill(skill: string) {
    setEdit({ ...edit, skills: edit.skills.filter((s) => s !== skill) });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSave(edit);
    if (onSaveToBackend) {
      await onSaveToBackend(edit);
    }
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
        </DialogHeader>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
            <form className="flex gap-2 mb-2" onSubmit={handleAddSkill}>
              <input
                className="border rounded px-2 py-1 flex-1"
                value={skillInput}
                onChange={e => setSkillInput(e.target.value)}
                placeholder="Add a skill"
                onKeyDown={e => {
                  if (e.key === "Enter") {
                    handleAddSkill();
                    e.preventDefault();
                  }
                }}
              />
              <Button type="button" onClick={() => handleAddSkill()} className="px-3">Add</Button>
            </form>
            <div className="flex flex-wrap gap-2">
              {edit.skills.map((skill) => (
                <span key={skill} className="flex items-center bg-neutral-100 text-neutral-700 rounded px-2 py-1 text-sm">
                  {skill}
                  <button
                    type="button"
                    className="ml-1 text-neutral-400 hover:text-red-500"
                    onClick={() => handleRemoveSkill(skill)}
                    aria-label={`Remove ${skill}`}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </span>
              ))}
            </div>
          </label>
          <DialogFooter>
            <Button type="submit" className="mt-2">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
} 