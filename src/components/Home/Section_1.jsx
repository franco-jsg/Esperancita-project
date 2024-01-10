import { useState, useEffect, useRef } from "react";
import { useEsperancitaContext } from "../../context/Context";
import Esperancita from "../../assets/svg/Group 20.svg";
import animated_logo from '../../assets/videos/logo_animado.mp4'

const Section_1 = () => {
  const {
    videoIsIntersecting,
    setVideoIsIntersecting,
    mainComercial,
    lenguage,
    mainComercialMuted,
    setMainComercialMuted
  } = useEsperancitaContext();

  const [loader, setLoader] = useState(true)

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
      if (videoRef.current.classList.contains("blur") && mainComercialMuted)
      videoRef.current.classList.remove("blur");
    }
  }, [videoIsIntersecting]);

  useEffect(() => {
    const mainComercialId = document.getElementById("mainComercialId");

    mainComercialMuted
      ? (mainComercialId.muted = true)
      : (mainComercialId.muted = false);
  }, [mainComercialMuted]);

  useEffect(() => {
    document.body.scrollTo(0, 0)
    setTimeout(() => {
      window.scrollTo({ top:0, left:0, behavior: "instant"})
    }, 100)
  }, [mainComercial])

  useEffect(() => {
    if (!loader)
      videoRef.current.play()
  }, [loader])

  useEffect(() => {
    videoRef.current.addEventListener('loadeddata', (e) => {
   
      if(videoRef.current.readyState >= 3){
          setLoader(false)
      }
   });
   videoRef.current.load()
  }, [])

  const toggleAudio = () => setMainComercialMuted(!mainComercialMuted)
  return (
    <>
      {
        loader && (
          <div className="home-loader">
            <video autoPlay muted loop className="animated-logo" >
              <source src={animated_logo} />
            </video>
          </div>
        )
      }
      <video
        key={mainComercial.video}
        ref={videoRef}
        id="mainComercialId"
        className="section_1__video"
        preload="none"
        muted
        loop
        onClick={toggleAudio}
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
        {
          !mainComercialMuted && (
            <svg className="audio-icon audio-icon--off" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
          )
        }
        {
          mainComercialMuted && (
            <svg className="audio-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>
          )
        }
      </div>
    </>
  );
};

export default Section_1;
