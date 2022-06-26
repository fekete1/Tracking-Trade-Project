import type { NextPage } from 'next'
import Head from 'next/head'

import { FiLogIn } from 'react-icons/fi'
import { FaUser } from 'react-icons/fa'
import { RiLockPasswordFill } from 'react-icons/ri'
import { AiOutlineEyeInvisible, AiFillEye } from 'react-icons/ai'

import { Col, Container, Row } from 'react-bootstrap'
import { useState } from 'react'

const Login: NextPage = () => {
    const [isHidePassword, setIsHidePassword] = useState(false)

    const toggleHidePassword = () => {
        setIsHidePassword(isHidePassword => !isHidePassword)
    }

    return (
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
    )
}

export default Login
