interface MessageBubbleProps {
  sender: "user" | "assistant";
  text: string;
}

const MessageBubble = ({ sender, text }: MessageBubbleProps) => {
  const isUser = sender === "user";

  return (
    <div
      className={`mb-6 flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`flex max-w-3xl items-start gap-3 ${
          isUser ? "flex-row-reverse" : ""
        }`}
      >
        {/* Avatar */}
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-bold text-white ${
            isUser ? "bg-blue-600" : "bg-slate-700"
          }`}
        >
          {isUser ? "Y" : "S"}
        </div>

        {/* Bubble */}
        <div
          className={`rounded-2xl px-5 py-4 shadow-md ${
            isUser
              ? "bg-blue-600 text-white"
              : "bg-slate-800 text-slate-100"
          }`}
        >
          <p
            className={`mb-2 text-sm font-semibold ${
              isUser ? "text-blue-100" : "text-slate-400"
            }`}
          >
            {isUser ? "You" : "SHAAN"}
          </p>

          <p className="whitespace-pre-wrap leading-7">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;