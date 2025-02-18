import { Dice } from "./Dice.jsx";
import { LoseTime } from "./LoseTime.jsx";
import { useState, useEffect, useRef } from "react";
import Confetti from "react-confetti";

export function App() {
  let [newDice, setNewDice] = useState(() => createDiceValues());
  console.log(newDice);
  let [confettiWidth, setConfettiWidth] = useState(window.innerWidth);
  let [confettiHeight, setConfettiHeight] = useState(window.innerHeight);
  let [time, setTime] = useState(30);
  let [controlLose, setControlLose] = useState(false);

  function generateRandomNumber() {
    let randomNumber = Math.ceil(Math.random() * 6);
    return randomNumber;
  }

  function hold(id) {
    setNewDice((prevDiceArray) => {
      return prevDiceArray.map((prevDice) => {
        if (prevDice.id === id) {
          return (prevDice = {
            ...prevDice,
            isHeld: !prevDice.isHeld,
          });
        } else {
          return prevDice;
        }
      });
    });
  }

  function createDiceValues() {
    let dices = [
      {
        value: generateRandomNumber(),
        id: crypto.randomUUID(),
        isHeld: false,
      },
      {
        value: generateRandomNumber(),
        id: crypto.randomUUID(),
        isHeld: false,
      },
      {
        value: generateRandomNumber(),
        id: crypto.randomUUID(),
        isHeld: false,
      },
      {
        value: generateRandomNumber(),
        id: crypto.randomUUID(),
        isHeld: false,
      },
      {
        value: generateRandomNumber(),
        id: crypto.randomUUID(),
        isHeld: false,
      },
      {
        value: generateRandomNumber(),
        id: crypto.randomUUID(),
        isHeld: false,
      },
      {
        value: generateRandomNumber(),
        id: crypto.randomUUID(),
        isHeld: false,
      },
      {
        value: generateRandomNumber(),
        id: crypto.randomUUID(),
        isHeld: false,
      },
      {
        value: generateRandomNumber(),
        id: crypto.randomUUID(),
        isHeld: false,
      },
      {
        value: generateRandomNumber(),
        id: crypto.randomUUID(),
        isHeld: false,
      },
    ];
    return dices;
  }

  function createDiceComponents() {
    return newDice.map((number) => {
      return (
        <Dice
          funcDice={() => {
            hold(number.id);
          }}
          key={crypto.randomUUID()}
          value={number.value}
          isHeld={number.isHeld}
        />
      );
    });
  }

  function rollButton() {
    setNewDice((prevDiceArray) => {
      return prevDiceArray.map((prevDice) => {
        if (prevDice.isHeld) {
          return prevDice;
        } else {
          return (prevDice = {
            ...prevDice,
            value: generateRandomNumber(),
          });
        }
      });
    });
  }

  function checkValue() {
    for (let i = 0; i < newDice.length - 1; i++) {
      if (newDice[i].value !== newDice[i + 1].value) {
        return false;
      }
    }
    return true;
  }

  function checkIsHeld() {
    for (let i = 0; i < newDice.length; i++) {
      if (newDice[i].isHeld) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  }

  function newGame() {
    setNewDice(createDiceValues());
    setTime(30);
  }

  useEffect(() => {
    function adjustConfetti() {
      setConfettiWidth(window.innerWidth);
      setConfettiHeight(window.innerHeight);
    }

    if (checkIsHeld() && checkValue()) {
      button.current.focus();
    }

    window.addEventListener("resize", adjustConfetti);

    return () => {
      window.removeEventListener("resize", adjustConfetti);
    };
  }, [checkIsHeld() && checkValue()]);

  let button = useRef(null);

  useEffect(() => {
    if (!(checkValue() && checkIsHeld())) {
      let count = 30;
      let intervalId = setInterval(updateTime, 1000);
      localStorage.setItem("intervalId", JSON.stringify(intervalId));

      function updateTime() {
        count--;
        setTime((prevTime) => {
          return (prevTime = prevTime - 1);
        });
        if (count <= 0) {
          clearInterval(intervalId);
        }
      }
    } else {
      clearInterval(JSON.parse(localStorage.getItem("intervalId")));
      localStorage.removeItem("intervalId");
    }
  }, [checkIsHeld() && checkValue(), controlLose]);

  function setTimer() {
    return (
      <>
        <div>
          00:{time < 10 ? "0" : null}
          {time}
        </div>
      </>
    );
  }

  function switchLose() {
    setControlLose((prevLose) => {
      return (prevLose = !prevLose);
    });
    setNewDice(createDiceValues());
    setTime(30);
  }

  let lostButton = useRef(null);
  return (
    <>
      {checkIsHeld() && checkValue() ? (
        <Confetti width={confettiWidth} height={confettiHeight} gravity={0.1} />
      ) : null}
      {checkIsHeld() && checkValue() ? (
        <div className="scr-only" aria-live="polite">
          Congratulations, you have won. Press "New Game" to start a new game
        </div>
      ) : null}
      <main className="tenzies-main">
        <h1>Tenzies</h1>
        <p>
          Roll until all the dice are the same. Click the dies to freeze its
          current value between each rolls.{" "}
        </p>
        {time > 0 ? null : <LoseTime switchLose={switchLose} reset={newGame} />}
        <div className="dice-con">{createDiceComponents()}</div>
        <button
          ref={button}
          onClick={checkIsHeld() && checkValue() ? newGame : rollButton}
          className="roll-button"
        >
          {checkIsHeld() && checkValue() ? "New Game" : "Roll"}
        </button>
        {setTimer()}
      </main>
    </>
  );
}
