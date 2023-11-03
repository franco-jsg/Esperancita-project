import comerciales from "../../data/comerciales";

import Work_video from "../Work/Work_video";

const Work_section_1 = () => {
  return (
    <>
      <section className="work_s1">
        <div className="s1-v1">
          <Work_video main_video={comerciales[0].video} video_id={comerciales[0].id} video_description={comerciales[0].description} />
        </div>
        <div className="s1-v2">
          <Work_video main_video={comerciales[1].video} video_id={comerciales[1].id} video_description={comerciales[1].description}/>
        </div>
        <div className="s1-v3">
          <Work_video main_video={comerciales[2].video} video_id={comerciales[2].id} video_description={comerciales[2].description}/>
        </div>
        <div className="s1-v4">
          <Work_video main_video={comerciales[3].video} video_id={comerciales[3].id} video_description={comerciales[3].description}/>
        </div>
      </section>
      <section className="work_s2">
        <div className="s2-v1">
          <Work_video main_video={comerciales[4].video} video_id={comerciales[4].id} video_description={comerciales[4].description}/>
        </div>
        <div className="s2-v2">
          <Work_video main_video={comerciales[5].video} video_id={comerciales[5].id} video_description={comerciales[5].description}/>
        </div>
        <div className="s2-v3">
          <Work_video main_video={comerciales[6].video} video_id={comerciales[6].id} video_description={comerciales[6].description}/>
        </div>
        <div className="s2-v4">
          <Work_video main_video={comerciales[7].video} video_id={comerciales[7].id} video_description={comerciales[7].description}/>
        </div>
        <div className="s2-v5">
          <Work_video main_video={comerciales[8].video} video_id={comerciales[8].id} video_description={comerciales[8].description} />
        </div>
      </section>
      <section className="work_s3">
        <div className="s3-v1">
          <Work_video main_video={comerciales[9].video} video_id={comerciales[9].id} video_description={comerciales[9].description}/>
        </div>
        <div className="s3-v2">
          <Work_video main_video={comerciales[10].video} video_id={comerciales[10].id} video_description={comerciales[10].description}/>
        </div>
        <div className="s3-v3">
          <Work_video main_video={comerciales[11].video} video_id={comerciales[11].id} video_description={comerciales[11].description}/>
        </div>
      </section>
      <section className="work_s4">
        <div className="s4-v1">
          <Work_video main_video={comerciales[12].video} video_id={comerciales[12].id} video_description={comerciales[12].description}/>
        </div>
        <div className="s4-v2">
          <Work_video main_video={comerciales[13].video} video_id={comerciales[13].id} video_description={comerciales[13].description}/>
        </div>
        <div className="s4-v3">
          <Work_video main_video={comerciales[14].video} video_id={comerciales[14].id} video_description={comerciales[14].description}/>
        </div>
      </section>
      <section className="work_s5">
        <div className="s5-v1">
          <Work_video main_video={comerciales[15].video} video_id={comerciales[15].id} video_description={comerciales[15].description}/>
        </div>
      </section>
    </>
  );
};

export default Work_section_1;
