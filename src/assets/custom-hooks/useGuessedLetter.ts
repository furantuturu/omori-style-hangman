import { useState, useEffect, useCallback } from 'react'

export default function useGuessedLetter(wordToGuess: string) {
    const [guessedLetters, setGuessedLetters] = useState<string[]>([])

    const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))

    const isWin = wordToGuess.split('').every(letter => guessedLetters.includes(letter))
    const isLose = incorrectLetters.length >= 6

    const addGuessedLetter = useCallback((letter: string) => {
        if (guessedLetters.includes(letter) || isLose || isWin) return

        setGuessedLetters(prevLetter => [...prevLetter, letter])
    }, [guessedLetters])

    useEffect(() => {
        const handleKeyTrigger = (e: KeyboardEvent) => {
            const key = e.key
            if (!key.match(/^[a-z]$/)) return

            addGuessedLetter(key)
        }

        document.addEventListener('keypress', handleKeyTrigger)

        return () => {
            document.removeEventListener('keypress', handleKeyTrigger)
        }
    }, [guessedLetters])

    return { guessedLetters, incorrectLetters, isWin, isLose }
}
