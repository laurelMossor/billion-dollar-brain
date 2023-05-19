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
                <title>Title</title>
            </Head>
            <div className="bg-red">
                Hello
            </div>
            <button onClick={handleClick}>
                Play
            </button>
        </div>
    )
}