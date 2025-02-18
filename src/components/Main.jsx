import { useEffect, useState } from "react";
import { languagesData } from "../data/languages-data.js";
import { Words } from "./Words.jsx";
import { keyboardData } from "../data/keyboard-data.js";
export function Main() {
  let [words, setWords] = useState("react");
  let [guessWord, setGuessWord] = useState([]);
  let [trueGuess, setTrueGuess] = useState([]);
  let [falseGuess, setFalseGuess] = useState([]);

  function createLanguages() {
    return languagesData.map((language, index) => {
      return (
        <span
          className={wrongGuessCount >= index + 1 ? "erased-language" : ""}
          key={crypto.randomUUID()}
          style={{
            backgroundColor: language.backgroundColor,
            color: language.color,
          }}
        >
          {language.name}
        </span>
      );
    });
  }

  function createWords() {
    let characters = words.split("");
    return characters.map((word) => {
      return (
        <Words trueGuess={trueGuess} key={crypto.randomUUID()} words={word} />
      );
    });
  }

  function checkTrueGuess() {
    guessWord.forEach((guess) => {
      if (words.split("").includes(guess.toLowerCase())) {
        if (!trueGuess.includes(guess)) {
          setTrueGuess((prevGuess) => {
            return (prevGuess = [...prevGuess, guess]);
          });
        }
      }
    });
  }

  function checkFalseGuess() {
    guessWord.forEach((guess) => {
      if (!words.split("").includes(guess.toLowerCase())) {
        if (!falseGuess.includes(guess)) {
          setFalseGuess((prevGuess) => {
            return (prevGuess = [...prevGuess, guess]);
          });
        }
      }
    });
  }

  checkTrueGuess();

  checkFalseGuess();

  function clickBoard(key) {
    setGuessWord((prevGuess) => {
      if (prevGuess.includes(key)) {
        return prevGuess;
      } else {
        return (prevGuess = [...prevGuess, key]);
      }
    });
  }

  function declareClassName(word) {
    if (trueGuess.includes(word)) {
      return {
        backgroundColor: "green",
      };
    } else if (falseGuess.includes(word)) {
      return {
        backgroundColor: "red",
      };
    }
  }

  function createKeyboard() {
    return keyboardData.map((word) => {
      if (word === "U") {
        return (
          <button
            style={declareClassName(word)}
            onClick={() => {
              clickBoard(word);
            }}
            className="u-con"
            key={crypto.randomUUID()}
          >
            {word}
          </button>
        );
      } else {
        return (
          <button
            style={declareClassName(word)}
            onClick={() => {
              clickBoard(word);
            }}
            key={crypto.randomUUID()}
          >
            {word}
          </button>
        );
      }
    });
  }

  let wrongGuessCount = falseGuess.length;
  console.log(wrongGuessCount);

  return (
    <>
      <section className="languages-section">{createLanguages()}</section>
      <section className="typing-section">{createWords()}</section>

      <section className="keyboard-section">{createKeyboard()}</section>
      <div className="button-con">
        <button className="new-game-button">New Game</button>
      </div>
    </>
  );
}
