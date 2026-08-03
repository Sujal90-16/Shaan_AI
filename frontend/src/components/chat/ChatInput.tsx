import { useState } from "react";

import { sendMessage } from "../../services/chatService";
import type { ChatMessage } from "../../types/chat";

interface ChatInputProps {
  messages: ChatMessage[];
  setMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChatInput = ({
  messages,
  setMessages,
  loading,
  setLoading,
}: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSend = async () => {
    if (!message.trim() || loading) return;

    const currentMessage = message;

    // Show user message immediately
    const userMessage: ChatMessage = {
      id: Date.now(),
      sender: "user",
      text: currentMessage,
    };

    setMessages((prev) => [...prev, userMessage]);

    setMessage("");

    // Show typing indicator
    setLoading(true);

    try {
      const response = await sendMessage(currentMessage);

      const aiMessage: ChatMessage = {
        id: Date.now() + 1,
        sender: "assistant",
        text: response.reply,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);

      const errorMessage: ChatMessage = {
        id: Date.now() + 2,
        sender: "assistant",
        text: "Sorry, I couldn't reach SHAAN.",
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      // Hide typing indicator
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        padding: "20px",
        borderTop: "1px solid #2B2B2B",
        background: "#111827",
      }}
    >
      <input
        type="text"
        placeholder="Ask SHAAN anything..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSend();
          }
        }}
        disabled={loading}
        style={{
          flex: 1,
          padding: "14px",
          borderRadius: "10px",
          border: "none",
          outline: "none",
          fontSize: "16px",
        }}
      />

      <button
        onClick={handleSend}
        disabled={loading}
        style={{
          marginLeft: "10px",
          padding: "14px 22px",
          borderRadius: "10px",
          border: "none",
          cursor: loading ? "not-allowed" : "pointer",
          background: "#2563EB",
          color: "white",
          fontWeight: "bold",
          opacity: loading ? 0.7 : 1,
        }}
      >
        {loading ? "Sending..." : "Send"}
      </button>
    </div>
  );
};

export default ChatInput;