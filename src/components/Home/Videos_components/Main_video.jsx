import { useEffect, useState } from "react";
import { useEsperancitaContext } from "../../../context/Context";
import comerciales from "../../../data/comerciales.js";

const Main_video = ({ Logo, Cube}) => {
  const [activeVideo, setActiveVideo] = useState()
  const {
    categoryActive,
    listItemState,
    lenguage,
    setMainComercial
  } = useEsperancitaContext()

  useEffect(() => {
    setActiveVideo(categoryActive[0])
  },[listItemState])

  function handleClick() {
    setMainComercial(comerciales.find(v => v.id == activeVideo.id));

    window.scrollTo(0, 0);
  }

  return (
    <div className="main_video" onClick={handleClick}>
      {
        activeVideo && (
          <>
        <div className="video-container">
          {
            listItemState && activeVideo && (
              <video key={`${listItemState}+${activeVideo.name}`}autoPlay muted loop width="100%">
                <source src={activeVideo.video} />
              </video>
            )
          }
        </div>
        <div className="video_text_container">
          <p className="video-clasification">{activeVideo.category}</p>
          <img className="video-logo" src={Logo} alt="" />

          <h3 className="main_video__text">
            {/* {activeVideo.description} */}
            {lenguage ==="ES" ? activeVideo.name : activeVideo.name}
          </h3>

          <div className="main_video__year">
            <img src={Cube} alt="" />
            <p>{activeVideo.year}</p>
          </div>
        </div>
        </>
        )
      }
    </div>
  );
};

export default Main_video;
