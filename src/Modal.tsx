import { useEffect, useRef } from "react"
import './assets/css/Modal.css'

type ModalProp = {
    isWin: boolean,
    isLose: boolean,
    getWord: () => string,
    setGuessedLetters: React.Dispatch<React.SetStateAction<string[]>>,
    setWordToGuess: React.Dispatch<React.SetStateAction<string>>,
}

function Modal({ isWin, isLose, setGuessedLetters, getWord, setWordToGuess }: ModalProp) {
    const modalRef = useRef<HTMLDialogElement>(null)

    useEffect(() => {
        modalRef.current?.showModal()
    }, [])

    function handleCloseModal() {
        setGuessedLetters([])
        setWordToGuess(getWord())
        modalRef.current?.close()
    }

    return (
        <dialog className="modal" ref={modalRef}>
            <h1>
                {isWin && "You have guessed the word!"}
                {isLose && "You failed to guess the word..."}
            </h1>
            <button onClick={handleCloseModal}>Restart</button>
        </dialog>
    )
}

export default Modal