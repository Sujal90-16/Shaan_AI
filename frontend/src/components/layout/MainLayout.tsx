import Header from "./Header";
import Sidebar from "./Sidebar";
import ChatWindow from "../chat/ChatWindow";
import ChatInput from "../chat/ChatInput";

const MainLayout = () => {
  return (
    <>
      <Header />

      <div
        style={{
          display: "flex",
          height: "calc(100vh - 70px)",
        }}
      >
        <Sidebar />

        <main
  style={{
    flex: 1,
    background: "#0F172A",
    display: "flex",
    flexDirection: "column",
  }}
>
  <ChatWindow />

  <ChatInput />
</main>
      </div>
    </>
  );
};

export default MainLayout;