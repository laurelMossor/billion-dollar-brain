import { useState, useMemo } from 'react'
import NameTag from '../components/name-tag'
import SpeechBox from '../components/speech-box'
import { callOpenAI } from '../utils/callOpenAI'
import RouterButton from '../components/router-button'
import { useStore } from '../utils/useStore'
import { SpeechBoxCallFunction } from '../utils/game'
// function BearCounter() {
//     const bears = useStore((state) => state.bears)
//     return <h1>{bears} around here...</h1>
// }

// const increasePopulation = useStore((state) => state.increasePopulation)


    // func to evaluate which question to ask, and when to move to new q
        // looks at textComplete and isAnswered to update state
    // func to update games State
    // const GAME_STATES = {
    //     intro: 'intro',

    // }

export default function Game() {
    // const [gameStates, setGameStates] = useState(useStore((state) => state.gameStates))
    const getGameStates = () => useStore((state) => state)
    const gameStates = getGameStates()
    // export const inc = () => 
        // useBoundStore.setState((state) => ({ count: state.count + 1 }))

    const [gamePlace, setGamePlace] = useState('intro')
    const [gameState, setGameState] = useState(gameStates.intro)
    const [userAnswer, setUserAnswer] = useState("")
    const [result, setResult] = useState()

    const updateTextCompleted = useStore((state) => state.updateTextCompleted)

    const onAnswerSubmit = (event) => {
        event.preventDefault()
        callOpenAI(userAnswer)
    }

    return (
        <div>
            <NameTag>Alloy Jones</NameTag>
            <SpeechBox callFunction={() => SpeechBoxCallFunction()}>
                {gameState && gameState.hostText}
            </SpeechBox>
            <NameTag>Player</NameTag>
            <div name="answer-box" className="ba vh-25 w-70">
            </div>
            <button onClick={() => console.log(gameStates)}>State?</button>
            <RouterButton location={'/'}>Home</RouterButton>
        </div>
    )
}