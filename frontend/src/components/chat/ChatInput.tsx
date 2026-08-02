import { useState } from "react";
import { sendMessage } from "../../services/chatService";

const ChatInput = () => {
  const [message, setMessage] = useState("");

 const handleSend = async () => {
  if (!message.trim()) return;

  try {
    const response = await sendMessage(message);

    alert(response.reply);

    setMessage("");
  } catch (error) {
    console.error(error);
    alert("Unable to contact SHAAN.");
  }
};

  return (
    <div
      style={{
        display: "flex",
        padding: "20px",
        borderTop: "1px solid #2B2B2B",
        background: "#111827",
      }}
    >
      <input
        type="text"
        placeholder="Ask SHAAN anything..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{
          flex: 1,
          padding: "14px",
          borderRadius: "10px",
          border: "none",
          outline: "none",
          fontSize: "16px",
        }}
      />

      <button
        onClick={handleSend}
        style={{
          marginLeft: "10px",
          padding: "14px 22px",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
          background: "#2563EB",
          color: "white",
          fontWeight: "bold",
        }}
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;