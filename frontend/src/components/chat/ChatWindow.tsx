import { useEffect, useRef } from "react";

import TypingIndicator from "./TypingIndicator";
import MessageBubble from "./MessageBubble";
import WelcomeScreen from "./WelcomeScreen";

import type { ChatMessage } from "../../types/chat";

interface ChatWindowProps {
  messages: ChatMessage[];
  loading: boolean;
}

const ChatWindow = ({ messages, loading }: ChatWindowProps) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  if (messages.length === 0) {
    return (
      <div className="flex-1 overflow-y-auto bg-slate-950">
        <WelcomeScreen />
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto bg-slate-950 px-8 py-8">
      {messages.map((message) => (
        <MessageBubble
          key={message.id}
          sender={message.sender}
          text={message.text}
        />
      ))}

      {loading && <TypingIndicator />}

      <div ref={bottomRef} />
    </div>
  );
};

export default ChatWindow;