import axios from 'axios'
import Router from 'next/router'
import { createContext, ReactNode, useState } from 'react'

type AuthProviderProps = {
    children: ReactNode
}

type SignInData = {
    email: string
    password: string
}

type User = {
    id: string
    email: string
    fullName: string
    isAdmin: boolean
}

type AuthContextType = {
    isAuthenticated: boolean
    user: User | null
    signIn: (data: SignInData) => Promise<void>
    signOut: () => void
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null)
    const isAuthenticated = !!user

    function signOut() {
        setUser(null)
        ///Apagar os cookies e tudo mais
        Router.push('/login')
    }

    async function signIn({ email, password }: SignInData) {
        console.log(email, password)
        const options = {
            method: 'GET',
            url: 'https://omni-tracking-web-staging.herokuapp.com/api/auth/session',
            headers: {
                Cookie: '__Host-next-auth.csrf-token=02468976634724029672b24fa1222b9fa5e24d29bf9b731a00d9e511251a2f95%7C19a7a3cf3579b9b65285f90163209372ef872d6d53ab7092122250c3b18fb638; __Secure-next-auth.callback-url=https%3A%2F%2Fomni-tracking-web-staging.herokuapp.com%2Fauth%2FsignIn; __Secure-next-auth.session-token=eyJhbGciOiJIUzUxMiJ9.eyJuYW1lIjoiRGF2aSBWaWxlbGEgZGUgQXJhdWpvIiwiZW1haWwiOiJ0ZXN0ZUBleGFtcGxlLmNvbSIsInN1YiI6ImM5NjgxMWYwLTEzY2QtNGQ0Mi1hMzU0LTA3ZDY2MmE1YTY1OCIsImlkIjoiYzk2ODExZjAtMTNjZC00ZDQyLWEzNTQtMDdkNjYyYTVhNjU4IiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjU2NjEyNjQ3LCJleHAiOjE2NTkyMDQ2NDd9.ij9ZdiMdMZd7FSpjIlbpXaZqnZfSlHv8ABE8ohtBeEwJzy6K3teF5_rG9jxAH1f-5mwEilgNysowpjXSU-tYtw; __Secure-next-auth.callback-url=https%253A%252F%252Fomni-tracking-web-staging.herokuapp.com%252Fauth%252FsignIn; __Host-next-auth.csrf-token=812b962f248d10e2b368057aacd0369388197ce2ca191963f0c96fad324b9b22%257Cb7b92c2cfebd6e6a376a23a13739f2e0cc075cf56512aa85469b8a56ce897a4f; __Secure-next-auth.session-token=eyJhbGciOiJIUzUxMiJ9.eyJuYW1lIjoiRGF2aSBWaWxlbGEgZGUgQXJhdWpvIiwiZW1haWwiOiJ0ZXN0ZUBleGFtcGxlLmNvbSIsInN1YiI6ImM5NjgxMWYwLTEzY2QtNGQ0Mi1hMzU0LTA3ZDY2MmE1YTY1OCIsImlkIjoiYzk2ODExZjAtMTNjZC00ZDQyLWEzNTQtMDdkNjYyYTVhNjU4IiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjU2NjEzMDczLCJleHAiOjE2NTkyMDUwNzN9.z09-xlzehkcmNhWJ44amg3z2C8HDAYKMn6MHrbA22FxOISX6wRvaYFKsUSIGdN5JGr3nntH0lbGc8X54GtqIIw',
            },
        }
        const response = await axios.request(options)
        const data = response.data
        console.log(data)
        setUser(data.user)

        Router.push('/dashboard')
    }

    return <AuthContext.Provider value={{ isAuthenticated, signIn, signOut, user }}>{children}</AuthContext.Provider>
}
