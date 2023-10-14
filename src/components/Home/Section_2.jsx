import Main_video from "./Videos_components/Main_video";
import Secondary_video from "./Videos_components/Secondary_video";

import main_video from "../../assets/videos/168811 (1080p).mp4";
import secondary_video_1 from "../../assets/videos/runner_-_10809 (540p).mp4";
import Separator from "./Separator";
import Logo from "../../assets/svg/section2/section2-logo.svg";
import Cube from "../../assets/svg/section2/section2-cube.svg";
import LogoSecondary from "../../assets/svg/section2/section2-logo-secondary.svg";
import CubeSecondary from "../../assets/svg/section2/section2-cube-secondary.svg";
import { useEffect, useState } from "react";
import List_button from "../List_button";

import Data from "../../data/info.json";
import Work_section_1 from "../Work/Work_section_1";

const Section_2 = () => {
  const listCategories = ["3d", "simulacion", "compo", "all"];
  const [listItemState, setListItemState] = useState(listCategories[0]);

  const categoryActive =
    listItemState === "all"
      ? Data
      : Data.filter((item) => item.category === listItemState);

  useEffect(() => {}, [categoryActive]);

  return (
    <section className="section_2">
      <div className="container">
        <h1 className="section_2__title">Work</h1>
        <Separator />
        <div>
          <ul className="section_2__list">
            {listCategories.map((item, index) => (
              <li key={index}>
                <List_button
                  categoryName={item}
                  listItemState={listItemState}
                  setListItemState={setListItemState}
                />
              </li>
            ))}
          </ul>

          <div className="section_2__videos">
            {listItemState === "all" ? (
              <Work_section_1 />
            ) : (
              <>
                <Main_video
                  main_category={categoryActive[0].category}
                  main_desc={categoryActive[0].description}
                  main_year={categoryActive[0].year}
                  main_video={main_video}
                  Logo={Logo}
                  Cube={Cube}
                />
                <div className="other_videos ">
                  {categoryActive.map((video) => (
                    <Secondary_video
                      key={video.id}
                      secondary_category={video.category}
                      secondary_desc={video.description}
                      secondary_year={video.year}
                      secondary_video={secondary_video_1}
                      CubeSecondary={CubeSecondary}
                      LogoSecondary={LogoSecondary}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_2;
