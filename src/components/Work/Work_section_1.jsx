import Work_video from "./Work_video";

import img from "../../assets/img/pexels-luke-miller-14060070.jpg";

const Work_section_1 = () => {
  return (
    <section className="work_s1">
      <div className="work_s1_1">
        <Work_video img={img} />
      </div>
      <div className="work_s1_2">
        <div className="work_s1_3"></div>
        <div className="work_s1_4">
          <div className="work_s1_5"></div>
          <div className="work_s1_5"></div>
        </div>
      </div>
    </section>
  );
};

export default Work_section_1;
