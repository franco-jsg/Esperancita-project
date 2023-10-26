import video from "../../assets/videos/reels/ESPERANCITA_REEL_2023_v12.mp4";
import Esperancita from "../../assets/svg/Group 20.svg";
import { useEffect } from "react";

const Section_1 = ({ mainVideo, mainDescription }) => {
  useEffect(() => {

  }, [mainVideo])
  return (
    // <section className="section_1">
    //   <video autoPlay muted loop>
    //     <source src={video} />
    //   </video>
    //   <div className="section_1__info">
    //     <p className="section_1__text">
    //       Somos un estudio de post-producción dedicado a la creación de efectos visuales. Nos especializamos en cleaning, mixed media y Vfx.
    //     </p>
    //     <img src={Esperancita} alt="" className="section_1__img" />
    //   </div>
    // </section>
    <>
      <video className="section_1__video" autoPlay muted loop>
        <source src={mainVideo} />
      </video>
      <div className="section_1__info">
        <p className="section_1__text">
          {/* Somos un estudio de post-producción dedicado a la creación de efectos
          visuales. Nos especializamos en cleaning, mixed media y Vfx. */}
          {mainDescription}
        </p>
        <img src={Esperancita} alt="" className="section_1__img" />
      </div>
    </>
  );
};

export default Section_1;
