import { useEffect } from "react";
import { useEsperancitaContext } from "../../context/Context";
import comerciales from '../../data/comerciales'

const Work_video = ({main_video, video_id, video_description}) => {
  const { mainComercial, setMainComercial, lenguage } =
  useEsperancitaContext();

function handleClick() {
  setMainComercial(comerciales[video_id]);

  window.scrollTo(0, 0);
}

useEffect(() => {

},[mainComercial])
  return (
    <div className="work__video" onClick={handleClick}>
      <video autoPlay muted loop width="100%">
        <source src={main_video}/>
      </video>
      <p className="work__video-text">{ lenguage === "ES" ? (video_description[0]) : (video_description[1]) }</p>
    </div>
  );
};

export default Work_video;
