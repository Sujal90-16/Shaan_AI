import { Plus } from "lucide-react";

import Logo from "@/components/common/Logo";
import Button from "@/components/ui/Button";

import ConversationSection from "@/features/conversation/ConversationSection";
import SidebarNavigation from "./SidebarNavigation";

import type { Conversation } from "@/types/conversation";

interface SidebarProps {
  conversations: Conversation[];
  activeConversationId: string;

  search: string;
  onSearch: (value: string) => void;

  onNewChat: () => void;
  onSelectConversation: (id: string) => void;
}

const Sidebar = ({
  conversations,
  activeConversationId,
  search,
  onSearch,
  onNewChat,
  onSelectConversation,
}: SidebarProps) => {
  return (
    <aside className="hidden h-full w-64 flex-col border-r border-slate-800 bg-slate-900 md:flex lg:w-72 xl:w-80">
      {/* Header */}
      <div className="border-b border-slate-800 p-5">
        <Logo />

        <Button
          onClick={onNewChat}
          className="mt-5 w-full"
        >
          <Plus size={18} />

          <span className="ml-2">
            New Chat
          </span>
        </Button>
      </div>

      {/* Conversations */}
      <div className="flex-1 overflow-y-auto p-4">
        <ConversationSection
          conversations={conversations}
          activeConversationId={activeConversationId}
          search={search}
          onSearch={onSearch}
          onSelect={onSelectConversation}
        />
      </div>

      {/* Navigation */}
      <div className="border-t border-slate-800 p-4">
        <SidebarNavigation />

        <div className="mt-6 border-t border-slate-800 pt-4">
          <p className="text-xs text-slate-500">
            SHAAN AI v0.2.0
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;