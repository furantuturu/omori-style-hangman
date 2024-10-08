import { useState, useEffect } from 'react'

type Definition = {
    definition: string
}

type WordMeaning = {
    partOfSpeech: string
    definitions: Definition[]
}

export default function useGetWordMeanings(wordToGuess: string) {
    const [wordMeanings, setWordMeanings] = useState<WordMeaning[]>([])

    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal

        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordToGuess}`, { signal })
            .then(res => res.json())
            .then(data => {
                setWordMeanings(data[0].meanings)
            }).catch(err => {
                if (err.name === "AbortError") return console.log("Cancelled Request")
            })

        return () => {
            controller.abort()
        }
    }, [wordToGuess])

    return wordMeanings
}
