import Spinner from "./Spinner";

interface LoadingProps {
  text?: string;
}

const Loading = ({
  text = "Loading...",
}: LoadingProps) => {
  return (
    <div className="flex items-center justify-center gap-3 py-6">
      <Spinner />
      <span className="text-sm text-slate-400">
        {text}
      </span>
    </div>
  );
};

export default Loading;