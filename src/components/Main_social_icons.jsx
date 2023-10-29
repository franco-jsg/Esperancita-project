import Instagram from "../assets/svg/socials/instagram.svg";
import YouTube1 from "../assets/svg/socials/youtube1.svg";
import LinkedIn from "../assets/svg/socials/linkedin.svg";
import WhatsApp from "../assets/svg/socials/whatsapp.svg";

const Main_social_icons = () => {
  return (
    <div className="main_social_icons">
      <div className="social__icons">
        <a href="https://instagram.com" target="_blank" className="social-link">
          <img src={Instagram} alt="Instagram link" />
        </a>
        <a href="https://www.youtube.com" target="_blank" className="social-link">
          <img src={YouTube1} alt="YouTube link" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" className="social-link">
          <img src={LinkedIn} alt="LinkedIn link" />
        </a>
        <a href="https://www.whatsapp.com" target="_blank" className="social-link">
          <img src={WhatsApp} alt="WhatsApp link" />
        </a>
      </div>
    </div>
  );
};

export default Main_social_icons;
