import { useState } from "react";
import "./styles.css";

const flagDictionary = {
  "🇨🇦": "Canada",
  "🇧🇷": "Brazil",
  "🇮🇳": "India",
  "🇿🇦": "South Africa",
  "🇵🇰": "Pakistan",
  "🇵🇹": "Portugal",
  "🇬🇧": "United Kingdom",
  "🇺🇸": "United States of America"
};

var flagsWeKnow = Object.keys(flagDictionary); //converting object to array

export default function App() {
  const [answer, setAnswer] = useState("");

  function flagInputHandler(event) {
    var userInput = event.target.value;
    var answer = flagDictionary[userInput];

    if (answer === undefined) {
      answer = "We don't have this in our database";
    }

    setAnswer(answer);
    // console.log(answer);
  }

  function flagClickHandler(flag) {
    var answer = flagDictionary[flag];
    setAnswer(answer);
  }

  return (
    <div className="App">
      <h1> Flag Interpreter </h1>
      <input
        onChange={flagInputHandler}
        placeholder="Enter a flag emoticon"
      ></input>
      <h2> {answer} </h2>
      <h3> Flags we know </h3>
      {flagsWeKnow.map(function (flag) {
        return (
          <span
            onClick={() => flagClickHandler(flag)}
            style={{ fontSize: "3rem", cursor: "pointer", padding: "2rem" }}
            key={flag}
          >
            {flag}
          </span>
        );
      })}
    </div>
  );
}
