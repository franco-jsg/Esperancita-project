import { useState } from "react";
import Section_1 from "../components/Home/Section_1";
import Main_social_icons from "../components/Main_social_icons";

import data from "../data/comerciales.js";
import AboutSection from "../components/About/About_section";

const About = () => {
  const [mainVideo, setMainVideo] = useState(data[0]);
  return (
    <>
      <div className="home_container">
        <Main_social_icons />
        <Section_1
          mainVideo={mainVideo.video}
          mainDescription={mainVideo.description}
        />
        <AboutSection />

      </div>
    </>
  );
};

export default About;
