import { Outlet } from "react-router-dom";
// import Navbar from "../components/nav/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Root = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
