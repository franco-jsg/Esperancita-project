
const Main_video = ({ main_video, Logo, Cube }) => {
  return (
    <div className="main_video">
      <video autoPlay muted loop width="100%">
        <source src={main_video} />
      </video>
      <div className="video_text_container">
        <p className="video-clasification">3D</p>
        <img src={Logo} alt="" />

        <h3 className="main_video__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          maiores.
        </h3>

        <div className="main_video__year">
          <img src={Cube} alt="" />
          <p>2023</p>
        </div>
      </div>
    </div>
  );
};

export default Main_video;
