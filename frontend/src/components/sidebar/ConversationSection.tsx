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

      <div>
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Chats
        </h3>

        {conversations.length > 0 ? (
          <ConversationList
            conversations={conversations}
            activeConversationId={activeConversationId}
            onSelect={onSelect}
          />
        ) : (
          <div className="rounded-xl border border-dashed border-slate-700 p-6 text-center">
            <p className="text-sm text-slate-500">
              No conversations found.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConversationSection;