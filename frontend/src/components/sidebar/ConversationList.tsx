import ConversationItem from "./ConversationItem";

import type { Conversation } from "@/types/conversation";

interface ConversationListProps {
  conversations: Conversation[];
  activeConversationId: string;
  onSelect: (id: string) => void;
}

const ConversationList = ({
  conversations,
  activeConversationId,
  onSelect,
}: ConversationListProps) => {
  return (
    <div className="space-y-2">
      {conversations.map((conversation) => (
        <ConversationItem
          key={conversation.id}
          conversation={conversation}
          active={conversation.id === activeConversationId}
          onClick={() => onSelect(conversation.id)}
        />
      ))}
    </div>
  );
};

export default ConversationList;