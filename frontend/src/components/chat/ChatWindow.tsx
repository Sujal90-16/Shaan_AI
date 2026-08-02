import { useState } from "react";
import MessageBubble from "./MessageBubble";
import type { ChatMessage } from "../../types/chat";

const ChatWindow = () => {
  const [messages] = useState<ChatMessage[]>([
    {
      id: 1,
      sender: "assistant",
      text: "Hello Sujal 👋\n\nI'm SHAAN.\nHow can I help you today?",
    },
  ]);

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
    </div>
  );
};

export default ChatWindow;