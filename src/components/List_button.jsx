const List_button = ({categoryName, listItemState, setListItemState }) => {
  function handleClick() {
    console.log(listItemState)
    setListItemState(categoryName);
    console.log(listItemState)
  };

  let activeToggleState = listItemState === categoryName ? " active-button" : null;

  return <button className={`${activeToggleState}`} onClick={handleClick}>{categoryName}</button>;
};

export default List_button;
