import React, { lazy, useState } from "react";
import useGuessedLetter from "./assets/custom-hooks/useGuessedLetter";
import words from './wordlist.json'
import "./assets/css/App.css";

const HangmanModel = lazy(() => import('./HangmanModel'))
const HangmanWord = lazy(() => import('./HangmanWord'))

function App() {
  const [wordToGuess, setwordToGuess] = useState<string>(() => {
    return words[Math.floor(Math.random() * words.length)]
  })

  const { guessedLetters, incorrectLetters, isWin, isLose } = useGuessedLetter(wordToGuess);

  return (
    <div className="container">
      <h1 style={{ position: 'absolute', top: '10px', left: '10px' }}>Type any alphabetical key</h1>
      {isWin &&
        (<dialog open>Winner</dialog>)
      }
      {isLose &&
        (<dialog open>Lose</dialog>)
      }
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <HangmanModel incorrectLettersLength={incorrectLetters.length} />
        <HangmanWord
          wordToGuess={wordToGuess}
          guessedLetters={guessedLetters}
          incorrectLettersLength={incorrectLetters.length}
        />
      </React.Suspense>
    </div>
  )
}

export default App