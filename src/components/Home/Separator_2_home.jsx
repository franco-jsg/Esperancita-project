import { useState, useEffect, useRef } from "react"

import Sep1 from "../../assets/svg/Separator/separator1.svg"
import Sep2 from "../../assets/svg/Separator/separator2.svg"
import Sep3 from "../../assets/svg/Separator/separator3.svg"

const Separator_2_home = () => {

    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        setIsIntersecting(entry.isIntersecting), { rootMargin: "-300px 0px 300px 0px" };
      });
      console.log(isIntersecting);
      observer.observe(ref.current);
      return () => observer.disconnect();
    }, [isIntersecting]);
  
    useEffect(() => {
      if (isIntersecting) {
        ref.current.classList.add("separator-3__expand");
      } else {
        ref.current.classList.remove("separator-3__expand");
      }
      console.log(ref.current);
    }, [isIntersecting]);

    return(
        <div className="separator-container-2 separator-container-2_home">
            <img src={Sep1} alt="" className="separator-1"/>
            <img src={Sep2} alt="" className="separator-2"/>
            <img src={Sep3} alt="" className="separator-3" ref={ref}/>
        </div>
    )
}

export default Separator_2_home