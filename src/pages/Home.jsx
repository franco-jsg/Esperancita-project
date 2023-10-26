import Main_social_icons from "../components/Main_social_icons";
import Section_1 from "../components/Home/Section_1";
import Section_2 from "../components/Home/Section_2";
import { useEffect, useState } from "react";

import data from "../data/comerciales.js";

const Home = () => {

  const [mainVideo, setMainVideo] = useState(data[0]);

  useEffect(() => {
    console.log(mainVideo);
  }, [mainVideo]);

  return (
    <>
      <div className="home_container">
        <Main_social_icons />
        <Section_1
          mainVideo={mainVideo.video}
          mainDescription={mainVideo.description}
        />
        <Section_2 mainVideo={mainVideo} setMainVideo={setMainVideo} />
      </div>
    </>
  );
};

export default Home;
