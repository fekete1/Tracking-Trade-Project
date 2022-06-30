import '../styles/globals.scss'
import '../styles/login.scss'
import '../styles/dashboard.scss'

import '../styles/sidemenu.scss'
import '../styles/topmenu.scss'
import '../styles/chart.scss'

import 'bootstrap/dist/css/bootstrap.min.css'

import type { AppProps } from 'next/app'
import { ToggleSideMenuContextProvider } from '../contexts/ToggleSideMenuContext'
import { ToggleFullScreenContextProvider } from '../contexts/FullScreenContext'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ToggleSideMenuContextProvider>
            <ToggleFullScreenContextProvider>
                <Component {...pageProps} />
            </ToggleFullScreenContextProvider>
        </ToggleSideMenuContextProvider>
    )
}

export default MyApp
