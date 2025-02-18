export function Words(props) {
  return (
    <span>
      {props.trueGuess.includes(props.words.toUpperCase())
        ? props.words.toUpperCase()
        : ""}
    </span>
  );
}
