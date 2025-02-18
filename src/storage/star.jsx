export function Star(props) {
  return (
    <button onClick={props.favorite} className="favorite-button">
      <img
        className="star-icon"
        src={
          props.isFavorite
            ? "../Images/star-filled.png"
            : "../Images/star-empty.png"
        }
        alt={props.isFavorite ? "filled star icon" : "empty star icon"}
        aria-label={
          props.isFavorite ? "Remove from the favorites" : "Add to favorites"
        }
        aria-pressed={props.isFavorite}
      />
    </button>
  );
}
