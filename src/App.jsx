import { Header } from "./components/Header.jsx";
import { Win } from "./components/Win.jsx";

import { Main } from "./components/Main.jsx";

export function App() {
  return (
    <>
      <Header />
      <main>
        <Win />

        <Main />
      </main>
    </>
  );
}
