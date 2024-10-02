import { lazy, Suspense, useState } from "react";
import useGuessedLetter from "./assets/custom-hooks/useGuessedLetter";
import "./assets/css/App.css";
import getWord from "./assets/helpers/getWord";

const Modal = lazy(() => import('./Modal'))
const HangmanModel = lazy(() => import('./HangmanModel'))
const HangmanWord = lazy(() => import('./HangmanWord'))

function App() {
  const [wordToGuess, setWordToGuess] = useState<string>(getWord())

  const { guessedLetters, setGuessedLetters, incorrectLetters, isWin, isLose } = useGuessedLetter(wordToGuess);

  return (
    <div className="container">
      <h1 style={{ position: 'absolute', top: '10px', left: '10px' }}>Type any alphabetical key</h1>
      <Suspense fallback={<h1>Loading...</h1>}>
        {isWin || isLose ? (
          <Modal
            isWin={isWin}
            isLose={isLose}
            setGuessedLetters={setGuessedLetters}
            getWord={getWord}
            setWordToGuess={setWordToGuess}
          />
        ) : ''
        }
        <HangmanModel incorrectLettersLength={incorrectLetters.length} />
        <HangmanWord
          wordToGuess={wordToGuess}
          guessedLetters={guessedLetters}
          incorrectLettersLength={incorrectLetters.length}
        />
      </Suspense>
    </div>
  )
}

export default App