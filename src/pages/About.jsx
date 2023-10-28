import { useState } from "react";
import Section_1 from "../components/Home/Section_1";
import Main_social_icons from "../components/Main_social_icons";

import data from "../data/comerciales.js";
import AboutSection from "../components/About/About_section";
import Separator_2 from "../components/Home/Separator_2_home";
import Footer_about from "../components/Footer/Footer_about";
import Clients_about from "../components/Clients_about";
import Separator_2_about from "../components/About/Separator_2_about";


const About = () => {
  const [mainVideo, setMainVideo] = useState(data[0]);
  return (
    <>
      <div className="home_container">
        <Main_social_icons />
        <video className="section_1__video" autoPlay muted loop>
          <source src={mainVideo.video} />
        </video>
        <AboutSection />
      </div>
      <Clients_about />
      <Separator_2_about />
      <Footer_about />
    </>
  );
};

export default About;
