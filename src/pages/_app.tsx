import '../styles/globals.scss'
import '../styles/login.scss'
import '../styles/dashboard.scss'

import '../styles/sidemenu.scss'
import '../styles/topmenu.scss'
import '../styles/chart.scss'
import '../styles/productinfo.scss'
import '../styles/productoffers.scss'
import '../styles/chartsmenu.scss'
import '../styles/resultsearch.scss'

import 'bootstrap/dist/css/bootstrap.min.css'

import type { AppProps } from 'next/app'
import { QueryClientProvider } from 'react-query'
import { ToggleSideMenuContextProvider } from '../contexts/ToggleSideMenuContext'
import { ToggleFullScreenContextProvider } from '../contexts/FullScreenContext'
import { queryClient } from '../services/queryClient'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <ToggleSideMenuContextProvider>
                <ToggleFullScreenContextProvider>
                    <Component {...pageProps} />
                </ToggleFullScreenContextProvider>
            </ToggleSideMenuContextProvider>
        </QueryClientProvider>
    )
}

export default MyApp
