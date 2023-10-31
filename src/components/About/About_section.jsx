import clientes from "../../data/clientes";
import Picture from "../../assets/img/photo1698707185.jpeg";
import Sep_service from "../../assets/svg/footer/footer2.svg";
import Separator_about_servicios from "./Separator_about_servicios";
import Separator_about_clientes from "./Separator_about_clientes";

const AboutSection = () => {
  return (
    <>
      <section className="about__description">
        <img className="description__img" src={Picture} alt="" />
        <div className="description__info">
          <p className="info__text">
            Hola, permítenos compartir un poco más sobre quiénes somos =).
          </p>
          <p className="info__text">
            En el año 2020, después de adquirir una amplia experiencia como
            compositor y supervisor de efectos visuales, Rodrigo Vivas fundó
            Esperancita con el objetivo de crear un estudio que reflejara sus
            sueños y valores: un ambiente laboral agradable, una actitud
            positiva, una atmósfera cálida y un compromiso inquebrantable.
          </p>
          <p className="info__text">
            En Esperancita, no solo nos esforzamos por producir efectos de alta
            calidad, sino que también creemos firmemente en mantener un alto
            estándar de calidad humana.
          </p>
          <p className="info__text">
            Ofrecemos una amplia gama de servicios creativos e innovadores,
            siempre teniendo en cuenta la visión de nuestros clientes. Nuestra
            misión es llevar cada proyecto a un nivel de excelencia.
          </p>
          <p className="info__text">
          Nuestros servicios principales incluyen: mixed media, 3D, 2D y simulación.
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
