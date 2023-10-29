
import { useEsperancitaContext } from "../../context/Context";
import Esperancita from "../../assets/svg/Group 20.svg";
import { useEffect } from "react";

const Section_1 = () => {
  const { mainComercial } = useEsperancitaContext();

  return (
    <>
      <video className="section_1__video" autoPlay muted loop>
        <source src={mainComercial.video} />
      </video>
      <div className="section_1__info">
        <p className="section_1__text">
          {mainComercial.description}
        </p>
        <img src={Esperancita} alt="" className="section_1__img" />
      </div>
    </>
  );
};

export default Section_1;
