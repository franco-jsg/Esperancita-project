import { useEsperancitaContext } from "../context/Context";

const List_button = ({categoryName}) => {

  const {
    listItemState,
    setListItemState

  } = useEsperancitaContext()

  function handleClick() {
    setListItemState(categoryName);
  };

  let activeToggleState = listItemState === categoryName ? " active-button" : null;

  return <button className={`${activeToggleState}`} onClick={handleClick}>{categoryName}</button>;
};

export default List_button;
