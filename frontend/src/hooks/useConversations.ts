import { useEffect, useState } from "react";

import { conversationService } from "@/services/conversation.service";

import type { Conversation } from "@/types/conversation";
import type { ChatMessage } from "@/types/chat";

export const useConversations = () => {
  const createDefaultConversation = (): Conversation => ({
    id: "chat_1",
    title: "New Chat",
    messages: [],
    createdAt: new Date(),
    updatedAt: new Date(),
    pinned: false,
  });

  const [conversations, setConversations] = useState<Conversation[]>(() => {
    const stored = conversationService.load();

    return stored.length > 0
      ? stored
      : [createDefaultConversation()];
  });

  const [activeConversationId, setActiveConversationId] = useState(
    () =>
      conversationService.loadActiveConversation() ??
      "chat_1"
  );

  useEffect(() => {
    conversationService.saveActiveConversation(
      activeConversationId
    );
  }, [activeConversationId]);

  useEffect(() => {
    conversationService.save(conversations);
  }, [conversations]);

  const activeConversation =
    conversations.find(
      (chat) => chat.id === activeConversationId
    ) ?? conversations[0];

  const createConversation = () => {
    const id = `chat_${Date.now()}`;

    const now = new Date();

    const newConversation: Conversation = {
      id,
      title: "New Chat",
      messages: [],
      createdAt: now,
      updatedAt: now,
      pinned: false,
    };

    setConversations((prev) => [
      newConversation,
      ...prev,
    ]);

    setActiveConversationId(id);
  };

  const updateMessages = (
    updater:
      | ChatMessage[]
      | ((prev: ChatMessage[]) => ChatMessage[])
  ) => {
    setConversations((prev) =>
      prev.map((chat) => {
        if (chat.id !== activeConversationId) {
          return chat;
        }

        const newMessages =
          typeof updater === "function"
            ? updater(chat.messages)
            : updater;

        let title = chat.title;

        if (
          title === "New Chat" &&
          newMessages.length > 0 &&
          newMessages[0].sender === "user"
        ) {
          title =
            newMessages[0].text.length > 40
              ? newMessages[0].text.slice(0, 40) + "..."
              : newMessages[0].text;
        }

        return {
          ...chat,
          title,
          messages: newMessages,
          updatedAt: new Date(),
        };
      })
    );
  };

  const renameConversation = (
    id: string,
    title: string
  ) => {
    setConversations((prev) =>
      prev.map((conversation) =>
        conversation.id === id
          ? {
              ...conversation,
              title,
              updatedAt: new Date(),
            }
          : conversation
      )
    );
  };

  return {
    conversations,
    activeConversation:
      activeConversation ??
      conversations[0],

    activeConversationId,

    setActiveConversationId,

    createConversation,

    updateMessages,

    renameConversation,
  };
};