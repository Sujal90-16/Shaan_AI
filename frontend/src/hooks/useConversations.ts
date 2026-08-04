import { useState } from "react";

import type { Conversation } from "../types/conversation";
import type { ChatMessage } from "../types/chat";

export const useConversations = () => {
  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: "chat_1",
      title: "New Chat",
      createdAt: new Date().toISOString(),
      messages: [],
    },
  ]);

  const [activeConversationId, setActiveConversationId] =
    useState("chat_1");

  const activeConversation =
    conversations.find(
      (chat) => chat.id === activeConversationId
    )!;

  const createConversation = () => {
    const id = `chat_${Date.now()}`;

    const newConversation: Conversation = {
      id,
      title: "New Chat",
      createdAt: new Date().toISOString(),
      messages: [],
    };

    setConversations((prev) => [...prev, newConversation]);

    setActiveConversationId(id);
  };

  const updateMessages = (
    updater:
      | ChatMessage[]
      | ((prev: ChatMessage[]) => ChatMessage[])
  ) => {
    setConversations((prev) =>
      prev.map((chat) =>
        chat.id === activeConversationId
          ? {
              ...chat,
              messages:
                typeof updater === "function"
                  ? updater(chat.messages)
                  : updater,
            }
          : chat
      )
    );
  };

  return {
    conversations,
    activeConversation,
    activeConversationId,
    setActiveConversationId,
    createConversation,
    updateMessages,
  };
};