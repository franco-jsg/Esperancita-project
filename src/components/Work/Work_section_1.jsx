import comerciales from "../../data/comerciales";

import Work_video from "../Work/Work_video";

const Work_section_1 = () => {
  return (
    <>
      <section className="work_s1">
        <Work_video main_video={comerciales[0].video} video_id={comerciales[0].id} video_description={comerciales[0].name} />
        <Work_video main_video={comerciales[1].video} video_id={comerciales[1].id} video_description={comerciales[1].name}/>
        <Work_video main_video={comerciales[2].video} video_id={comerciales[2].id} video_description={comerciales[2].name}/>
        <Work_video main_video={comerciales[3].video} video_id={comerciales[3].id} video_description={comerciales[3].name}/>
        <Work_video main_video={comerciales[4].video} video_id={comerciales[4].id} video_description={comerciales[4].name}/>
        <Work_video main_video={comerciales[5].video} video_id={comerciales[5].id} video_description={comerciales[5].name}/>
        <Work_video main_video={comerciales[6].video} video_id={comerciales[6].id} video_description={comerciales[6].name}/>
        <Work_video main_video={comerciales[7].video} video_id={comerciales[7].id} video_description={comerciales[7].name}/>
        <Work_video main_video={comerciales[8].video} video_id={comerciales[8].id} video_description={comerciales[8].name} />
        <Work_video main_video={comerciales[9].video} video_id={comerciales[9].id} video_description={comerciales[9].name}/>
        <Work_video main_video={comerciales[10].video} video_id={comerciales[10].id} video_description={comerciales[10].name}/>
        <Work_video main_video={comerciales[11].video} video_id={comerciales[11].id} video_description={comerciales[11].name}/>
        <Work_video main_video={comerciales[12].video} video_id={comerciales[12].id} video_description={comerciales[12].name}/>
        <Work_video main_video={comerciales[13].video} video_id={comerciales[13].id} video_description={comerciales[13].name}/>
        <Work_video main_video={comerciales[14].video} video_id={comerciales[14].id} video_description={comerciales[14].name}/>
        <Work_video main_video={comerciales[15].video} video_id={comerciales[15].id} video_description={comerciales[15].name}/>
        <Work_video main_video={comerciales[16].video} video_id={comerciales[16].id} video_description={comerciales[16].name}/>
        <Work_video main_video={comerciales[17].video} video_id={comerciales[17].id} video_description={comerciales[17].name}/>
        <Work_video main_video={comerciales[18].video} video_id={comerciales[18].id} video_description={comerciales[18].name}/>
        <Work_video main_video={comerciales[21].video} video_id={comerciales[21].id} video_description={comerciales[21].name}/>
      </section>
    </>
  );
};

export default Work_section_1;
