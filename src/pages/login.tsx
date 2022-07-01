import type { NextPage } from 'next'
import Head from 'next/head'

import { FiLogIn } from 'react-icons/fi'
import { FaUser } from 'react-icons/fa'
import { RiLockPasswordFill } from 'react-icons/ri'
import { AiOutlineEyeInvisible, AiFillEye } from 'react-icons/ai'

import { Col, Container, Row, SSRProvider } from 'react-bootstrap'
import { ReactNode, useState } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const Login: NextPage = () => {
    const [isHidePassword, setIsHidePassword] = useState(false)

    const toggleHidePassword = () => {
        setIsHidePassword(isHidePassword => !isHidePassword)
    }

    const cookies = {
        '__Host-next-auth.csrf-token': '02468976634724029672b24fa1222b9fa5e24d29bf9b731a00d9e511251a2f95%7C19a7a3cf3579b9b65285f90163209372ef872d6d53ab7092122250c3b18fb638',
        '__Secure-next-auth.callback-url': 'https%3A%2F%2Fomni-tracking-web-staging.herokuapp.com%2Fauth%2FsignIn',
        '__Secure-next-auth.session-token':
            'eyJhbGciOiJIUzUxMiJ9.eyJuYW1lIjoiRGF2aSBWaWxlbGEgZGUgQXJhdWpvIiwiZW1haWwiOiJ0ZXN0ZUBleGFtcGxlLmNvbSIsInN1YiI6ImM5NjgxMWYwLTEzY2QtNGQ0Mi1hMzU0LTA3ZDY2MmE1YTY1OCIsImlkIjoiYzk2ODExZjAtMTNjZC00ZDQyLWEzNTQtMDdkNjYyYTVhNjU4IiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjU2NjEyNjQ3LCJleHAiOjE2NTkyMDQ2NDd9.ij9ZdiMdMZd7FSpjIlbpXaZqnZfSlHv8ABE8ohtBeEwJzy6K3teF5_rG9jxAH1f-5mwEilgNysowpjXSU-tYtw',
    }

    const headers = {
        Accept: '/',
        'Accept-Language': 'pt-PT,pt;q=0.9,en-US;q=0.8,en;q=0.7,de;q=0.6',
        Connection: 'keep-alive',
        Cookie: '__Host-next-auth.csrf-token=02468976634724029672b24fa1222b9fa5e24d29bf9b731a00d9e511251a2f95%7C19a7a3cf3579b9b65285f90163209372ef872d6d53ab7092122250c3b18fb638; __Secure-next-auth.callback-url=https%3A%2F%2Fomni-tracking-web-staging.herokuapp.com%2Fauth%2FsignIn; __Secure-next-auth.session-token=eyJhbGciOiJIUzUxMiJ9.eyJuYW1lIjoiRGF2aSBWaWxlbGEgZGUgQXJhdWpvIiwiZW1haWwiOiJ0ZXN0ZUBleGFtcGxlLmNvbSIsInN1YiI6ImM5NjgxMWYwLTEzY2QtNGQ0Mi1hMzU0LTA3ZDY2MmE1YTY1OCIsImlkIjoiYzk2ODExZjAtMTNjZC00ZDQyLWEzNTQtMDdkNjYyYTVhNjU4IiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjU2NjEyNjQ3LCJleHAiOjE2NTkyMDQ2NDd9.ij9ZdiMdMZd7FSpjIlbpXaZqnZfSlHv8ABE8ohtBeEwJzy6K3teF5_rG9jxAH1f-5mwEilgNysowpjXSU-tYtw',
        'If-None-Match': '"2-vyGp6PvFo4RvsFtPoIWeCReyIC8"',
        Referer: 'https://omni-tracking-web-staging.herokuapp.com/en/admin/dashboard',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
    }
    const { data, isFetched, error } = useQuery('login', async () => {
        const response = await axios.get('https://omni-tracking-web-staging.herokuapp.com/api/auth/session', { withCredentials: true })
        return response.data
    })

    console.log(data, isFetched, error)
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

                            <form>
                                <label>
                                    <FaUser size={20} />
                                </label>
                                <input type="text" placeholder="login" name="login" />

                                <label>
                                    <RiLockPasswordFill size={20} />
                                </label>

                                <div className="password-area">
                                    <input type={isHidePassword ? 'text' : 'password'} placeholder="senha" name="password" />

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
