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
    <>
      <Header />

      <div
        style={{
          display: "flex",
          height: "calc(100vh - 70px)",
        }}
      >
        <Sidebar />

        <main
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            background: "#0F172A",
          }}
        >
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
    </>
  );
};

export default MainLayout;