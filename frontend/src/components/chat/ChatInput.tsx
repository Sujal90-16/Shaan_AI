const ChatInput = () => {
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