import { forwardRef } from "react";
import { cn } from "../../utils/cn";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

const variants = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",

  secondary:
    "bg-slate-800 text-slate-200 hover:bg-slate-700",

  danger:
    "bg-red-600 text-white hover:bg-red-700",

  ghost:
    "bg-transparent text-slate-300 hover:bg-slate-800",
};

const sizes = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      className = "",
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
  "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50",
  variants[variant],
  sizes[size],
  className
)}
        {...props}
      >
        {loading ? (
          <div
            className="
              h-5
              w-5
              animate-spin
              rounded-full
              border-2
              border-white
              border-t-transparent
            "
          />
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;