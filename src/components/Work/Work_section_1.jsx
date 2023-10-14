import main_video from "../../assets/videos/168811 (1080p).mp4";
import main_video2 from "../../assets/videos/runner_-_10809 (540p).mp4";
import Work_video from "../Work/Work_video";

const Work_section_1 = () => {
  return (
    <>
      <div className="work_container">
        <section className="work_s1">
          <div className="s1-v1">
            <Work_video main_video={main_video} />
          </div>
          <div className="s1-v2">
            <Work_video main_video={main_video2} />
          </div>
          <div className="s1-v3">Video 3</div>
          <div className="s1-v4">Video 4</div>
        </section>
        <section className="work_s2">
          <div className="s2-v1">Video 1</div>
          <div className="s2-v2">Video 2</div>
          <div className="s2-v3">Video 3</div>
          <div className="s2-v4">Video 4</div>
          <div className="s2-v5">Video 5</div>
        </section>
        <section className="work_s3">
          <div className="s3-v1">Video 1</div>
          <div className="s3-v2">Video 2</div>
          <div className="s3-v3">Video 3</div>
        </section>
        <section className="work_s4">
          <div className="s4-v1">Video 1</div>
          <div className="s4-v2">Video 2</div>
          <div className="s4-v3">Video 3</div>
        </section>
        <section className="work_s5">
          <div className="s5-v1">Video 1</div>
        </section>
      </div>
    </>
  );
};

export default Work_section_1;
