import data from '../../../data/comerciales.js'

const Secondary_video = ({video_id, secondary_category,secondary_desc,secondary_year,secondary_video, LogoSecondary, CubeSecondary, setMainVideo}) => {

  function handleClick() {
    setMainVideo(data[video_id])
  }

  return (
    <div className="secondary_video">
      <video autoPlay muted loop width="100%" onClick={handleClick}>
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
