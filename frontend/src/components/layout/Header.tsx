const Header = () => {
  return (
    <header className="h-16 border-b border-slate-700 bg-slate-900 px-8 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold">
          S
        </div>

        <div>
          <h1 className="text-xl font-bold text-white">SHAAN AI</h1>
          <p className="text-xs text-slate-400">
            Smart Hybrid AI Assistant Network
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="rounded-lg bg-slate-800 px-4 py-2 text-sm text-slate-300 transition hover:bg-slate-700">
          Settings
        </button>
      </div>
    </header>
  );
};

export default Header;