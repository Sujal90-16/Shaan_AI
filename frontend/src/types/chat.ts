export interface ChatMessage {
  id: number;
  sender: "user" | "assistant";
  text: string;
}