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
        {lenguage === "ES" ? (
          <>
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
              <p>Pintura Matte</p>
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
          </>
        ) : (
          <>
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
              <p>Modeling, Shading, Lightning, Rigging & Animation 3D</p>
              <img src={Sep_service} alt="separator" />
              <div className="service__separator_final-line"></div>
            </div>
            <div className="service">
              <p>Simulation</p>
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
              <p>Supervision and Coordination</p>
              <img src={Sep_service} alt="separator" />
              <div className="service__separator_final-line"></div>
            </div>
          </>
        )}
      </section>
      <Separator_about_clientes />
      <section className="about__clients">
        {lenguage === "ES" ? (
          <p>Confían en nosotros las siguientes marcas:</p>
        ) : (
          <p>The following brands trust us:</p>
        )}
        <div className="clients__grid">
          <img src={clientes[0].logo} className="clients-grid-item" alt="" />
          <img src={clientes[1].logo} className="clients-grid-item" alt="" />
          <img src={clientes[2].logo} className="clients-grid-item" alt="" />
          <img src={clientes[3].logo} className="clients-grid-item" alt="" />
          <img src={clientes[4].logo} className="clients-grid-item" alt="" />
          <img src={clientes[0].logo} className="clients-grid-item" alt="" />

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
