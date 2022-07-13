import { createContext, ReactNode } from 'react'

type AuthProviderProps = {
    children: ReactNode
}

type AuthContextType = {
    isAuthenticated: boolean
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: AuthProviderProps) {
    const isAuthenticated = false
    return <AuthContext.Provider value={{ isAuthenticated }}>{children}</AuthContext.Provider>
}
