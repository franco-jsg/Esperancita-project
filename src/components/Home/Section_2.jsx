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
    listCategories, listItemState, categoryActive, workRef, renderListCategories, setRenderListCategories
  } = useEsperancitaContext()

  useEffect(() => {
    if(renderListCategories) {
      (workRef.current?.scrollIntoView({behavior: 'smooth'}))
      setRenderListCategories(false)
    }  
  }, [categoryActive, renderListCategories]);

  return (
    <>
      <div ref={workRef} id="work"  className="section_2">
        <h1 className="section_2__title">Work</h1>
        <Separator_1 />
        <ul className="section_2__list" >
          {listCategories.map((item, index) => (
            <li key={index}>
              <List_button
                categoryName={item}
              />
            </li>
          ))}
        </ul>


          {listItemState === "All" ? (
            <div className="section_2__all_videos">
              <Work_section_1 />
            </div>
          ) : (
            <div className="section_2__videos">
              <Main_video
                Logo={Logo}
                Cube={Cube}
              />
              <div className="other_videos ">
                {categoryActive.slice(1).map((video) => (
                  <Secondary_video
                    key={video.id}
                    video_id={video.id}
                    secondary_category={video.category}
                    name={video.name}
                    secondary_desc={video.description}
                    secondary_year={video.year}
                    secondary_video={video.video}
                    CubeSecondary={CubeSecondary}
                    LogoSecondary={LogoSecondary}
                  />
                ))}
              </div>
            </div>
          )}

      </div>
    </>
  );
};

export default Section_2;
