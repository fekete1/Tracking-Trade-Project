import type { NextPage } from 'next'
import Head from 'next/head'
import { TopMenu } from '../components/TopMenu'

const Dashboard: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Dashboard</title>
            </Head>

            <TopMenu />
        </div>
    )
}

export default Dashboard
