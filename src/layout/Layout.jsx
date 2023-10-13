import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import Clients from "../components/Clients";

const Layout = () => {
  return (
    <>
      <Header />

      <Outlet />

      <Clients />
      <Footer />
    </>
  );
};

export default Layout;
