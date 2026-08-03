const Sidebar = () => {
  return (
    <aside className="w-72 bg-slate-900 border-r border-slate-700 flex flex-col p-5">
      {/* Logo */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">SHAAN</h2>
        <p className="text-sm text-slate-400">
          Your Personal AI Assistant
        </p>
      </div>

      {/* New Chat */}
      <button className="mb-6 w-full rounded-xl bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700">
        + New Chat
      </button>

      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        <button className="rounded-lg px-4 py-3 text-left text-slate-300 transition hover:bg-slate-800 hover:text-white">
          💬 Recent Chats
        </button>

        <button className="rounded-lg px-4 py-3 text-left text-slate-300 transition hover:bg-slate-800 hover:text-white">
          🧠 Memory
        </button>

        <button className="rounded-lg px-4 py-3 text-left text-slate-300 transition hover:bg-slate-800 hover:text-white">
          ⚡ Automations
        </button>

        <button className="rounded-lg px-4 py-3 text-left text-slate-300 transition hover:bg-slate-800 hover:text-white">
          📁 Files
        </button>

        <button className="rounded-lg px-4 py-3 text-left text-slate-300 transition hover:bg-slate-800 hover:text-white">
          ⚙️ Settings
        </button>
      </nav>

      {/* Footer */}
      <div className="mt-auto border-t border-slate-700 pt-5">
        <p className="text-sm text-slate-500">
          SHAAN AI v0.1.0
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;