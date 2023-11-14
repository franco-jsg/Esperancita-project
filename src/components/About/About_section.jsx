import clientes from "../../data/clientes";
import Picture from "../../assets/img/photo1698707185.jpeg";
import Sep_service from "../../assets/svg/footer/footer2.svg";
import Separator_about_servicios from "./Separator_about_servicios";
import Separator_about_clientes from "./Separator_about_clientes";
import { useEsperancitaContext } from "../../context/Context";

const AboutSection = () => {
  const { lenguage } = useEsperancitaContext();

  return (
    <>
      <section className="about__description">
        <img className="description__img" src={Picture} alt="" />
        <div className="description__info">
          {lenguage === "ES" ? (
            <>
              <p className="info__text">
                En el año 2020, después de adquirir una amplia experiencia como
                compositor y supervisor de efectos visuales, Rodrigo Vivas fundó
                Esperancita con el objetivo de crear un estudio que reflejara
                sus sueños y valores: un ambiente laboral agradable, una actitud
                positiva, una atmósfera cálida y un compromiso inquebrantable.
              </p>
              <p className="info__text">
                En Esperancita, no solo nos esforzamos por producir efectos de
                alta calidad, sino que también creemos firmemente en mantener un
                alto estándar de calidad humana.
              </p>
              <p className="info__text">
                Ofrecemos una amplia gama de servicios creativos e innovadores,
                siempre teniendo en cuenta la visión de nuestros clientes.
                Nuestra misión es llevar cada proyecto a un nivel de excelencia.
              </p>
              <p className="info__text">
                Nuestros servicios principales incluyen: mixed media, 3D, 2D y
                simulación.
              </p>
            </>
          ) : (
            <>
              <p className="info__text">
                In 2020, after acquiring extensive experience as composer and
                visual effects supervisor, Rodrigo Vivas founded Esperancita
                with the aim of creating a study that would reflect their dreams
                and values: a pleasant work environment, an attitude positive
                attitude, a warm atmosphere and unwavering commitment.
              </p>
              <p className="info__text">
                At Esperancita, we not only strive to produce effects of high
                quality, but we also firmly believe in maintaining a high
                standard of human quality.
              </p>
              <p className="info__text">
                We offer a wide range of creative and innovative services,
                always taking into account the vision of our clients. Our
                mission is to bring each project to a level of excellence.
              </p>
              <p className="info__text">
                Our main services include: mixed media, 3D, 2D and simulation.
              </p>
            </>
          )}
        </div>
      </section>
      <Separator_about_servicios />
      <section className="about__services">
        <div className="service">
          <p className="service_text">Motion Graphic 2D & 3D</p>
          {/* <img src={Sep_service} alt="separator" />
          <div className="service__separator_final-line"></div> */}
        </div>
        <div className="service">
          <p>Composite VFX</p>
        </div>
        <div className="service">
          <p>Modeling, Shading & Lightning</p>
        </div>
        <div className="service">
          <p>Rigging & Animation 3D</p>
        </div>
        <div className="service">
          <p>Simulation</p>
        </div>
        <div className="service">
          <p>Matte Painting</p>
        </div>
        <div className="service">
          <p>Digital Clean / Digital Make-Up</p>
        </div>
        <div className="service">
          <p>Supervision & Coordination</p>
        </div>
      </section>
      <Separator_about_clientes />
      <section className="about__clients">
        <div className="clients__grid">
          <img src={clientes[0].logo} className="clients-grid-item" alt="" />
          <img src={clientes[1].logo} className="clients-grid-item" alt="" />
          <img src={clientes[2].logo} className="clients-grid-item" alt="" />
          <img src={clientes[3].logo} className="clients-grid-item" alt="" />
          <img src={clientes[4].logo} className="clients-grid-item" alt="" />
          <img src={clientes[5].logo} className="clients-grid-item" alt="" />
          <img src={clientes[6].logo} className="clients-grid-item" alt="" />
          <img src={clientes[7].logo} className="clients-grid-item" alt="" />
          <img src={clientes[8].logo} className="clients-grid-item" alt="" />
          <img src={clientes[9].logo} className="clients-grid-item" alt="" />
          <img src={clientes[10].logo} className="clients-grid-item" alt="" />
          <img src={clientes[11].logo} className="clients-grid-item" alt="" />
          <img src={clientes[12].logo} className="clients-grid-item" alt="" />
          <img src={clientes[13].logo} className="clients-grid-item" alt="" />
          <img src={clientes[14].logo} className="clients-grid-item" alt="" />
          <img src={clientes[15].logo} className="clients-grid-item" alt="" />

          {/* <img src={clientes[0].logo} className="clients-grid-item" alt="" />
          <img src={clientes[1].logo} className="clients-grid-item" alt="" />
          <img src={clientes[2].logo} className="clients-grid-item" alt="" />
          <img src={clientes[3].logo} className="clients-grid-item" alt="" />
          <img src={clientes[4].logo} className="clients-grid-item" alt="" />
          <img src={clientes[0].logo} className="clients-grid-item" alt="" />

          <img src={clientes[0].logo} className="clients-grid-item" alt="" />
          <img src={clientes[1].logo} className="clients-grid-item" alt="" />
          <img src={clientes[2].logo} className="clients-grid-item" alt="" />
          <img src={clientes[3].logo} className="clients-grid-item" alt="" />
          <img src={clientes[4].logo} className="clients-grid-item" alt="" />
          <img src={clientes[0].logo} className="clients-grid-item" alt="" /> */}
        </div>
      </section>
    </>
  );
};

export default AboutSection;
