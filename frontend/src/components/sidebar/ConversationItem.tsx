import { MessageSquare } from "lucide-react";

import { cn } from "@/utils/cn";
import type { Conversation } from "@/types/conversation";

interface ConversationItemProps {
  conversation: Conversation;
  active: boolean;
  onClick: () => void;
}

const ConversationItem = ({
  conversation,
  active,
  onClick,
}: ConversationItemProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition-all duration-200",
        active
          ? "bg-blue-600 text-white shadow-md"
          : "text-slate-300 hover:bg-slate-800 hover:text-white"
      )}
    >
      <MessageSquare size={18} className="shrink-0" />

      <span className="flex-1 truncate">
        {conversation.title}
      </span>
    </button>
  );
};

export default ConversationItem;