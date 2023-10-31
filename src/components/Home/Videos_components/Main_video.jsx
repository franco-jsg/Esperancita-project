import { useEffect } from "react";
import { useEsperancitaContext } from "../../../context/Context";

const Main_video = ({ Logo, Cube }) => {
  const {
    categoryActive,
  } = useEsperancitaContext()

  return (
    <div className="main_video">
      <div className="video-container">
        <video autoPlay muted loop width="100%">
          <source src={categoryActive[0].video} />
        </video>
      </div>
      <div className="video_text_container">
        <p className="video-clasification">{categoryActive[0].category}</p>
        <img className="video-logo" src={Logo} alt="" />

        <h3 className="main_video__text">
          {categoryActive[0].description}
        </h3>

        <div className="main_video__year">
          <img src={Cube} alt="" />
          <p>{categoryActive[0].year}</p>
        </div>
      </div>
    </div>
  );
};

export default Main_video;
