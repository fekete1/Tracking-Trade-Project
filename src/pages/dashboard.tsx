import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { Col, Container, Row, SSRProvider } from 'react-bootstrap'
import { parseBody } from 'next/dist/server/api-utils/node'

import { BarChart } from '../components/Charts/BarChart'
import { ChartsMenu } from '../components/ChartsMenu'
import { HeatMapChart } from '../components/Charts/HeatMapChart'
import { LineChart } from '../components/Charts/LineChart'
import { ProductInfo } from '../components/ProductInfo'
import { ProductOffers } from '../components/ProductOffers'
import { SideMenu } from '../components/SideMenu'
import { TopMenu } from '../components/TopMenu'
import axios from 'axios'

type TopMenuProps = {
    user: string
}
const Dashboard: NextPage<TopMenuProps> = ({ user }: TopMenuProps) => {
    return (
        <SSRProvider>
            <>
                <Head>
                    <title>{user}</title>
                </Head>

                <SideMenu>
                    <TopMenu />
                    <Container fluid id="dashboard-main-container">
                        <Row xs={1} md={2}>
                            <Col className="product-infos" xs={12} md={6} lg={4}>
                                <ProductInfo />
                                <ProductOffers />
                            </Col>

                            <Col className="product-charts" xs={12} md={6} lg={8}>
                                <Row>
                                    <Col>
                                        <ChartsMenu />
                                    </Col>
                                </Row>
                                <Row xs={1} md={1} lg={2}>
                                    <Col className="justify-content-center">
                                        <LineChart chartTitle="Price" />
                                    </Col>
                                    <Col className="justify-content-center">
                                        <LineChart chartTitle="Price P2P" />
                                    </Col>
                                </Row>

                                <Row xs={1} md={1} lg={2}>
                                    <Col className="justify-content-center">
                                        <HeatMapChart chartTitle="Temperature" />
                                    </Col>
                                    <Col className="justify-content-center">
                                        <HeatMapChart chartTitle="Temperature P2P" />
                                    </Col>
                                </Row>

                                <Row xs={1} md={1} lg={2}>
                                    <Col className="justify-content-center">
                                        <BarChart chartTitle="Presence" />
                                    </Col>
                                    <Col className="justify-content-center">
                                        <BarChart chartTitle="Presence P2P" />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </SideMenu>
            </>
        </SSRProvider>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
    const body = await parseBody(req, '1mb')
    console.log(body)
    // Here you can check authentication status directly before rendering the page,
    // however the page would be a serverless function, which is more expensive and
    // slower than a static page with client side authentication
    const options = {
        method: 'GET',
        url: 'https://omni-tracking-web-staging.herokuapp.com/api/auth/session',
        headers: {
            cookie: '__Secure-next-auth.session-token=eyJhbGciOiJIUzUxMiJ9.eyJuYW1lIjoiRGF2aSBWaWxlbGEgZGUgQXJhdWpvIiwiZW1haWwiOiJ0ZXN0ZUBleGFtcGxlLmNvbSIsInN1YiI6ImM5NjgxMWYwLTEzY2QtNGQ0Mi1hMzU0LTA3ZDY2MmE1YTY1OCIsImlkIjoiYzk2ODExZjAtMTNjZC00ZDQyLWEzNTQtMDdkNjYyYTVhNjU4IiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjU3MDg1NjIzLCJleHAiOjE2NTk2Nzc2MjN9.xEm58708XISqtHs-xmBFb52gu-iROsgA7RBmT9DjQ537cKeLjyoypyUigEmESPHG8-454FIYSfe7eIOq_103dg',
            Cookie: '__Host-next-auth.csrf-token=02468976634724029672b24fa1222b9fa5e24d29bf9b731a00d9e511251a2f95%7C19a7a3cf3579b9b65285f90163209372ef872d6d53ab7092122250c3b18fb638; __Secure-next-auth.callback-url=https%3A%2F%2Fomni-tracking-web-staging.herokuapp.com%2Fauth%2FsignIn; __Secure-next-auth.session-token=eyJhbGciOiJIUzUxMiJ9.eyJuYW1lIjoiRGF2aSBWaWxlbGEgZGUgQXJhdWpvIiwiZW1haWwiOiJ0ZXN0ZUBleGFtcGxlLmNvbSIsInN1YiI6ImM5NjgxMWYwLTEzY2QtNGQ0Mi1hMzU0LTA3ZDY2MmE1YTY1OCIsImlkIjoiYzk2ODExZjAtMTNjZC00ZDQyLWEzNTQtMDdkNjYyYTVhNjU4IiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjU2NjEyNjQ3LCJleHAiOjE2NTkyMDQ2NDd9.ij9ZdiMdMZd7FSpjIlbpXaZqnZfSlHv8ABE8ohtBeEwJzy6K3teF5_rG9jxAH1f-5mwEilgNysowpjXSU-tYtw; __Secure-next-auth.callback-url=https%253A%252F%252Fomni-tracking-web-staging.herokuapp.com%252Fauth%252FsignIn; __Host-next-auth.csrf-token=812b962f248d10e2b368057aacd0369388197ce2ca191963f0c96fad324b9b22%257Cb7b92c2cfebd6e6a376a23a13739f2e0cc075cf56512aa85469b8a56ce897a4f; __Secure-next-auth.session-token=eyJhbGciOiJIUzUxMiJ9.eyJuYW1lIjoiRGF2aSBWaWxlbGEgZGUgQXJhdWpvIiwiZW1haWwiOiJ0ZXN0ZUBleGFtcGxlLmNvbSIsInN1YiI6ImM5NjgxMWYwLTEzY2QtNGQ0Mi1hMzU0LTA3ZDY2MmE1YTY1OCIsImlkIjoiYzk2ODExZjAtMTNjZC00ZDQyLWEzNTQtMDdkNjYyYTVhNjU4IiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjU2NjEzMDczLCJleHAiOjE2NTkyMDUwNzN9.z09-xlzehkcmNhWJ44amg3z2C8HDAYKMn6MHrbA22FxOISX6wRvaYFKsUSIGdN5JGr3nntH0lbGc8X54GtqIIw',
        },
        withCredentials: true,
    }

    const response = await axios.request(options)
    const data = response.data
    console.log(data)

    return { props: { user: data.user.fullName } }
}

export default Dashboard
