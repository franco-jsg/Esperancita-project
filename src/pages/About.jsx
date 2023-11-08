import Main_social_icons from "../components/Main_social_icons";
import { useEsperancitaContext } from "../context/Context";

import AboutSection from "../components/About/About_section";
import Footer_about from "../components/Footer/Footer_about";

const About = () => {
  const {aboutVideo} = useEsperancitaContext()  

  return (
    <>
      <div className="home_container">
        <Main_social_icons />
        <video className="section_1__video" autoPlay muted loop>
          <source src={aboutVideo.video} />
        </video>
        <AboutSection />
      </div>
      <Footer_about />
    </>
  );
};

export default About;
