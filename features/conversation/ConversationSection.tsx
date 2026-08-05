import ConversationSearch from "./ConversationSearch";
import ConversationList from "./ConversationList";

import type { Conversation } from "@/types/conversation";

interface ConversationSectionProps {
  conversations: Conversation[];

  activeConversationId: string;

  search: string;

  onSearch: (value: string) => void;

  onSelect: (id: string) => void;
}

const ConversationSection = ({
  conversations,
  activeConversationId,
  search,
  onSearch,
  onSelect,
}: ConversationSectionProps) => {
  return (
    <div className="space-y-4">
      <ConversationSearch
        value={search}
        onChange={onSearch}
      />

      <ConversationList
        conversations={conversations}
        activeConversationId={activeConversationId}
        onSelect={onSelect}
      />
    </div>
  );
};

export default ConversationSection;