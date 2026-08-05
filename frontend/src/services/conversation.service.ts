import type { Conversation } from "@/types/conversation";

const CONVERSATIONS_KEY = "shaan_conversations";
const ACTIVE_CHAT_KEY = "shaan_active_chat";

export const conversationService = {
  save(conversations: Conversation[]) {
    localStorage.setItem(
      CONVERSATIONS_KEY,
      JSON.stringify(conversations)
    );
  },

  load(): Conversation[] {
    const data = localStorage.getItem(CONVERSATIONS_KEY);

    if (!data) {
      return [];
    }

    try {
      const conversations = JSON.parse(data);

      return conversations.map((conversation: Conversation) => ({
        ...conversation,
        createdAt: new Date(conversation.createdAt),
        updatedAt: new Date(conversation.updatedAt),
      }));
    } catch {
      return [];
    }
  },

  saveActiveConversation(id: string) {
    localStorage.setItem(ACTIVE_CHAT_KEY, id);
  },

  loadActiveConversation() {
    return localStorage.getItem(ACTIVE_CHAT_KEY);
  },

  clear() {
    localStorage.removeItem(CONVERSATIONS_KEY);
    localStorage.removeItem(ACTIVE_CHAT_KEY);
  },
};