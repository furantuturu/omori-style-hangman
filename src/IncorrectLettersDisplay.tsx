import './assets/css/dropdowns.css'

type IncorrectLettersDisplayProp = {
    incorrectLetters: string[]
}

function IncorrectLettersDisplay({ incorrectLetters }: IncorrectLettersDisplayProp) {
    return (
        <details className="incorrect-letters-dropdown" open>
            <summary>Wrong Letters</summary>
            <ul>
                {incorrectLetters.map((wrongLetter, idx) => {
                    return <li key={idx}>{wrongLetter.toUpperCase()}</li>
                })}
            </ul>
        </details>
    )
}

export default IncorrectLettersDisplay