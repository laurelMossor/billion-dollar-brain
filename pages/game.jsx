import  { useRouter } from 'next/router'


export default function Game() {
    const router = useRouter()
    const handleClick= () => {
        router.push('/')
    }
    return (
        <div>
            This is the game 
            <div className="bg-red">
                words
            </div>
            <button onClick={handleClick}>
                Home
            </button>
        </div>
    )
}