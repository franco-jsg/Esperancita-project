import { useState, useEffect, useRef } from "react";
import { useEsperancitaContext } from "../../context/Context";
import Esperancita from "../../assets/svg/Group 20.svg";
import Main_video from "./Videos_components/Main_video";

const Section_1 = () => {
  const { videoIsIntersecting, setVideoIsIntersecting, mainComercial,lenguage } =
    useEsperancitaContext();

  const videoRef = useRef(null);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVideoIsIntersecting(entry.isIntersecting),
        { rootMargin: "-200px 0px 0px 0px" };
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [videoIsIntersecting]);

  useEffect(() => {
    if (videoIsIntersecting) {
      videoRef.current.classList.add("blur");
    } else {
      videoRef.current.classList.remove("blur");
    }
  }, [videoIsIntersecting]);

  return (
    <>
      <video key={mainComercial.video} ref={videoRef} className={"section_1__video"} autoPlay muted loop>
        <source src={mainComercial.video} />
      </video>
      <div className="section_1__info">
        <p className="section_1__text">
          {
            lenguage === "ES" ? (mainComercial.description[0]) :
          mainComercial.description[1]
          }
        </p>
        <img src={Esperancita} alt="" className="section_1__img" ref={ref} />
      </div>
    </>
  );
};

export default Section_1;
