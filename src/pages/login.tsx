import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { Container, Row } from 'react-bootstrap'

const Login: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Login</title>
            </Head>

            <aside className="container">
                <div className="row">
                    <Image
                        src="/src/assets/analyze-1.jpg"
                        alt="Picture of the author"
                        width="350px"
                        height="300px"
                    />
                </div>
            </aside>
        </div>
    )
}

export default Login
