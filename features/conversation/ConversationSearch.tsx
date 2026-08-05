import { Search } from "lucide-react";

import { Input } from "@/components/ui";

interface ConversationSearchProps {
  value: string;
  onChange: (value: string) => void;
}

const ConversationSearch = ({
  value,
  onChange,
}: ConversationSearchProps) => {
  return (
    <div className="relative">
      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
      />

      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search conversations..."
        className="pl-10"
      />
    </div>
  );
};

export default ConversationSearch;