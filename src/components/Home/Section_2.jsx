import Main_video from "./Videos_components/Main_video";
import Secondary_video from "./Videos_components/Secondary_video";

import main_video from "../../assets/videos/168811 (1080p).mp4";
import secondary_video_1 from "../../assets/videos/runner_-_10809 (540p).mp4";
import secondary_video_2 from "../../assets/videos/boy_-_21827 (540p).mp4";
import Separator from "./Separator";
import Logo from "../../assets/svg/section2/section2-logo.svg";
import Cube from "../../assets/svg/section2/section2-cube.svg";
import LogoSecondary from "../../assets/svg/section2/section2-logo-secondary.svg";
import CubeSecondary from "../../assets/svg/section2/section2-cube-secondary.svg";
import { useState } from "react";
import List_button from "../List_button";

const Section_2 = () => {
  const [listItemState, setListItemState] = useState(true);



  return (
    <section className="section_2">
      <div className="container">
        <h1 className="section_2__title">Work</h1>
        <Separator />
        <div>
          {/* <ul className="section_2__list">
            <li>3D </li>
            <li>| Simulación </li>
            <li>| Compo </li>
            <li>| All</li>
          </ul> */}
          <ul className="section_2__list">
            <li>
              <List_button
                listItemState={listItemState}
                setListItemSt={setListItemState}
              />
            </li>
            <li>| Simulación </li>
            <li>| Compo </li>
            <li>| All</li>
          </ul>
          <div className="section_2__videos">
            <Main_video main_video={main_video} Logo={Logo} Cube={Cube} />
            <div className="other_videos " dir="ltr">
              <Secondary_video
                secondary_video={secondary_video_1}
                CubeSecondary={CubeSecondary}
                LogoSecondary={LogoSecondary}
              />
              <Secondary_video
                secondary_video={secondary_video_2}
                CubeSecondary={CubeSecondary}
                LogoSecondary={LogoSecondary}
              />
              <Secondary_video
                secondary_video={secondary_video_2}
                CubeSecondary={CubeSecondary}
                LogoSecondary={LogoSecondary}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_2;
