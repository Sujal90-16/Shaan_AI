import {
  Cpu,
  Circle,
  Settings,
} from "lucide-react";

import Logo from "../common/Logo";
import Button from "../ui/Button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-slate-800 bg-slate-900/95 px-6 backdrop-blur">
      <Logo />

      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-2 rounded-full bg-slate-800 px-3 py-2 lg:flex">
          <Cpu
            size={16}
            className="text-blue-400"
          />

          <span className="text-sm text-slate-300">
            Gemini 2.5 Flash
          </span>
        </div>

        <div className="hidden items-center gap-2 rounded-full bg-slate-800 px-3 py-2 md:flex">
          <Circle
            size={10}
            fill="#22C55E"
            className="text-green-500"
          />

          <span className="text-sm text-slate-300">
            Connected
          </span>
        </div>

        <Button
          variant="ghost"
          size="sm"
        >
          <Settings size={18} />
        </Button>
      </div>
    </header>
  );
};

export default Header;