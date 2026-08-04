import { Bot } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description: string;
}

const EmptyState = ({
  title,
  description,
}: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="mb-5 rounded-full bg-slate-800 p-5">
        <Bot
          size={36}
          className="text-blue-500"
        />
      </div>

      <h2 className="text-xl font-semibold text-white">
        {title}
      </h2>

      <p className="mt-3 max-w-md text-slate-400">
        {description}
      </p>
    </div>
  );
};

export default EmptyState;