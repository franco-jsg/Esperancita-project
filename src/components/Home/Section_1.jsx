
import { useEsperancitaContext } from "../../context/Context";
import Esperancita from "../../assets/svg/Group 20.svg";

const Section_1 = () => {
  const { mainComercial,lenguage } = useEsperancitaContext();

  return (
    <>
      <video key={mainComercial.id} className="section_1__video" autoPlay muted loop>
        <source src={mainComercial.video} />
      </video>
      <div className="section_1__info">
        <p className="section_1__text">
          {
            lenguage === "ES" ? (mainComercial.description[0]) :
          mainComercial.description[1]
          }
        </p>
        <img src={Esperancita} alt="" className="section_1__img" />
      </div>
    </>
  );
};

export default Section_1;
