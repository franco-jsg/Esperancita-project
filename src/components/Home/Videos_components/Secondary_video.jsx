const Secondary_video = ({secondary_video}) => {
  return (
    <div className="secondary_video">
      <video autoPlay muted loop width="100%">
        <source src={secondary_video} />
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

export default Secondary_video
