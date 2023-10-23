const Work_video = ({main_video}) => {
  return (
    <div className="work__video">
      <video autoPlay muted loop width="100%">
        <source src={main_video}/>
      </video>
      <p className="work__video-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, error.</p>
    </div>
  );
};

export default Work_video;
