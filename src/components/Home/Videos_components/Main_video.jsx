
const Main_video = ({main_category,main_desc,main_year, main_video, Logo, Cube }) => {
  return (
    <div className="main_video">
      <video autoPlay muted loop width="100%">
        <source src={main_video} />
      </video>
      <div className="video_text_container">
        <p className="video-clasification">{main_category}</p>
        <img src={Logo} alt="" />

        <h3 className="main_video__text">
          {main_desc}
        </h3>

        <div className="main_video__year">
          <img src={Cube} alt="" />
          <p>{main_year}</p>
        </div>
      </div>
    </div>
  );
};

export default Main_video;
