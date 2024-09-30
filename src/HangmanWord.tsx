import "./assets/css/HangmanWord.css"

type HangmanWordProp = {
    wordToGuess: string,
    guessedLetters: string[]
}

function HangmanWord({ wordToGuess, guessedLetters }: HangmanWordProp) {

    return (
        <div className="hangman-word-container">
            {wordToGuess.split('').map((letter, idx) => {
                return (
                    <span key={idx} className="letter-styles">
                        <img
                            className={guessedLetters.includes(letter) ? 'active' : 'inactive'}
                            src={`/omori-hangman-keys/${letter}.webp`}
                            alt={letter} />
                    </span>
                )
            })}
        </div>
    )
}

export default HangmanWord