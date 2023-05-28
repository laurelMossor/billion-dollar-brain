import  { useRouter } from 'next/router'

const RouterButton = ({ children, location }) => {
    const router = useRouter()
    const handleHomeClick= () => {
        router.push(location)
    }
    return (
        <div className="pt6">
            <button 
                onClick={handleHomeClick}>
                {children}
            </button>
        </div>
    )
}

export default RouterButton