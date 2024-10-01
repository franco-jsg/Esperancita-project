import { useEsperancitaContext } from "../../context/Context";


const Categories_list_home = () => {
    const {setListItemState, workRef, setRenderListCategories} = useEsperancitaContext()

    const handleClick = (e) => {
    
        if(e === 'Work') {
          setListItemState('All')
        } else if (e === '3D') {
          setListItemState('3D')
        } else if (e === 'Simulation') {
          setListItemState('Simulation')
        } else if (e === 'Compo') {
          setListItemState('Compo')
        } else if (e === 'Matte') {
          setListItemState('Matte')
        }
        
        setRenderListCategories(true)
        // workRef.current?.scrollIntoView({behavior: 'smooth'})  
      }
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
      <li>
        <button onClick={() => handleClick("Matte")}>Matte</button>
      </li>
    </ul>
  );
};

export default Categories_list_home;
