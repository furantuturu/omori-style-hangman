import { lazy, Suspense, useEffect, useRef, useState } from "react";
import useGuessedLetter from "./assets/custom-hooks/useGuessedLetter";
import getWord from "./assets/helpers/getWord";
import IncorrectLettersDisplay from './IncorrectLettersDisplay';
import WordDefinitionModal from "./WordDefinitionModal";
import HangmanModel from "./HangmanModel";
import "./assets/css/MainGame.css";

const HangmanWord = lazy(() => import('./HangmanWord'))
const ResultModal = lazy(() => import('./ResultModal'))

function MainGame() {
  const [wordToGuess, setWordToGuess] = useState<string>(getWord())

  const { guessedLetters, setGuessedLetters, incorrectLetters, isWin, isLose } = useGuessedLetter(wordToGuess);

  const bgm = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    bgm.current?.play()
  }, [])

  return (
    <div className="container">
      <IncorrectLettersDisplay incorrectLetters={incorrectLetters} />

      <WordDefinitionModal wordToGuess={wordToGuess} />

      <HangmanModel incorrectLettersLength={incorrectLetters.length} />

      <Suspense fallback={<h1>Loading...</h1>}>

        {isWin || isLose ? (
          <ResultModal
            isWin={isWin}
            isLose={isLose}
            setGuessedLetters={setGuessedLetters}
            getWord={getWord}
            setWordToGuess={setWordToGuess}
          />
        ) : ''
        }

        <HangmanWord
          wordToGuess={wordToGuess}
          guessedLetters={guessedLetters}
          incorrectLettersLength={incorrectLetters.length}
        />

      </Suspense>
      <audio src="/audios/bgm(omori-welcomeagain).mp3" ref={bgm} loop></audio>
    </div>
  )
}

export default MainGame