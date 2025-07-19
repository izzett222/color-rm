
import { Profile } from "~/profile/profile";

export function meta() {
  return [
    { title: "Profile" },
    { name: "description", content: "Manage your profile" },
  ];
}

export default function ProfileRoute() {
  return <Profile />;
}