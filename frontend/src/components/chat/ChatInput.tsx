import { useState } from "react";
import { Send, Mic } from "lucide-react";

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

    const userMessage: ChatMessage = {
      id: Date.now(),
      sender: "user",
      text: currentMessage,
    };

    setMessages((prev) => [...prev, userMessage]);

    setMessage("");
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

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 2,
          sender: "assistant",
          text: "Sorry, I couldn't reach SHAAN.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border-t border-slate-700 bg-slate-950 p-5">
      <div className="mx-auto flex max-w-5xl items-center gap-3 rounded-2xl border border-slate-700 bg-slate-900 p-3 shadow-lg">
        <input
          type="text"
          placeholder="Ask SHAAN anything..."
          value={message}
          disabled={loading}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
          className="flex-1 bg-transparent px-2 text-white placeholder:text-slate-500 focus:outline-none"
        />

        <button
          className="rounded-xl p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white"
        >
          <Mic size={20} />
        </button>

        <button
          onClick={handleSend}
          disabled={loading}
          className="rounded-xl bg-blue-600 p-3 text-white transition hover:bg-blue-700 disabled:opacity-50"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;