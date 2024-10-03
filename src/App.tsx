import { lazy, Suspense, useState } from "react";
import useGuessedLetter from "./assets/custom-hooks/useGuessedLetter";
import "./assets/css/App.css";
import getWord from "./assets/helpers/getWord";
import IncorrectLettersDisplay from './IncorrectLettersDisplay';
import WordDefinition from "./WordDefinition";

const Modal = lazy(() => import('./Modal'))
const HangmanModel = lazy(() => import('./HangmanModel'))
const HangmanWord = lazy(() => import('./HangmanWord'))

function App() {
  const [wordToGuess, setWordToGuess] = useState<string>(getWord())

  const { guessedLetters, setGuessedLetters, incorrectLetters, isWin, isLose } = useGuessedLetter(wordToGuess);

  return (
    <div className="container">
      <WordDefinition wordToGuess={wordToGuess} />
      <IncorrectLettersDisplay incorrectLetters={incorrectLetters} />
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