import { useState, useCallback } from 'react'
import NameTag from '../components/name-tag'
import SpeechBox from '../components/speech-box'
import { callOpenAI } from '../utils/callOpenAI'
import RouterButton from '../components/router-button'
import { useStore } from '../utils/useStore'
import { generateGamePlacesEnum } from '../utils/game'

    // func to evaluate which question to ask, and when to move to new q
        // looks at textComplete and isAnswered to update state
    // func to update games State
    const GAME_PLACES = generateGamePlacesEnum(2)

export default function Game() {
    const gameStates = useStore((state) => state);
    const [gamePlace, setGamePlace] = useState(GAME_PLACES.INTRO);
    const [gameState, setGameState] = useState(gameStates[gamePlace]);
    const [userAnswer, setUserAnswer] = useState("");
    const [result, setResult] = useState()
    const updateTextCompleted = useStore((state) => state.updateTextCompleted)
    const updateIsAnswered = useStore((state) => state.updateIsAnswered)
    
    const SpeechBoxCallFunction = useCallback(() => {
        updateTextCompleted(gamePlace)
    }, [gamePlace, updateTextCompleted])

    const onAnswerSubmit = (event) => {
        event.preventDefault()
        callOpenAI(userAnswer)
    }
    console.log({gameStates})
    console.log({gamePlace})
    console.log({gameState})
    return (
        <div>
            <NameTag>Alloy Jones</NameTag>
            <SpeechBox callFunction={SpeechBoxCallFunction}>
                {gameState && gameState.hostText}
            </SpeechBox>
            <NameTag>Player</NameTag>
            <div name="answer-box" className="ba vh-25 w-70">
                <button
                    onSubmit={e => e.preventDefault()}>
                    Let's go!
                </button>
            </div>
            <button onClick={() => console.log(gameStates)}>State?</button>
            <RouterButton location={'/'}>Home</RouterButton>
        </div>
    )
}