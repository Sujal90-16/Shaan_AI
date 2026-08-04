interface SpinnerProps {
  size?: number;
}

const Spinner = ({
  size = 20,
}: SpinnerProps) => {
  return (
    <div
      style={{
        width: size,
        height: size,
      }}
      className="animate-spin rounded-full border-2 border-blue-500 border-t-transparent"
    />
  );
};

export default Spinner;