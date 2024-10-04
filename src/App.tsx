import { lazy, Suspense, useState } from 'react'
import './assets/css/App.css'

const MainGame = lazy(() => import('./MainGame'))

function App() {
    const [isStart, setIsStart] = useState(false)

    function handleStart() {
        setIsStart(true)
    }

    return (
        <>
            {isStart ?
                <>
                    <Suspense fallback={<h1>Game Loading...</h1>}>
                        <MainGame />
                    </Suspense>
                </>

                :
                <>
                    <div className="bg-image"></div>
                    <div className="intro">
                        <h1>Start guessing by pressing any alphabetical key on your keyboard</h1>
                        <p>You can check the "Check Definition" on the top right side to give you the idea about the word being guessed</p>
                        <p>There is also a "Wrong Letters" dropdown on the top left side to indicate letters that were not guessed right</p>
                        <hr />
                        <button onClick={handleStart}>Click here to start</button>
                    </div>
                </>
            }
        </>
    )
}

export default App