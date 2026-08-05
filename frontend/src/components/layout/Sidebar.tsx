import {
  MessageSquare,
  Brain,
  Zap,
  Folder,
  Settings,
  Plus,
} from "lucide-react";

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
    <aside className="hidden md:flex h-full w-64 lg:w-72 xl:w-80 flex-col border-r border-slate-800 bg-slate-900">
      {/* Logo */}
      <div className="mb-4">
  <input
    type="text"
    placeholder="Search conversations..."
    value={search}
    onChange={(e) => onSearch(e.target.value)}
    className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
  />
</div>
      <div className="border-b border-slate-800 p-5">
        <h1 className="text-2xl font-bold text-white">
          SHAAN
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          Your Personal AI Assistant
        </p>

        <button
          onClick={onNewChat}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          <Plus size={18} />
          New Chat
        </button>
      </div>

      {/* Chat History */}
      <div className="min-h-0 flex-1 overflow-y-auto p-4">
        <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Recent Chats
        </p>

        <div className="space-y-2">
          {conversations.map((chat) => (
            <button
              key={chat.id}
              onClick={() => onSelectConversation(chat.id)}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition ${
                activeConversationId === chat.id
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:bg-slate-800"
              }`}
            >
              <MessageSquare size={18} />

              <span className="truncate">
                {chat.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800 p-4">
        <div className="space-y-2">
          <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-slate-300 hover:bg-slate-800">
            <Brain size={18} />
            Memory
          </button>

          <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-slate-300 hover:bg-slate-800">
            <Zap size={18} />
            Automations
          </button>

          <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-slate-300 hover:bg-slate-800">
            <Folder size={18} />
            Files
          </button>

          <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-slate-300 hover:bg-slate-800">
            <Settings size={18} />
            Settings
          </button>
        </div>

        <div className="mt-6 border-t border-slate-800 pt-4">
          <p className="text-xs text-slate-500">
            SHAAN AI v0.2
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;