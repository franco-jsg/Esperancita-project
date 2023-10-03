import video from '../../assets/videos/example.mp4';

const Section_1 = () => {
  return (
    <section className="section_1">
      <video autoPlay muted loop width="100%">
        <source src={video} />
      </video>
      <div className="section_1__info container">
        <p className="section_1__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
          voluptate iusto saepe aperiam. Iure at, quam voluptas repellendus
          aspernatur esse accusantium deleniti dolor minus. Nihil reiciendis
          nostrum tempore perferendis nemo.
        </p>
        <img src="" alt="" className="section_1__img" />
      </div>
    </section>
  );
};

export default Section_1;
