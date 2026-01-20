import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />   {/* PAGE CONTENT WILL CHANGE HERE */}
      <Footer />
    </>
  );
};

export default Layout;
