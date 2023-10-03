
const Main_video = ({main_video}) => {
  return (
    <div className="main_video">
      <video autoPlay muted loop width="100%">
        <source src={main_video} />
      </video>
      <p>3D</p>
      <div>----------</div>
      <div>
        <h3>Titulo del Video</h3>
        <p></p>
      </div>
      <div>
        <img src="" alt="" />
        <p>2023</p>
      </div>
    </div>
  );
};

export default Main_video;
