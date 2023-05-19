import Head from "next/head"

const Layout = ({children}) => {
    return (
        <div>
            <Head>
                <link rel="stylesheet" href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css"/>
            </Head>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout