import { useState } from "react";
import HangmanModel from "./HangmanModel";
import HangmanWord from "./HangmanWord";
import words from './wordlist.json'
import "./assets/css/App.css";

function App() {
  const [wordToGuess, setwordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })

  return (
    <div className="container">
      <HangmanModel />
      <HangmanWord wordToGuess={wordToGuess} />
    </div>
  )
}

export default App