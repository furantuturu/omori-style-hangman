type HangmanModelProp = {
    incorrectLettersLength: number
}

function HangmanModel({ incorrectLettersLength }: HangmanModelProp) {
    return (
        <div style={{ border: '5px solid white' }}>
            {incorrectLettersLength <= 6 &&
                (<img src={`/omori-hangman-imgs/${incorrectLettersLength}-attempt.svg`} />)
            }
        </div>
    )
}

export default HangmanModel