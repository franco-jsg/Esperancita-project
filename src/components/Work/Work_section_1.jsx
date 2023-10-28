import comerciales from '../../data/comerciales'

import Work_video from "../Work/Work_video";

const Work_section_1 = () => {
  return (
    <>
      <div className="work_container">
        <section className="work_s1">
          <div className="s1-v1">
            <Work_video main_video={comerciales[0].video} />
          </div>
          <div className="s1-v2">
            <Work_video main_video={comerciales[1].video} />
          </div>
          <div className="s1-v3">
            <Work_video main_video={comerciales[2].video} />
          </div>
          <div className="s1-v4">
            <Work_video main_video={comerciales[3].video} />
          </div>
        </section>
        <section className="work_s2">
          <div className="s2-v1">
            <Work_video main_video={comerciales[4].video} />
          </div>
          <div className="s2-v2">
            <Work_video main_video={comerciales[5].video} />
          </div>
          <div className="s2-v3">
            <Work_video main_video={comerciales[6].video} />
          </div>
          <div className="s2-v4">
            <Work_video main_video={comerciales[7].video} />
          </div>
          <div className="s2-v5">
            <Work_video main_video={comerciales[8].video} />
          </div>
        </section>
        <section className="work_s3">
          <div className="s3-v1">
            <Work_video main_video={comerciales[9].video} />
          </div>
          <div className="s3-v2">
            <Work_video main_video={comerciales[10].video} />
          </div>
          <div className="s3-v3">
            <Work_video main_video={comerciales[11].video} />
          </div>
        </section>
        <section className="work_s4">
          <div className="s4-v1">
            <Work_video main_video={comerciales[11].video} />
          </div>
          <div className="s4-v2">
            <Work_video main_video={comerciales[11].video} />
          </div>
          <div className="s4-v3">
            <Work_video main_video={comerciales[11].video} />
          </div>
        </section>
        <section className="work_s5">
          <div className="s5-v1">
            <Work_video main_video={comerciales[11].video} />
          </div>
        </section>
      </div>
    </>
  );
};

export default Work_section_1;
