import Avatar from "../ui/Avatar";
import Card from "../ui/Card";
import { motion } from "framer-motion";
import { slideUp } from "@/theme/motion";

interface MessageBubbleProps {
  sender: "user" | "assistant";
  text: string;
}

const MessageBubble = ({
  sender,
  text,
}: MessageBubbleProps) => {
  const isUser = sender === "user";

  return (
  <motion.div
    variants={slideUp}
    initial="hidden"
    animate="visible"
    className={`mb-8 flex ${
      isUser
        ? "justify-end"
        : "justify-start"
    }`}
  >
      <div
        className={`flex max-w-4xl items-start gap-4 ${
          isUser
            ? "flex-row-reverse"
            : ""
        }`}
      >
        <Avatar
          type={
            isUser
              ? "user"
              : "assistant"
          }
        />

        <Card
          className={
            isUser
              ? "bg-blue-600 text-white border-blue-500"
              : ""
          }
        >
          <p className="whitespace-pre-wrap leading-7">
            {text}
          </p>
        </Card>
      </div>
    </motion.div>
  );
};

export default MessageBubble;