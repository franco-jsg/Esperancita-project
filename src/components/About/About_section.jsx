import clientes from "../../data/clientes";
import exampleImage from "../../assets/img/lei-min-20200316103316.jpg";
import Sep_service from "../../assets/svg/footer/footer2.svg";
import Separator_about_servicios from "./Separator_about_servicios";
import Separator_about_clientes from "./Separator_about_clientes";

const AboutSection = () => {
  return (
    <>
      <section className="about__description">
        <img className="description__img" src={exampleImage} alt="" />
        <div className="description__info">
          <p className="info__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit animi
            minus quidem officia sequi modi odio quis facilis, molestias veniam
            temporibus, delectus, obcaecati unde cupiditate nihil amet
            accusamus.
          </p>
          <p className="info__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit animi
            minus quidem officia sequi modi odio quis facilis, molestias veniam
            temporibus, delectus, obcaecati unde cupiditate nihil amet
            accusamus.
          </p>
          <p className="info__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit animi
            minus quidem officia sequi modi odio quis facilis, molestias veniam
            temporibus, delectus, obcaecati unde cupiditate nihil amet
            accusamus.
          </p>
        </div>
      </section>
      <Separator_about_servicios />
      <section className="about__services">
        <div className="service">
          <p>Motion Graphic 2D & 3D</p>
          <img src={Sep_service} alt="separator" />
          <div className="service__separator_final-line"></div>
        </div>
        <div className="service">
          <p>Composite VFX</p>
          <img src={Sep_service} alt="separator" />
          <div className="service__separator_final-line"></div>
        </div>
        <div className="service">
          <p>Modelado, Shading, Lightning, Rigging & Animación 3D</p>
          <img src={Sep_service} alt="separator" />
          <div className="service__separator_final-line"></div>
        </div>
        <div className="service">
          <p>Simulación</p>
          <img src={Sep_service} alt="separator" />
          <div className="service__separator_final-line"></div>
        </div>
        <div className="service">
          <p>Matte Painting</p>
          <img src={Sep_service} alt="separator" />
          <div className="service__separator_final-line"></div>
        </div>
        <div className="service">
          <p>Digital Clean / Digital Make-Up</p>
          <img src={Sep_service} alt="separator" />
          <div className="service__separator_final-line"></div>
        </div>
        <div className="service">
          <p>Supervisión y Coordinación</p>
          <img src={Sep_service} alt="separator" />
          <div className="service__separator_final-line"></div>
        </div>
      </section>
      <Separator_about_clientes />
      <section className="about__clients">
        <p>Confían en nosotros las siguientes marcas:</p>
        <div className="clients__grid">
          <div className="clients__row">
            <img src={clientes[0].logo} alt="" />
            <img src={clientes[1].logo} alt="" />
            <img src={clientes[2].logo} alt="" />
            <img src={clientes[3].logo} alt="" />
            <img src={clientes[4].logo} alt="" />
            <img src={clientes[0].logo} alt="" />
          </div>
          <div className="clients__row">
            <img src={clientes[0].logo} alt="" />
            <img src={clientes[1].logo} alt="" />
            <img src={clientes[2].logo} alt="" />
            <img src={clientes[3].logo} alt="" />
            <img src={clientes[4].logo} alt="" />
            <img src={clientes[0].logo} alt="" />
          </div>
          <div className="clients__row">
            <img src={clientes[0].logo} alt="" />
            <img src={clientes[1].logo} alt="" />
            <img src={clientes[2].logo} alt="" />
            <img src={clientes[3].logo} alt="" />
            <img src={clientes[4].logo} alt="" />
            <img src={clientes[0].logo} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
