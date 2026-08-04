import type { Conversation } from "../../types/conversation";

interface SidebarProps {
  conversations: Conversation[];
  activeConversationId: string;
  onNewChat: () => void;
  onSelectConversation: (id: string) => void;
}

const Sidebar = ({
  conversations,
  activeConversationId,
  onNewChat,
  onSelectConversation,
}: SidebarProps) => {
  return (
    <aside className="flex h-full w-72 flex-col overflow-hidden border-r border-slate-700 bg-slate-900 p-5">
      {/* Logo */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">
          SHAAN
        </h2>

        <p className="text-sm text-slate-400">
          Your Personal AI Assistant
        </p>
      </div>

      {/* New Chat */}
      <button
        onClick={onNewChat}
        className="mb-6 w-full rounded-xl bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        + New Chat
      </button>

      {/* Chat History */}
      <div className="mb-6 min-h-0 flex-1 overflow-y-auto overflow-x-hidden">
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Chats
        </h3>

        <div className="flex flex-col gap-2">
          {conversations.map((chat) => (
            <button
              key={chat.id}
              onClick={() => onSelectConversation(chat.id)}
              className={`block w-full truncate rounded-lg px-4 py-3 text-left transition ${
                activeConversationId === chat.id
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {chat.title}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-2 border-t border-slate-700 pt-5">
        <button className="w-full rounded-lg px-4 py-3 text-left text-slate-300 transition hover:bg-slate-800">
          🧠 Memory
        </button>

        <button className="w-full rounded-lg px-4 py-3 text-left text-slate-300 transition hover:bg-slate-800">
          ⚡ Automations
        </button>

        <button className="w-full rounded-lg px-4 py-3 text-left text-slate-300 transition hover:bg-slate-800">
          📁 Files
        </button>

        <button className="w-full rounded-lg px-4 py-3 text-left text-slate-300 transition hover:bg-slate-800">
          ⚙️ Settings
        </button>
      </nav>

      {/* Footer */}
      <div className="mt-5 border-t border-slate-700 pt-5">
        <p className="text-sm text-slate-500">
          SHAAN AI v0.1.0
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;