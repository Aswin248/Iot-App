import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <SideBar />
      <Navbar />
      <main
        style={{
          marginLeft: 220,               // width of fixed sidebar
          marginTop: 60,                  // height of fixed navbar
          padding: 20,
          backgroundColor: "#fffdfdff",
          height: "calc(100vh - 60px)",   // fill remaining space after navbar
          overflowY: "auto",              // scroll only content
          boxSizing: "border-box"
        }}
      >
        <Outlet />
      </main>
    </>
  );
};

export default Home;
