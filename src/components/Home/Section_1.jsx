import { useState, useEffect, useRef } from "react";
import { useEsperancitaContext } from "../../context/Context";
import Esperancita from "../../assets/svg/Group 20.svg";

const Section_1 = () => {
  const {
    videoIsIntersecting,
    setVideoIsIntersecting,
    mainComercial,
    lenguage,
    mainComercialMuted,
    setMainComercialMuted
  } = useEsperancitaContext();

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
      setMainComercialMuted(!mainComercialMuted)
    } else {
      videoRef.current.classList.remove("blur");
      setMainComercialMuted(!mainComercialMuted)
    }
  }, [videoIsIntersecting]);

  useEffect(() => {
    const mainComercialId = document.getElementById("mainComercialId");

    mainComercialMuted
      ? (mainComercialId.muted = true)
      : (mainComercialId.muted = false);
  }, [mainComercialMuted, mainComercial]);

  return (
    <>
      <video
        key={mainComercial.video}
        ref={videoRef}
        id="mainComercialId"
        className={"section_1__video"}
        autoPlay
        muted
        loop
        onClick={ () => setMainComercialMuted(!mainComercialMuted)}
      >
        <source src={mainComercial.video} />
      </video>
      <div className="section_1__info">
        <p className="section_1__text">
          {lenguage === "ES"
            ? mainComercial.description[0]
            : mainComercial.description[1]}
        </p>
        <img src={Esperancita} alt="" className="section_1__img" ref={ref} />
      </div>
    </>
  );
};

export default Section_1;
