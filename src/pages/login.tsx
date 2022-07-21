import { FormEvent, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import { FiLogIn } from 'react-icons/fi'
import { FaUser } from 'react-icons/fa'
import { RiLockPasswordFill } from 'react-icons/ri'
import { AiOutlineEyeInvisible, AiFillEye } from 'react-icons/ai'
import { Button, Flex, Grid, GridItem } from '@chakra-ui/react'

const Login: NextPage = () => {
    const [isHidePassword, setIsHidePassword] = useState(false)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin(event: FormEvent) {
        // event?.preventDefault()
        console.log(email, password)

        // Router.push('/dashboard')
    }

    const toggleHidePassword = () => {
        setIsHidePassword(isHidePassword => !isHidePassword)
    }

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>

            <Grid templateColumns="repeat(2, 1fr)" height="100vh" width="100vw" id="login-main-container">
                <GridItem
                    colSpan={{ base: 0, md: 1, lg: 1 }}
                    height="100vh"
                    width="100%"
                    display={{ base: 'none', md: 'flex' }}
                    id="login-aside-section"
                >
                    <Flex className="login-aside-content">
                        <img src="/assets/analyze-2.jpg" alt="Ilustração de dados" />
                        <div className="login-aside-text">
                            <strong>Tenha controle dos dados da sua empresa</strong>
                            <p>Observando precisamente os dados dos seus produtos</p>
                        </div>
                    </Flex>
                </GridItem>

                <GridItem
                    colSpan={{ base: 2, md: 1, lg: 1 }}
                    display="flex"
                    height="100vh"
                    width="100%"
                    id="login-auth-section"
                >
                    <h1>Faça login</h1>
                    <p className="separator">Entre em uma conta para continuar</p>

                    <form onSubmit={handleLogin} action="/dashboard" method="post">
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

                        <Button type="submit" className="login-submit">
                            <FiLogIn style={{ margin: 4 }} />
                            Entrar
                        </Button>
                    </form>
                </GridItem>
            </Grid>
        </>
    )
}

export default Login
