import { useEsperancitaContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";

const Categories_list_about = () => {
  const navigate = useNavigate();
  const { setListItemState, lenguage, workRef } = useEsperancitaContext();

  const handleClick = (e) => {

    if (lenguage === "ES") {
        navigate("/");
      } else {
        navigate("/en");
      }

    if (e === "Work") {
      setListItemState("All");
    } else if (e === "3D") {
      setListItemState("3D");
    } else if (e === "Simulation") {
      setListItemState("Simulation");
    } else if (e === "Compo") {
      setListItemState("Compo");
    }


    setTimeout(workRef.current?.scrollIntoView({ behavior: "smooth" }), 500);

};


  return (
    <ul className="footer__projects">
      <li>
        <button onClick={() => handleClick("Work")}>Work</button>
      </li>
      <li>
        <button onClick={() => handleClick("3D")}>3D</button>
      </li>
      <li>
        <button onClick={() => handleClick("Simulation")}>Simulation</button>
      </li>
      <li>
        <button onClick={() => handleClick("Compo")}>Compo</button>
      </li>
    </ul>
  );
};

export default Categories_list_about;
