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
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordToGuess}`)
            .then(res => res.json())
            .then(data => {
                setWordMeanings(data[0].meanings)
            })
    }, [wordToGuess])

    return wordMeanings
}
