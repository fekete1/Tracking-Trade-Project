import { createContext } from 'react'

interface FullScreenHandle {
    enter: () => Promise<void>
    // Requests this element to go full screen.

    exit: () => Promise<void>
    // Requests this element to exit full screen.
}

export const FullScreenContext = createContext({})
