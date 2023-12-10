import { useEffect } from "react";
import { useEsperancitaContext } from "../../../context/Context.jsx";
import comerciales from "../../../data/comerciales.js";

const Secondary_video = ({
  video_id,
  name,
  secondary_category,
  secondary_desc,
  secondary_year,
  secondary_video,
  LogoSecondary,
  CubeSecondary,
}) => {
  const {
    mainComercial,
    setMainComercial,
    listItemState,
    lenguage,
    mainComercialMuted,
    setMainComercialMuted,
  } = useEsperancitaContext();

  function handleClick() {
    setMainComercial(comerciales.find((v) => v.id == video_id));

    window.scrollTo(0, 0);

    setMainComercialMuted(!mainComercialMuted);
    console.log(mainComercial);
  }
  const categoryFiltered = secondary_category.find((i) => i === listItemState);

  useEffect(() => {}, [mainComercial, lenguage, mainComercialMuted]);

  return (
    <div className="secondary_video">
      {secondary_video && (
        <video autoPlay muted loop width="100%" onClick={handleClick}>
          <source src={secondary_video} />
        </video>
      )}
      <div className="secondary-video_text_container">
        <p className="video-clasification">{categoryFiltered}</p>
        <img src={LogoSecondary} className="secondary_video__logo" alt="" />

        <h4 className="secondary_video__text">
          {name}
          {/* {lenguage ==="ES" ? secondary_desc[0] : secondary_desc[1]} */}
        </h4>

        <div className="secondary_video__year">
          <img src={CubeSecondary} className="secondary_video__cube" alt="" />
          <p>{secondary_year}</p>
        </div>
      </div>
    </div>
  );
};

export default Secondary_video;
