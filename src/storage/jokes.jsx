import { jokesData } from "../data/jokes-data.js";

export function Joke(props) {
  let jokes = jokesData.map((joke) => {
    return (
      <>
        <h2>{joke.setup}</h2>
        <h2>{joke.punchline}</h2>
      </>
    );
  });

  return jokes;
}
