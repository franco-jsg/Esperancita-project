import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import Clients from "../components/Clients";
import Separator_2 from "../components/Home/Separator_2";

const Layout = () => {
  return (
    <>
      <Header />

      <Outlet />
      <Clients />
      <Separator_2 />
      <Footer />
    </>
  );
};

export default Layout;
