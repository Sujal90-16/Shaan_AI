import {
  Brain,
  Folder,
  Settings,
  Zap,
} from "lucide-react";

import Button from "@/components/ui/Button";

const SidebarNavigation = () => {
  return (
    <nav className="space-y-2">
      <Button
        variant="ghost"
        className="w-full justify-start"
      >
        <Brain size={18} />
        <span className="ml-3">Memory</span>
      </Button>

      <Button
        variant="ghost"
        className="w-full justify-start"
      >
        <Folder size={18} />
        <span className="ml-3">Files</span>
      </Button>

      <Button
        variant="ghost"
        className="w-full justify-start"
      >
        <Zap size={18} />
        <span className="ml-3">Automations</span>
      </Button>

      <Button
        variant="ghost"
        className="w-full justify-start"
      >
        <Settings size={18} />
        <span className="ml-3">Settings</span>
      </Button>
    </nav>
  );
};

export default SidebarNavigation;