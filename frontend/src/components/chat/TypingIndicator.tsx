const TypingIndicator = () => {
  return (
    <div className="mb-6 flex justify-start">
      <div className="flex items-start gap-3">
        {/* Avatar */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 font-bold text-white">
          S
        </div>

        {/* Bubble */}
        <div className="rounded-2xl bg-slate-800 px-5 py-4">
          <p className="mb-2 text-sm font-semibold text-slate-400">
            SHAAN
          </p>

          <div className="flex gap-2">
            <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400"></span>

            <span
              className="h-2 w-2 animate-bounce rounded-full bg-slate-400"
              style={{ animationDelay: "0.2s" }}
            ></span>

            <span
              className="h-2 w-2 animate-bounce rounded-full bg-slate-400"
              style={{ animationDelay: "0.4s" }}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;