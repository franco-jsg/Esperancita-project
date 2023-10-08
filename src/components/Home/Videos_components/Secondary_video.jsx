
const Secondary_video = ({secondary_video, LogoSecondary, CubeSecondary}) => {
  return (
    <div className="secondary_video">
      <video autoPlay muted loop width="100%">
        <source src={secondary_video} />
      </video>
      <div className="secondary-video_text_container">
        <p className="video-clasification">3D</p>
        <img src={LogoSecondary} alt="" />

        <h4 className="secondary_video__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          maiores.
        </h4>

        <div className="secondary_video__year">
          <img src={CubeSecondary} alt="" />
          <p>2023</p>
        </div>
      </div>
    </div>
  );
};

export default Secondary_video
