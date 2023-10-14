const List_button = ({categoryName, listItemState, setListItemState }) => {
  function handleClick() {
    setListItemState(categoryName);
  };

  let activeToggleState = listItemState === categoryName ? " active-button" : null;

  return <button className={`${activeToggleState}`} onClick={handleClick}>{categoryName}</button>;
};

export default List_button;
