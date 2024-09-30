import { useCallback, useEffect, useState } from "react";
import HangmanModel from "./HangmanModel";
import HangmanWord from "./HangmanWord";
import words from './wordlist.json'
import "./assets/css/App.css";

function App() {
  const [wordToGuess, setwordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter)) return

    setGuessedLetters(prevLetter => [...prevLetter, letter])
  }, [guessedLetters])

  useEffect(() => {
    const handleKeyTrigger = (e: KeyboardEvent) => {
      const key = e.key
      if (!key.match(/^[a-z]$/)) return

      addGuessedLetter(key)
    }

    document.addEventListener('keypress', handleKeyTrigger)

    return () => {
      document.removeEventListener('keypress', handleKeyTrigger)
    }
  }, [guessedLetters])

  return (
    <div className="container">
      <HangmanModel />
      <HangmanWord wordToGuess={wordToGuess} guessedLetters={guessedLetters} />
    </div>
  )
}

export default App