export function Dice(props) {
  return (
    <>
      <button
        aria-label={`This button is the dice you wan to hold`}
        aria-pressed={props.isHeld}
        onClick={props.funcDice}
        style={{
          backgroundColor: props.isHeld ? "lightgreen" : "white",
        }}
      >
        {props.value}
      </button>
    </>
  );
}
