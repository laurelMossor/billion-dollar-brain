export async function callOpenAI(userAnswer) {
    // this is for a button 

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