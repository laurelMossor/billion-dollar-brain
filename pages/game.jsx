import  { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import NameTag from '../components/name-tag'
import SpeechBox from '../components/speech-box'
import PlayerDeck from '../components/player-response-deck'

export default function Game() {
    const router = useRouter()
    const handleHomeClick= () => {
        router.push('/')
    }
    const [userAnswer, setUserAnswer] = useState("")
    const [result, setResult] = useState()
    const sliderElem = document.getElementById("slider")
    console.log(sliderElem)

    // TODO: Bring this out of this file
    async function onAnswerSubmit(event) {
        event.preventDefault()
        try {
            const response = await fetch("/api/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ answer: userAnswer})
            })

            const data = await response.json()
            if (response.status !== 200) {
                throw data.error || new Error(`Request failed with status ${response.status}`)
            }
            setResult(data.result) // TODO: implement
            setUserAnswer("")
        } catch(error) {
            console.error(error)
            alert(error.message)
        }
    }
    return (
        <div>
            <NameTag>Alloy Jones</NameTag>
            <SpeechBox>
                Hello everyone! Welcome to The Billion Dollar Brain. Are you ready to get started?
            </SpeechBox>
            <NameTag>Player</NameTag>
            {/* <div>
                <Slider settings={...settings}>
                    {/* <AnswerForm 
                        textKey={'t1'}
                        submitKey={'s1'}
                        onSubmit={onAnswerSubmit}
                        value={userAnswer}
                        onChange={e => setUserAnswer(e.target.value)}
                    ></AnswerForm> */}
                    {/* <div><h1>2</h1></div>
                    <div><h1>3</h1></div>

                    <div><h1>4</h1></div> */}
                {/* </Slider> */}
            {/* </div> */}
            <PlayerDeck 
                onSubmit={onAnswerSubmit}
                value={userAnswer}
                onChange={e => setUserAnswer(e.target.value)}
            />
            <div className="pt6">
                <button 
                    onClick={handleHomeClick}>
                    Home
                </button>
            </div>
        </div>
    )
}