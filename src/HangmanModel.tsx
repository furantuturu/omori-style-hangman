import { useEffect, useRef } from "react"

type HangmanModelProp = {
    incorrectLettersLength: number
}

function HangmanModel({ incorrectLettersLength }: Readonly<HangmanModelProp>) {
    const sfx = useRef<HTMLAudioElement>(null)

    useEffect(() => {
        if (incorrectLettersLength < 1) return

        sfx.current?.play()
    }, [incorrectLettersLength])

    return (
        <div style={{ border: '5px solid white' }}>
            {incorrectLettersLength <= 6 &&
                (<img src={`/omori-hangman-imgs/${incorrectLettersLength}-attempt.svg`} alt={`hangman-img:${incorrectLettersLength}`} />)
            }
            <audio src="/audios/hangmanModelSFX.wav" ref={sfx}></audio>
        </div>
    )
}

export default HangmanModel