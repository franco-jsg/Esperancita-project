import main_video1 from "../../assets/videos/3d/1.SECRET_TVC_20_LIMPIAVIDRIOS_M.mp4";
import main_video2 from "../../assets/videos/compo/secret.mp4";
import main_video3 from "../../assets/videos/compo/Bancoppel 30s V1_R1_Luciernagas_Aprobada_23052022.mp4";
import main_video4 from "../../assets/videos/compo/DIDI CO RELANZAMIENTO DIDIMÁS LOOP RATCHET 16X9 V02.mp4";
import main_video5 from "../../assets/videos/reels/ESPERANCITA_REEL_2023_v12.mp4";
import main_video6 from "../../assets/videos/reels/REEL_PANTALLAS_v03.mp4";
import main_video7 from "../../assets/videos/simulacion/Aeromexico_Beso_Master_40s_120523.mp4";
import main_video8 from "../../assets/videos/simulacion/BELIGHT 020322 MASTER 20 COCO CUADRADO.mp4";
import main_video9 from "../../assets/videos/simulacion/BELIGHT 020322 MASTER 20 TORONJA CUADRADO.mp4";
import main_video10 from "../../assets/videos/simulacion/El legado Honda.mp4";
import main_video11 from "../../assets/videos/simulacion/Esto es Nissan Kicks e-POWER I Electrizante con tu vida.mp4";
import main_video12 from "../../assets/videos/simulacion/water-spring.mp4";

import Work_video from "../Work/Work_video";

const Work_section_1 = () => {
  return (
    <>
      <div className="work_container">
        <section className="work_s1">
          <div className="s1-v1">
            <Work_video main_video={main_video1} />
          </div>
          <div className="s1-v2">
            <Work_video main_video={main_video2} />
          </div>
          <div className="s1-v3">
            <Work_video main_video={main_video3} />
          </div>
          <div className="s1-v4">
            <Work_video main_video={main_video4} />
          </div>
        </section>
        <section className="work_s2">
          <div className="s2-v1">
            <Work_video main_video={main_video5} />
          </div>
          <div className="s2-v2">
            <Work_video main_video={main_video6} />
          </div>
          <div className="s2-v3">
            <Work_video main_video={main_video7} />
          </div>
          <div className="s2-v4">
            <Work_video main_video={main_video8} />
          </div>
          <div className="s2-v5">
            <Work_video main_video={main_video9} />
          </div>
        </section>
        <section className="work_s3">
          <div className="s3-v1">
            <Work_video main_video={main_video10} />
          </div>
          <div className="s3-v2">
            <Work_video main_video={main_video11} />
          </div>
          <div className="s3-v3">
            <Work_video main_video={main_video12} />
          </div>
        </section>
        <section className="work_s4">
          <div className="s4-v1">
            <Work_video main_video={main_video1} />
          </div>
          <div className="s4-v2">
            <Work_video main_video={main_video2} />
          </div>
          <div className="s4-v3">
            <Work_video main_video={main_video3} />
          </div>
        </section>
        <section className="work_s5">
          <div className="s5-v1">
            <Work_video main_video={main_video4} />
          </div>
        </section>
      </div>
    </>
  );
};

export default Work_section_1;
