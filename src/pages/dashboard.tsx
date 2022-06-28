import type { NextPage } from 'next'
import Head from 'next/head'
import { Col, Container, Row, SSRProvider } from 'react-bootstrap'

import { BarChart } from '../components/BarChart'
import { HeatMapChart } from '../components/HeatMapChart'
import { LineChart } from '../components/LineChart'
import { SideMenu } from '../components/SideMenu'
import { TopMenu } from '../components/TopMenu'

const Dashboard: NextPage = () => {
    return (
        <SSRProvider>
            <div>
                <Head>
                    <title>Dashboard</title>
                </Head>

                <SideMenu>
                    <TopMenu />
                    <Container fluid>
                        <Row xs={1} md={2}>
                            <Col className="products-infos" xs={12} md={6} lg={4}>
                                <div>Informações do produto</div>
                                <div>Informações do produto nas lojas</div>
                            </Col>

                            <Col className="products-charts" xs={12} md={6} lg={8}>
                                <div>Menu complicadinho de fazer</div>
                                <Row xs={1} md={1} lg={2}>
                                    <Col>
                                        <LineChart chartTitle="Price" />
                                    </Col>
                                    <Col>
                                        <LineChart chartTitle="Price P2P" />
                                    </Col>
                                </Row>

                                <Row xs={1} md={1} lg={2}>
                                    <Col>
                                        <HeatMapChart chartTitle="Temperature" />
                                    </Col>
                                    <Col>
                                        <HeatMapChart chartTitle="Temperature P2P" />
                                    </Col>
                                </Row>

                                <Row xs={1} md={1} lg={2}>
                                    <Col>
                                        <BarChart chartTitle="Presence" />
                                    </Col>
                                    <Col>
                                        <BarChart chartTitle="Presense P2P" />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </SideMenu>
            </div>
        </SSRProvider>
    )
}

export default Dashboard
