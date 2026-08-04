import { Bot, User } from "lucide-react";
import { cn } from "../../utils/cn";

interface AvatarProps {
  type?: "user" | "assistant";
  className?: string;
}

const Avatar = ({
  type = "assistant",
  className,
}: AvatarProps) => {
  return (
    <div
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full shadow-md",
        type === "assistant"
          ? "bg-gradient-to-br from-blue-600 to-cyan-500 text-white"
          : "bg-slate-700 text-white",
        className
      )}
    >
      {type === "assistant" ? (
        <Bot size={20} />
      ) : (
        <User size={20} />
      )}
    </div>
  );
};

export default Avatar;