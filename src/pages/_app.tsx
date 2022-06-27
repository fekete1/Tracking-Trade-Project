import '../styles/globals.scss'
import '../styles/login.scss'
import '../styles/dashboard.scss'

import '../styles/sidemenu.scss'
import '../styles/topmenu.scss'

import 'bootstrap/dist/css/bootstrap.min.css'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default MyApp
