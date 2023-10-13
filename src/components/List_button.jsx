const List_button = ({ listItemState, setListItemState }) => {
  function handleClick() {
    setListItemState(listItemState => !listItemState);
  };

  let activeToggleState = listItemState ? " active" : null;

  return <button className={`${activeToggleState}`} onClick={handleClick}>3D</button>;
};

export default List_button;
