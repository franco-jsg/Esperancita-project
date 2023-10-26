// import aeroMex from "../assets/svg/clients/aeromexico-logo.svg"
// import honda from "../assets/svg/clients/honda.svg"
// import nissan from "../assets/svg/clients/nissan-logo.svg"
// import oxxo from "../assets/svg/clients/oxxo.svg"
// import ram from "../assets/svg/clients/ram.svg"

import clientes from '../data/clientes'

import Separator from "./Home/Separator_1";

const Clients = () => {
  return (
    <section className="clients">
      <div className="container">
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
      </div>
    </section>
  );
};

export default Clients;
