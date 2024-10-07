import "./assets/css/HangmanWord.css"

type HangmanWordProp = {
    wordToGuess: string,
    guessedLetters: string[]
    incorrectLettersLength: number
}

function HangmanWord({ wordToGuess, guessedLetters, incorrectLettersLength }: Readonly<HangmanWordProp>) {

    return (
        <div className="hangman-word-container">
            {wordToGuess.split('').map(letter => {
                const toggleActive = guessedLetters.includes(letter) ? 'active' : 'inactive'
                const toggleReveal = !guessedLetters.includes(letter) && incorrectLettersLength >= 6 ? 'reveal-on-fail' : ''

                return (
                    <span key={letter} className="letter-styles">
                        <img
                            className={`${toggleActive} ${toggleReveal}`}
                            src={`/omori-hangman-keys/${letter}.webp`}
                            alt={letter} />
                    </span>
                )
            })}
        </div>
    )
}

export default HangmanWord