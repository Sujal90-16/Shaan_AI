import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;