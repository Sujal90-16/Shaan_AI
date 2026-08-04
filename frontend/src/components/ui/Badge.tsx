import { cn } from "../../utils/cn";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "danger";
}

const Badge = ({
  children,
  variant = "default",
}: BadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variant === "default" &&
          "bg-slate-800 text-slate-200",
        variant === "success" &&
          "bg-green-600/20 text-green-400",
        variant === "danger" &&
          "bg-red-600/20 text-red-400"
      )}
    >
      {children}
    </span>
  );
};

export default Badge;