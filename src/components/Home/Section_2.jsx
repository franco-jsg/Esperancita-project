import Main_video from "./Videos_components/Main_video";
import Secondary_video from "./Videos_components/Secondary_video";
import { useEsperancitaContext } from "../../context/Context";

import Separator_1 from "./Separator_1";
import Logo from "../../assets/svg/section2/section2-logo.svg";
import Cube from "../../assets/svg/section2/section2-cube.svg";
import LogoSecondary from "../../assets/svg/section2/section2-logo-secondary.svg";
import CubeSecondary from "../../assets/svg/section2/section2-cube-secondary.svg";
import { useEffect, useState } from "react";
import List_button from "../List_button";

import Work_section_1 from "../Work/Work_section_1";

const Section_2 = () => {
  const {
    listCategories, listItemState, categoryActive
  } = useEsperancitaContext()

  useEffect(() => {
    console.log(categoryActive);
  }, [categoryActive]);

  return (
    <>
      <div className="section_2">
        <h1 className="section_2__title">Work</h1>
        <Separator_1 />
        <ul className="section_2__list" >
          {listCategories.map((item, index) => (
            <li key={index}>
              |
              <List_button
                categoryName={item}
              />
            </li>
          ))}
        </ul>

        <div className="section_2__videos">
          {listItemState === "All" ? (
            <Work_section_1 />
          ) : (
            <>
              <Main_video
                // main_category={categoryActive[0].category}
                // main_desc={categoryActive[0].description}
                // main_year={categoryActive[0].year}
                // main_video={categoryActive[0].video}
                Logo={Logo}
                Cube={Cube}
              />
              <div className="other_videos ">
                {categoryActive.map((video) => (
                  <Secondary_video
                    key={video.id}
                    video_id={video.id}
                    secondary_category={video.category}
                    secondary_desc={video.description}
                    secondary_year={video.year}
                    secondary_video={video.video}
                    CubeSecondary={CubeSecondary}
                    LogoSecondary={LogoSecondary}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Section_2;
