import Head from 'next/head'
import  { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter()
    const handleClick= () => {
        router.push('/game')
    }
    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>
            <div className="">
                Welcome to the Billion Dollar Brain! 
            </div>
            <div className="pt6">
                <button onClick={handleClick}>
                    Play
                </button>
            </div>
        </div>
    )
}