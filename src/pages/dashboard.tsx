import type { NextPage } from 'next'
import Head from 'next/head'
import { SideMenu } from '../components/SideMenu'
import { TopMenu } from '../components/TopMenu'

const Dashboard: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Dashboard</title>
            </Head>
            <SideMenu>
                <h1> Dashboard</h1>
            </SideMenu>
        </div>
    )
}

export default Dashboard
