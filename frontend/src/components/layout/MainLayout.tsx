import { useState } from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";

import ChatWindow from "../chat/ChatWindow";
import ChatInput from "../chat/ChatInput";

import { useConversations } from "../../hooks/useConversations";

const MainLayout = () => {
  const {
    conversations,
    activeConversation,
    activeConversationId,
    createConversation,
    setActiveConversationId,
    updateMessages,
  } = useConversations();

  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");

  const filteredConversations = conversations.filter((conversation) =>
    conversation.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="flex h-screen flex-col bg-slate-950">
      <Header />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          conversations={filteredConversations}
          activeConversationId={activeConversationId}
          search={search}
          onSearch={setSearch}
          onNewChat={createConversation}
          onSelectConversation={setActiveConversationId}
        />

        <main className="flex min-w-0 flex-1 flex-col bg-slate-950">
          <ChatWindow
            messages={activeConversation.messages}
            loading={loading}
          />

          <ChatInput
            messages={activeConversation.messages}
            setMessages={updateMessages}
            loading={loading}
            setLoading={setLoading}
          />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;