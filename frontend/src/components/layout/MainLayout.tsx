import { useState } from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";

import ChatWindow from "../chat/ChatWindow";
import ChatInput from "../chat/ChatInput";

import type { ChatMessage } from "../../types/chat";

const MainLayout = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      sender: "assistant",
      text: "Hello Sujal 👋\n\nI'm SHAAN.\nHow can I help you today?",
    },
  ]);

  const [loading, setLoading] = useState(false);

  return (
    <div className="h-screen flex flex-col bg-slate-950">
      <Header />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <main className="flex flex-1 flex-col bg-slate-950">
          <ChatWindow
            messages={messages}
            loading={loading}
          />

          <ChatInput
            messages={messages}
            setMessages={setMessages}
            loading={loading}
            setLoading={setLoading}
          />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;