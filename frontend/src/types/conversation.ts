import type { ChatMessage } from "./chat";

export interface Conversation {
  id: string;

  title: string;

  messages: ChatMessage[];

  createdAt: Date;

  updatedAt: Date;

  pinned: boolean;

  /**
   * Temporary UI state
   * Used while renaming.
   */
  isEditing?: boolean;
}