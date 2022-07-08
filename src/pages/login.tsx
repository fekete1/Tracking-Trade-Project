import { Col, Container, Row, SSRProvider } from 'react-bootstrap'
import { FormEvent, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Router from 'next/router'

import { FiLogIn } from 'react-icons/fi'
import { FaUser } from 'react-icons/fa'
import { RiLockPasswordFill } from 'react-icons/ri'
import { AiOutlineEyeInvisible, AiFillEye } from 'react-icons/ai'
import axios from 'axios'

const Login: NextPage = () => {
    const [isHidePassword, setIsHidePassword] = useState(false)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin(event: FormEvent) {
        event?.preventDefault()
        console.log(email, password)

        Router.push('/dashboard')
    }

    const toggleHidePassword = () => {
        setIsHidePassword(isHidePassword => !isHidePassword)
    }

    const options = {
        method: 'GET',
        url: 'https://omni-tracking-web-staging.herokuapp.com/api/auth/session',
        headers: {
            cookie: '__Secure-next-auth.session-token=eyJhbGciOiJIUzUxMiJ9.eyJuYW1lIjoiRGF2aSBWaWxlbGEgZGUgQXJhdWpvIiwiZW1haWwiOiJ0ZXN0ZUBleGFtcGxlLmNvbSIsInN1YiI6ImM5NjgxMWYwLTEzY2QtNGQ0Mi1hMzU0LTA3ZDY2MmE1YTY1OCIsImlkIjoiYzk2ODExZjAtMTNjZC00ZDQyLWEzNTQtMDdkNjYyYTVhNjU4IiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjU3MDg1NjIzLCJleHAiOjE2NTk2Nzc2MjN9.xEm58708XISqtHs-xmBFb52gu-iROsgA7RBmT9DjQ537cKeLjyoypyUigEmESPHG8-454FIYSfe7eIOq_103dg',
            Cookie: '__Host-next-auth.csrf-token=02468976634724029672b24fa1222b9fa5e24d29bf9b731a00d9e511251a2f95%7C19a7a3cf3579b9b65285f90163209372ef872d6d53ab7092122250c3b18fb638; __Secure-next-auth.callback-url=https%3A%2F%2Fomni-tracking-web-staging.herokuapp.com%2Fauth%2FsignIn; __Secure-next-auth.session-token=eyJhbGciOiJIUzUxMiJ9.eyJuYW1lIjoiRGF2aSBWaWxlbGEgZGUgQXJhdWpvIiwiZW1haWwiOiJ0ZXN0ZUBleGFtcGxlLmNvbSIsInN1YiI6ImM5NjgxMWYwLTEzY2QtNGQ0Mi1hMzU0LTA3ZDY2MmE1YTY1OCIsImlkIjoiYzk2ODExZjAtMTNjZC00ZDQyLWEzNTQtMDdkNjYyYTVhNjU4IiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjU2NjEyNjQ3LCJleHAiOjE2NTkyMDQ2NDd9.ij9ZdiMdMZd7FSpjIlbpXaZqnZfSlHv8ABE8ohtBeEwJzy6K3teF5_rG9jxAH1f-5mwEilgNysowpjXSU-tYtw; __Secure-next-auth.callback-url=https%253A%252F%252Fomni-tracking-web-staging.herokuapp.com%252Fauth%252FsignIn; __Host-next-auth.csrf-token=812b962f248d10e2b368057aacd0369388197ce2ca191963f0c96fad324b9b22%257Cb7b92c2cfebd6e6a376a23a13739f2e0cc075cf56512aa85469b8a56ce897a4f; __Secure-next-auth.session-token=eyJhbGciOiJIUzUxMiJ9.eyJuYW1lIjoiRGF2aSBWaWxlbGEgZGUgQXJhdWpvIiwiZW1haWwiOiJ0ZXN0ZUBleGFtcGxlLmNvbSIsInN1YiI6ImM5NjgxMWYwLTEzY2QtNGQ0Mi1hMzU0LTA3ZDY2MmE1YTY1OCIsImlkIjoiYzk2ODExZjAtMTNjZC00ZDQyLWEzNTQtMDdkNjYyYTVhNjU4IiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjU2NjEzMDczLCJleHAiOjE2NTkyMDUwNzN9.z09-xlzehkcmNhWJ44amg3z2C8HDAYKMn6MHrbA22FxOISX6wRvaYFKsUSIGdN5JGr3nntH0lbGc8X54GtqIIw',
        },
        withCredentials: true,
    }

    async function getData() {
        const response = await axios.request(options)
        const data = response.data
        const cookie = response.headers
        console.log(data)
        console.log(cookie)
    }

    getData()

    return (
        <SSRProvider>
            <div>
                <Head>
                    <title>Login</title>
                </Head>

                <Container fluid className="" id="login-main-container">
                    <Row>
                        <Col lg="6" className="d-none d-lg-flex" id="login-aside-section">
                            <div className="login-aside-content">
                                <img src="/assets/analyze-2.jpg" alt="Ilustração de dados" />
                                <div className="login-aside-text">
                                    <strong>Tenha controle dos dados da sua empresa</strong>
                                    <p>Observando precisamente os dados dos seus produtos</p>
                                </div>
                            </div>
                        </Col>

                        <Col lg="6" className="" id="login-auth-section">
                            <h1>Faça login</h1>
                            <p className="separator">Entre em uma conta para continuar</p>

                            <form onSubmit={handleLogin}>
                                <label>
                                    <FaUser size={20} />
                                </label>
                                <input
                                    type="text"
                                    placeholder="login"
                                    name="login"
                                    onChange={event => setEmail(event.target.value)}
                                />

                                <label>
                                    <RiLockPasswordFill size={20} />
                                </label>

                                <div className="password-area">
                                    <input
                                        type={isHidePassword ? 'text' : 'password'}
                                        placeholder="senha"
                                        name="password"
                                        onChange={event => setPassword(event.target.value)}
                                    />

                                    <button type="button" className="btn-hide-password" onClick={toggleHidePassword}>
                                        {isHidePassword ? <AiOutlineEyeInvisible /> : <AiFillEye />}
                                    </button>
                                </div>

                                <button type="submit" className="login-submit">
                                    <FiLogIn style={{ margin: 4 }} />
                                    Entrar
                                </button>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </SSRProvider>
    )
}

export default Login
