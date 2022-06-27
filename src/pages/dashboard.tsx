import type { NextPage } from 'next'
import Head from 'next/head'
import { SideMenu } from '../components/SideMenu'

const Dashboard: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Dashboard</title>
            </Head>

            <SideMenu />
        </div>
    )
}

export default Dashboard
