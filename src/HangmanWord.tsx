import "./assets/css/HangmanWord.css";

type HangmanWordProp = {
    wordToGuess: string
}

function HangmanWord({ wordToGuess }: HangmanWordProp) {

    return (
        <div className="hangman-word-container">
            {wordToGuess.split("").map((letter, idx) => {
                return (
                    <span
                        key={idx}
                        className="letter-styles"
                    >
                        <span
                            style={{ visibility: 'hidden' }}
                        >
                            {letter}
                        </span>
                    </span>

                )
            })}
        </div>
    )
}

export default HangmanWord