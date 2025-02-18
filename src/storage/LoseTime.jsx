export function LoseTime(props) {
  return (
    <>
      <section className="lost-section">
        <div className="scr-only" aria-live="polite">
          You have lost!!! Your time is up. Press "New Game" to try again.
        </div>
        <h1 className="lost-emoji">🫣</h1>
        <h1 className="lost-header">You Have Lost!!!!</h1>
        <p className="lost-explanation">
          Your time is up click "New Game" to try again.
        </p>
        <button
          aria-label="starts a new game"
          onClick={props.switchLose}
          className="roll-button"
        >
          New Game
        </button>
      </section>
    </>
  );
}
