import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "@/theme/motion";

const Logo = () => {
  return (
    <motion.div
    variants={fadeIn}
    initial="hidden"
    animate="visible"
    className="flex items-center gap-3"
>
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-400 shadow-lg shadow-blue-500/20">
        <Sparkles
          size={22}
          className="text-white"
        />
      </div>

      <div>
        <h1 className="text-lg font-bold tracking-wide text-white">
          SHAAN
        </h1>

        <p className="text-xs text-slate-400">
          Personal AI Workspace
        </p>
      </div>
    </motion.div>
  );
};

export default Logo;