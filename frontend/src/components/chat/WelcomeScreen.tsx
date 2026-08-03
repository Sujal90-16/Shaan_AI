import { Sparkles, Brain, FileText, Zap } from "lucide-react";

const WelcomeScreen = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center px-8">
      <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-5xl font-bold text-white shadow-lg">
        S
      </div>

      <h1 className="text-5xl font-bold text-white">
        SHAAN AI
      </h1>

      <p className="mt-3 text-lg text-slate-400">
        Smart Hybrid AI Assistant Network
      </p>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
          <Sparkles className="mb-3 text-blue-500" />
          <h3 className="font-semibold text-white">
            Ask Anything
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Get instant answers and AI assistance.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
          <Brain className="mb-3 text-blue-500" />

          <h3 className="font-semibold text-white">
            Memory
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Remember conversations and preferences.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
          <FileText className="mb-3 text-blue-500" />

          <h3 className="font-semibold text-white">
            Analyze Files
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Upload PDFs, images and documents.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
          <Zap className="mb-3 text-blue-500" />

          <h3 className="font-semibold text-white">
            Automate Tasks
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Your intelligent desktop assistant.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;