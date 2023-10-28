import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer_home";
import Clients from "../components/Clients_home";
import Separator_2 from "../components/Home/Separator_2_home";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
