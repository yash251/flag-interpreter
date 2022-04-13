import { useState } from "react";
import "./styles.css";

const flagDictionary = {  //database
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
  const [answer, setAnswer] = useState(""); //useState is a Hook that allows you to have state variables in functional components.

  function flagInputHandler(event) {  //entering emoticon in search bar
    var userInput = event.target.value;  //getting the input
    var answer = flagDictionary[userInput]; //checking the dictionary for the answer

    if (answer === undefined) {
      answer = "We don't have this in our database";  //default
    }

    setAnswer(answer);
  }

  function flagClickHandler(flag) {  //function for clicking on known flags
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
      <h2> {answer} </h2>  {/* displaying answer */}
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
