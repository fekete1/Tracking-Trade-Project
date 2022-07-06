import type { NextPage } from 'next'
import Head from 'next/head'
import { Col, Container, Row, SSRProvider } from 'react-bootstrap'

import { BarChart } from '../components/Charts/BarChart'
import { ChartsMenu } from '../components/ChartsMenu'
import { HeatMapChart } from '../components/Charts/HeatMapChart'
import { LineChart } from '../components/Charts/LineChart'
import { ProductInfo } from '../components/ProductInfo'
import { ProductOffers } from '../components/ProductOffers'
import { SideMenu } from '../components/SideMenu'
import { TopMenu } from '../components/TopMenu'

const Dashboard: NextPage = () => {
    return (
        <SSRProvider>
            <>
                <Head>
                    <title>Dashboard</title>
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

export default Dashboard
