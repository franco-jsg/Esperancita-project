import video from '../../assets/videos/example.mp4';
import Esperancita from "../../assets/svg/Group 20.svg";

const Section_1 = () => {
  return (
    <section className="section_1">
      <video autoPlay muted loop>
        <source src={video} />
      </video>
      <div className="section_1__info">
        <p className="section_1__text">
          Somos un estudio de post-producción dedicado a la creación de efectos visuales. Nos especializamos en cleaning, mixed media y Vfx.
        </p>
        <img src={Esperancita} alt="" className="section_1__img" />
      </div>
    </section>
  );
};

export default Section_1;
