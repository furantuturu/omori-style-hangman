import { useEffect, useState } from "react"
import './assets/css/dropdowns.css'

type WordDefinition = {
    wordToGuess: string
}

type WordMeaning = {
    partOfSpeech: string
    definitions: Definition[]
}

type Definition = {
    definition: string
}

function WordDefinition({ wordToGuess }: WordDefinition) {
    const [wordMeanings, setWordMeanings] = useState<WordMeaning[]>([])

    useEffect(() => {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordToGuess}`)
            .then(res => res.json())
            .then(data => {
                setWordMeanings(data[0].meanings)
            })
    }, [wordToGuess])

    return (
        <details className="word-definition-dropdown" open>
            <summary>Definition of the word</summary>
            {
                wordMeanings.map((wordMeaning) => {
                    return (
                        <div >
                            <h3>{wordMeaning.partOfSpeech}</h3>
                            {wordMeaning.definitions.map(definition => {
                                return <p>{definition.definition}</p>
                            })}
                        </div>
                    )
                })
            }
        </details>
    )
}

export default WordDefinition