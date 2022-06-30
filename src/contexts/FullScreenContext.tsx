import { createContext, ReactNode, useState } from 'react'

type ToggleFullScreenContextProps = {
    children: ReactNode
}

type ToggleFullScreenContextType = {
    isFullScreen: boolean
    toggleFullScreen: () => void
}

const initialValue = {
    isFullScreen: false,
    toggleFullScreen: () => {},
}

export const ToggleFullScreenContext = createContext<ToggleFullScreenContextType>(initialValue)

export const ToggleFullScreenContextProvider = ({ children }: ToggleFullScreenContextProps) => {
    const [isFullScreen, setIsFullScreen] = useState(initialValue.isFullScreen)

    function toggleFullScreen() {
        setIsFullScreen(isFullScreen => !isFullScreen)

        let elem = document.body
        console.log(elem)

        if (!document.fullscreenElement) {
            elem?.requestFullscreen().catch(err => {
                alert(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`)
            })
        } else {
            document.exitFullscreen()
        }
    }

    return <ToggleFullScreenContext.Provider value={{ isFullScreen, toggleFullScreen }}>{children}</ToggleFullScreenContext.Provider>
}
