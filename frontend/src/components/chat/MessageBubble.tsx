interface MessageBubbleProps {
  sender: "user" | "assistant";
  text: string;
}

const MessageBubble = ({ sender, text }: MessageBubbleProps) => {
  const isUser = sender === "user";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: isUser ? "#2563EB" : "#1E293B",
          color: "#FFFFFF",
          padding: "16px",
          borderRadius: "12px",
          maxWidth: "70%",
          whiteSpace: "pre-wrap",
        }}
      >
        <strong>{isUser ? "You" : "SHAAN"}</strong>

        <p
          style={{
            marginTop: "10px",
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default MessageBubble;