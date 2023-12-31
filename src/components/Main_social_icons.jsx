import { useState, useEffect, useRef } from "react";
import { useEsperancitaContext } from "../context/Context";

import Instagram from "../assets/svg/socials/instagram.svg";
import YouTube1 from "../assets/svg/socials/youtube1.svg";
import LinkedIn from "../assets/svg/socials/linkedin.svg";
import WhatsApp from "../assets/svg/socials/whatsapp.svg";

const Main_social_icons = () => {

  const { footerIsIntersecting} = useEsperancitaContext()
  const ref = useRef(null);

  useEffect(() => {
    if (footerIsIntersecting) {
      ref.current.classList.add("main_social_icons__toggle");
    } else {
      ref.current.classList.remove("main_social_icons__toggle");
    }
  }, [footerIsIntersecting]);
  return (
    <div className="main_social_icons" ref={ref}>
      <div className="social__icons">
        <a href="https://www.instagram.com/esperancitavfx/" target="_blank" className="social-link">
          <img src={Instagram} alt="Instagram link" />
        </a>
        <a href="https://www.youtube.com/channel/UC4oxmSQzy90Ybl8AXFsC9ZQ" target="_blank" className="social-link">
          <img src={YouTube1} alt="YouTube link" />
        </a>
        <a href="https://www.linkedin.com/company/esperancitavfx/" target="_blank" className="social-link">
          <img src={LinkedIn} alt="LinkedIn link" />
        </a>
        <a href="https://wa.me/5491167393009?text=%C2%A1Hola!%20Gracias%20por%20visitar%20nuestro%20sitio%20web.%20%20Si%20tienes%20alguna%20consulta%20o%20necesitas%20un%20presupuesto%2C%20no%20dudes%20en%20contactarnos.%20Estamos%20a%20solo%20un%20mensaje%20de%20WhatsApp%20de%20distancia.%20%C2%A1Gracias%20:)!" target="_blank" className="social-link">
          <img src={WhatsApp} alt="WhatsApp link" />
        </a>
      </div>
    </div>
  );
};

export default Main_social_icons;
