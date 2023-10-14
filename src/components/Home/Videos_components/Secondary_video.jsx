
const Secondary_video = ({secondary_category,secondary_desc,secondary_year,secondary_video, LogoSecondary, CubeSecondary}) => {
  return (
    <div className="secondary_video">
      <video autoPlay muted loop width="100%">
        <source src={secondary_video} />
      </video>
      <div className="secondary-video_text_container">
        <p className="video-clasification">{secondary_category}</p>
        <img src={LogoSecondary} alt="" />

        <h4 className="secondary_video__text">
          {secondary_desc}
        </h4>

        <div className="secondary_video__year">
          <img src={CubeSecondary} alt="" />
          <p>{secondary_year}</p>
        </div>
      </div>
    </div>
  );
};

export default Secondary_video
