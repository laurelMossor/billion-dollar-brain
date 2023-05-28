import Typewriter from 'typewriter-effect'

const SpeechBox = ({children, callFunction}) => {

    return (
        <div className="ba w-70 vh-25">
            <div className="pa2">
                <Typewriter
                    options={{
                        strings: children,
                        delay: 45,
                        autoStart: true,
                        loop: false
                    }}
                    onInit={(typewriter) => {
                        typewriter
                        .callFunction(callFunction)
                    }}
                />
                
            </div>
        </div>
    )
}

export default SpeechBox