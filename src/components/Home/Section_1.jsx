import video from '../../assets/videos/example.mp4';
import Esperancita from "../../assets/svg/Group 20.svg";

const Section_1 = () => {
  return (
    <section className="section_1">
      <video autoPlay muted loop>
        <source src={video} />
      </video>
      <div className="section_1__info container">
        <p className="section_1__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
          voluptate iusto saepe aperiam. 
        </p>
        <img src={Esperancita} alt="" className="section_1__img" />
      </div>
    </section>
  );
};

export default Section_1;
