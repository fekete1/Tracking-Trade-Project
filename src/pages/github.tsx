import type { NextPage } from 'next'
import Head from 'next/head'

import { SideMenu } from '../components/SideMenu'
import { TopMenu } from '../components/TopMenu'

const Github: NextPage = () => {
    return (
        <>
            <Head>
                <title>Project Github</title>
            </Head>

            <SideMenu>
                <TopMenu searchIsDisabled={true} />
            </SideMenu>
        </>
    )
}

export default Github
