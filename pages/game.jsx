import  { useRouter } from 'next/router'
import { useState } from 'react'
import NameTag from '../components/name-tag'
import SpeechBox from '../components/speech-box'

export default function Game() {
    const router = useRouter()
    const handleHomeClick= () => {
        router.push('/')
    }
    const [userAnswer, setUserAnswer] = useState("")
    const [result, setResult] = useState()

    async function onAnswerSubmit(event) {
        event.preventDefault()
        try {
            const response = await fetch("/api/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ response: userAnswer})
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
            <div>
                <form onSubmit={onAnswerSubmit}>
                    <input 
                        disabled={false}
                        type="text"
                        name="user-answers"
                        placeholder="Enter your answers"
                        value={userAnswer}
                        onChange={e => setUserAnswer(e.target.value)}
                    />
                    <input 
                        disabled={false}
                        type="submit" 
                        value="Submit answers"
                    />
                </form>
            </div>
            <div className="pt6">
                <button 
                    onClick={handleHomeClick}>
                    Home
                </button>
            </div>
        </div>
    )
}