import './assets/css/IncorrectLettersDisplay.css'

type IncorrectLettersDisplayProp = {
    incorrectLetters: string[]
}

function IncorrectLettersDisplay({ incorrectLetters }: Readonly<IncorrectLettersDisplayProp>) {
    return (
        <details className="incorrect-letters-dropdown" open>
            <summary>Wrong Letters</summary>
            <ul>
                {incorrectLetters.map(wrongLetter => {
                    return <li key={wrongLetter}>{wrongLetter.toUpperCase()}</li>
                })}
            </ul>
        </details>
    )
}

export default IncorrectLettersDisplay