import Main_social_icons from "../components/Main_social_icons";
import Section_1 from "../components/Home/Section_1";
import Section_2 from "../components/Home/Section_2";

import Footer_home from "../components/Footer/Footer_home";
import Clients_home from "../components/Clients_home";
import Separator_2_home from "../components/Home/Separator_2_home";

const Home = () => {

  return (
    <>
      <Section_1
      />
      <Main_social_icons />
      <div className="home_container">
        <Section_2  
        />
      </div>
      <Clients_home />
      <Separator_2_home />
      <Footer_home />
    </>
  );
};

export default Home;
