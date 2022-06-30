import { createContext, ReactNode, useState } from 'react'

type ToggleSideMenuContextProps = {
    children: ReactNode
}

type ToggleSideMenuContextType = {
    sideMenuIsOpen: boolean
    toggleSideMenu: () => void
}

const initialValue = {
    sideMenuIsOpen: false,
    toggleSideMenu: () => {},
}

export const ToggleSideMenuContext = createContext<ToggleSideMenuContextType>(initialValue)

export const ToggleSideMenuContextProvider = ({ children }: ToggleSideMenuContextProps) => {
    const [sideMenuIsOpen, setSideMenuIsOpen] = useState(initialValue.sideMenuIsOpen)

    function toggleSideMenu() {
        setSideMenuIsOpen(sideMenuIsOpen => !sideMenuIsOpen)
    }

    return <ToggleSideMenuContext.Provider value={{ sideMenuIsOpen, toggleSideMenu }}>{children}</ToggleSideMenuContext.Provider>
}
