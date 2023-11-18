import { useEffect, useRef } from "react";
import { useEsperancitaContext } from "../../context/Context";
import Contact_form from "./Contact_form";
import Logo from "../../assets/svg/footer/footer1.svg";
import Separator from "../../assets/svg/footer/footer2.svg";
import Instagram from "../../assets/svg/socials/instagram.svg";
import Youtube2 from "../../assets/svg/socials/youtube2.svg";
import LinkedIn from "../../assets/svg/socials/linkedin.svg";
import Categories_list_about from "./Categories_list_about";

const Footer_about = () => {
  const { footerIsIntersecting, setFooterIsIntersecting, lenguage } =
    useEsperancitaContext();

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setFooterIsIntersecting(entry.isIntersecting),
        { rootMargin: "-150px 0px 0px 0px" };
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [footerIsIntersecting]);

  return (
    <footer className="footer footer_about" ref={ref}>
      <div className="section_footer">
        <img className="footer_logo" src={Logo} alt="logo" />
        <section className="footer__info">
          <Categories_list_about />
          <Contact_form />

          <div className="footer__social">
            <h4>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdOiQbCiMk_zWd0XqBzRFvLUpuJ9_b2ZquqAlcVUVpwkjEvXQ/viewform?usp=pp_url"
                target="_blank"
                className="social-link"
              >
                Join us
              </a>
            </h4>
            <img src={Separator} alt="separator" />
            <div className="social__links">
              Follow us:
              <div className="social__icons">
                <a
                  href="https://www.instagram.com/esperancitavfx/"
                  target="_blank"
                  className="social-link"
                >
                  <img src={Instagram} alt="" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UC4oxmSQzy90Ybl8AXFsC9ZQ"
                  target="_blank"
                  className="social-link"
                >
                  <img src={Youtube2} alt="" />
                </a>
                <a
                  href="https://www.linkedin.com/company/esperancitavfx/"
                  target="_blank"
                  className="social-link"
                >
                  <img src={LinkedIn} alt="" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer_about;
