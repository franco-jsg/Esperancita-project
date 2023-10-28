import clientes from "../data/clientes";

const Clients_home = () => {
  return (
    <section className="clients clients_home">
      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <img src={clientes[0].logo} alt="" />
          </div>
          <div className="slide">
            <img src={clientes[1].logo} alt="" />
          </div>
          <div className="slide">
            <img src={clientes[2].logo} alt="" />
          </div>
          <div className="slide">
            <img src={clientes[3].logo} alt="" />
          </div>
          <div className="slide">
            <img src={clientes[4].logo} alt="" />
          </div>
          <div className="slide">
            <img src={clientes[0].logo} alt="" />
          </div>
          <div className="slide">
            <img src={clientes[1].logo} alt="" />
          </div>
          <div className="slide">
            <img src={clientes[2].logo} alt="" />
          </div>
          <div className="slide">
            <img src={clientes[3].logo} alt="" />
          </div>

          <div className="slide">
            <img src={clientes[0].logo} alt="" />
          </div>
          <div className="slide">
            <img src={clientes[1].logo} alt="" />
          </div>
          <div className="slide">
            <img src={clientes[2].logo} alt="" />
          </div>
          <div className="slide">
            <img src={clientes[3].logo} alt="" />
          </div>
          <div className="slide">
            <img src={clientes[4].logo} alt="" />
          </div>
          <div className="slide">
            <img src={clientes[0].logo} alt="" />
          </div>
          <div className="slide">
            <img src={clientes[1].logo} alt="" />
          </div>
          <div className="slide">
            <img src={clientes[2].logo} alt="" />
          </div>
          <div className="slide">
            <img src={clientes[3].logo} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients_home;
