import { useEffect, useRef } from "react"
import './assets/css/modals.css'

type ModalProp = {
    isWin: boolean,
    isLose: boolean,
    getWord: () => string,
    setGuessedLetters: React.Dispatch<React.SetStateAction<string[]>>,
    setWordToGuess: React.Dispatch<React.SetStateAction<string>>,
}

function ResultModal({ isWin, isLose, setGuessedLetters, getWord, setWordToGuess }: Readonly<ModalProp>) {
    const modalRef = useRef<HTMLDialogElement>(null)

    useEffect(() => {
        modalRef.current?.showModal()
    }, [])

    function handleRestartModal() {
        setGuessedLetters([])
        setWordToGuess(getWord())
        modalRef.current?.close()
    }

    return (
        <dialog className="modal result-modal" ref={modalRef}>
            <h1>
                {isWin && "You guessed the word!"}
                {isLose && "You failed to guess the word..."}
            </h1>
            <audio src={`/audios/${isWin ? 'win' : 'lose'}SFX.wav`} autoPlay />
            <button onClick={handleRestartModal}>Restart</button>
        </dialog>
    )
}

export default ResultModal