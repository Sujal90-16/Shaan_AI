import { cn } from "../../utils/cn";

interface DividerProps {
  className?: string;
}

const Divider = ({
  className,
}: DividerProps) => {
  return (
    <hr
      className={cn(
        "border-slate-800",
        className
      )}
    />
  );
};

export default Divider;