import Main_video from "./Videos_components/Main_video";
import Secondary_video from "./Videos_components/Secondary_video";

import main_video from "../../assets/videos/168811 (1080p).mp4";
import secondary_video_1 from "../../assets/videos/runner_-_10809 (540p).mp4";
import secondary_video_2 from "../../assets/videos/boy_-_21827 (540p).mp4";

const Section_2 = () => {
  return (
    <section className="section_2">
      <div className=" container">
        <h1>Work</h1>
        <div>----------</div>
        <div>
          <ul className="section_2__list">
            <li>3D </li>
            <li>| Simulación </li>
            <li>| Compo </li>
            <li>| All</li>
          </ul>
          <div className="section_2__videos">
            <Main_video main_video={main_video} />
            <div className="other_videos">
              <Secondary_video secondary_video={secondary_video_1}/>
              <Secondary_video secondary_video={secondary_video_2} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_2;
