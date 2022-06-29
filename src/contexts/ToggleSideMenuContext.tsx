import { createContext, useContext } from 'react'

type ToggleSideMenuContextType = {
    sideMenuIsOpen: boolean
    toggleSideMenu: () => void
}

export const ToggleSideMenuContext = createContext({} as ToggleSideMenuContextType)

function toggleSideMenu() {
    setSideMenuIsOpen(sideMenuIsOpen => !sideMenuIsOpen)
}
