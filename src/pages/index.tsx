import type { NextPage } from 'next'
import Head from 'next/head'
import { Button } from 'react-bootstrap'

import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Homepage</title>
            </Head>
            <main>
                <h1>Hello World</h1>
            </main>

            <>
                <Button variant="outline-primary">Primary</Button>
                <Button variant="outline-secondary">Secondary</Button>
                <Button variant="outline-success">Success</Button>
                <Button variant="outline-warning">Warning</Button>
                <Button variant="outline-danger">Danger</Button>
                <Button variant="outline-info">Info</Button>
                <Button variant="outline-light">Light</Button>
                <Button variant="outline-dark">Dark</Button>
            </>

            <Chart
                options={{
                    chart: {
                        id: 'basic-bar',
                    },
                    xaxis: {
                        categories: [
                            1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998,
                        ],
                    },
                }}
                series={[
                    {
                        name: 'series-1',
                        data: [30, 40, 45, 50, 49, 60, 70, 91],
                    },
                ]}
                type="bar"
                width="500"
            />
        </div>
    )
}

export default Home
