import MessageBubble from "./MessageBubble";
import type { ChatMessage } from "../../types/chat";

interface ChatWindowProps {
  messages: ChatMessage[];
  loading: boolean;
}

const ChatWindow = ({ messages, loading }: ChatWindowProps) => {
  return (
    <div
      style={{
        flex: 1,
        padding: "30px",
        overflowY: "auto",
        background: "#0F172A",
      }}
    >
      {messages.map((message) => (
        <MessageBubble
          key={message.id}
          sender={message.sender}
          text={message.text}
        />
      ))}

      {loading && (
        <MessageBubble
          sender="assistant"
          text="Thinking..."
        />
      )}
    </div>
  );
};

export default ChatWindow;