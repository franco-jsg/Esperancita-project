import comerciales from "../../data/comerciales";

import Work_video from "../Work/Work_video";

const Work_section_1 = () => {
  return (
    <>
      <section className="work_s1">
        <div className="s1-v1">
          <Work_video main_video={comerciales[0].video} video_id={comerciales[0].id} />
        </div>
        <div className="s1-v2">
          <Work_video main_video={comerciales[1].video} video_id={comerciales[1].id} />
        </div>
        <div className="s1-v3">
          <Work_video main_video={comerciales[2].video} video_id={comerciales[2].id} />
        </div>
        <div className="s1-v4">
          <Work_video main_video={comerciales[3].video} video_id={comerciales[3].id} />
        </div>
      </section>
      <section className="work_s2">
        <div className="s2-v1">
          <Work_video main_video={comerciales[4].video} video_id={comerciales[4].id} />
        </div>
        <div className="s2-v2">
          <Work_video main_video={comerciales[5].video} video_id={comerciales[5].id} />
        </div>
        <div className="s2-v3">
          <Work_video main_video={comerciales[6].video} video_id={comerciales[6].id} />
        </div>
        <div className="s2-v4">
          <Work_video main_video={comerciales[7].video} video_id={comerciales[7].id} />
        </div>
        <div className="s2-v5">
          <Work_video main_video={comerciales[8].video} video_id={comerciales[8].id} />
        </div>
      </section>
      <section className="work_s3">
        <div className="s3-v1">
          <Work_video main_video={comerciales[9].video} video_id={comerciales[9].id} />
        </div>
        <div className="s3-v2">
          <Work_video main_video={comerciales[10].video} video_id={comerciales[10].id} />
        </div>
        <div className="s3-v3">
          <Work_video main_video={comerciales[11].video} video_id={comerciales[11].id} />
        </div>
      </section>
      <section className="work_s4">
        <div className="s4-v1">
          <Work_video main_video={comerciales[11].video} video_id={comerciales[11].id} />
        </div>
        <div className="s4-v2">
          <Work_video main_video={comerciales[11].video} video_id={comerciales[11].id} />
        </div>
        <div className="s4-v3">
          <Work_video main_video={comerciales[11].video} video_id={comerciales[11].id} />
        </div>
      </section>
      <section className="work_s5">
        <div className="s5-v1">
          <Work_video main_video={comerciales[11].video} video_id={comerciales[11].id} />
        </div>
      </section>
    </>
  );
};

export default Work_section_1;
