import Work_section_1 from "../components/Work/Work_section_1";

const Work_grid = () => {
  return (
    <section className="work">
      <div className=" container">
        <h1>Work</h1>
        <div>----------</div>
        <div>
          <ul className="work__list">
            <li>3D </li>
            <li>| Simulación </li>
            <li>| Compo </li>
            <li>| All</li>
          </ul>
          <div className="work__videos">
              <Work_section_1 />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work_grid;
