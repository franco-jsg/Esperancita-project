import { useState, useEffect, useRef } from "react";

import Sep1 from "../../assets/svg/Separator/separator1.svg";
import Sep2 from "../../assets/svg/Separator/separator2.svg";
import Sep3 from "../../assets/svg/Separator/separator3.svg";

const Separator_1 = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting), { rootMargin: "-300px 0px 300px 0px" };
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      ref.current.classList.add("separator-3__expand");
    } else {
      ref.current.classList.remove("separator-3__expand");
    }
  }, [isIntersecting]);

  return (
    <div className="separator-container-1">
      <img src={Sep1} alt="" className="separator-1" />
      <img src={Sep2} alt="" className="separator-2" />
      <img src={Sep3} alt="" className="separator-3" ref={ref} />
    </div>
  );
};

export default Separator_1;
