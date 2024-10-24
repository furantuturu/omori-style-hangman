import { useRef } from "react"
import useGetWordMeanings from "./assets/custom-hooks/useGetWordMeanings"
import './assets/css/modals.css'

type WordDefinitionModalProp = {
    wordToGuess: string
}

function WordDefinitionModal({ wordToGuess }: Readonly<WordDefinitionModalProp>) {
    const modalRef = useRef<HTMLDialogElement>(null)
    const wordMeanings = useGetWordMeanings(wordToGuess)

    function handleShowModal() {
        modalRef.current?.showModal()
    }

    function handleCloseModal() {
        modalRef.current?.close()
    }

    return (
        <>
            <button
                onClick={handleShowModal}
                className="word-definition-modal-btn"
            >
                Check Definition
            </button>
            <dialog
                onClick={handleCloseModal}
                className="modal word-definition-modal"
                ref={modalRef}
            >
                {
                    wordMeanings.map(wordMeaning => {
                        return (
                            <div key={wordMeaning.partOfSpeech} >
                                <h3>{wordMeaning.partOfSpeech}</h3>
                                <p>{wordMeaning.definitions[0].definition}</p>
                                <p>{wordMeaning.definitions[1]?.definition}</p>
                            </div>
                        )
                    })
                }
                <hr />
                <p>Click anywhere to close</p>
            </dialog>
        </>
    )
}

export default WordDefinitionModal