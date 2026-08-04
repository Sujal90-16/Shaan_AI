import { forwardRef } from "react";
import { cn } from "../../utils/cn";

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "flex h-11 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;