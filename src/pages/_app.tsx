import '../styles/globals.scss'
import '../styles/login.scss'
import '../styles/dashboard.scss'

import '../styles/sidemenu.scss'
import '../styles/topmenu.scss'
import '../styles/chart.scss'
import '../styles/productinfo.scss'
import '../styles/productoffers.scss'
import '../styles/chartsmenu.scss'
import '../styles/searchbar.scss'
import '../styles/marketplacesmodal.scss'

import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClientProvider } from 'react-query'
import { ToggleSideMenuContextProvider } from '../contexts/ToggleSideMenuContext'
import { ToggleFullScreenContextProvider } from '../contexts/FullScreenContext'
import { queryClient } from '../services/queryClient'
import { AuthProvider } from '../contexts/AuthContext'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider>
                <AuthProvider>
                    <ToggleSideMenuContextProvider>
                        <ToggleFullScreenContextProvider>
                            <Component {...pageProps} />
                        </ToggleFullScreenContextProvider>
                    </ToggleSideMenuContextProvider>
                </AuthProvider>
            </ChakraProvider>
        </QueryClientProvider>
    )
}

export default MyApp
