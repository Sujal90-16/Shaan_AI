import MessageBubble from "./MessageBubble";

const ChatWindow = () => {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0F172A",
      }}
    >
      <MessageBubble />
    </div>
  );
};

export default ChatWindow;