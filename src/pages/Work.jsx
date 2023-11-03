import Main_social_icons from "../components/Main_social_icons";

import Footer_home from "../components/Footer/Footer_home";
import Clients_home from "../components/Clients_home";
import Separator_2_home from "../components/Home/Separator_2_home";
import Work_section_1 from "../components/Work/Work_section_1";
import Separator_1 from "../components/Home/Separator_1";
import { useEsperancitaContext } from "../context/Context";

const Work = () => {
  const { mainComercial } = useEsperancitaContext();
  return (
    <>
      <div className="work_container">
        <Main_social_icons />
        <video className="section_1__video" autoPlay muted loop>
          <source src={mainComercial.video} />
        </video>
        <div className="section_work">
          <h1 className="section_work__title">Work</h1>
          <Separator_1 />
          <div className="section_2__all_videos">
            <Work_section_1 />
          </div>
        </div>
      </div>
      <Clients_home />
      <Separator_2_home />
      <Footer_home />
    </>
  );
};

export default Work;
