import { Avatar } from "@radix-ui/react-avatar";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import { AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { useState } from "react";

const comments = [
  {
    name: "Dana K.",
    id: "1",
    time: "1 week ago",
    avatar: "",
    rating: 5,
    content: "I love this content and its very nice for beginners!",
    likes: 15,
    dislikes: 0
  },
  {
    id: "2",
    name: "Ibrahim T.",
    time: "2 days ago",
    rating: 5,
    avatar: "",
    content: "Wow, this is amazing! I learned so much.",
    likes: 9,
    dislikes: 0
  }
];

function Comments() {
  return (
    <div className="space-y-6">
        <h2 className="text-2xl font-bold underline-offset-2">Comments</h2>
      {comments.map((comment) => (
        <div key={comment.id} className="space-y-3">
          <div className="flex items-start gap-3">
            <Avatar>
              <AvatarImage
                src={comment.avatar || "/placeholder.svg"}
                alt={comment.name}
              />
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium">{comment.name}</span>
                <span className="text-sm text-gray-500">{comment.time}</span>
              </div>
              <p className="text-gray-700 mb-3">{comment.content}</p>
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-1 text-gray-500"
                >
                  <ThumbsUp className="w-3 h-3" />
                  {comment.likes}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-1 text-gray-500"
                >
                  <ThumbsDown className="w-3 h-3" />
                  {comment.dislikes}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Comments;
