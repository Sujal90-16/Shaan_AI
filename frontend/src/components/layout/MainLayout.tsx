import Header from "./Header";
import Sidebar from "./Sidebar";

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
            background: "#0f172a",
          }}
        ></main>
      </div>
    </>
  );
};

export default MainLayout;