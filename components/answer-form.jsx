//example onChange e => setUserAnswer(e.target.value)

const AnswerForm = ({ onSubmit, value, onChange, submitKey, textKey }) => {
    return (
        <div>
        <form onSubmit={onSubmit}>
            <input
                // key={textKey} 
                disabled={false}
                type="text"
                name="user-answers"
                placeholder="Enter your answers"
                value={value}
                onChange={onChange}
            />
            <input 
                // key={submitKey}
                disabled={false}
                type="submit" 
                value="Submit answers"
            />
        </form>
    </div>    
    )
}

export default AnswerForm