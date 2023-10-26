import Main_video from "./Videos_components/Main_video";
import Secondary_video from "./Videos_components/Secondary_video";

// import main_video from "../../assets/videos/simulacion/Aeromexico_Beso_Master_40s_120523.mp4";
// import secondary_video_1 from "../../assets/videos/compo/Bancoppel 30s V1_R1_Luciernagas_Aprobada_23052022.mp4";
import Separator_1 from "./Separator_1";
import Logo from "../../assets/svg/section2/section2-logo.svg";
import Cube from "../../assets/svg/section2/section2-cube.svg";
import LogoSecondary from "../../assets/svg/section2/section2-logo-secondary.svg";
import CubeSecondary from "../../assets/svg/section2/section2-cube-secondary.svg";
import { useEffect, useState } from "react";
import List_button from "../List_button";

// import Data from "../../data/info.json";
import data from '../../data/comerciales.js'
import Work_section_1 from "../Work/Work_section_1";

const Section_2 = ({mainVideo, setMainVideo}) => {
  const listCategories = ["3d", "simulacion", "compo", "all"];
  const [listItemState, setListItemState] = useState(listCategories[0]);

  const categoryActive =
    listItemState === "all"
      ? data
      : data.filter((item) => item.category === listItemState);

  useEffect(() => {
    console.log(categoryActive)
  }, [categoryActive]);

  return (
    <section className="section_2">
      <div className="container">
        <h1 className="section_2__title">Work</h1>
        <Separator_1 />
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
                  main_video={categoryActive[0].video}
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

                      setMainVideo={setMainVideo}
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
