import type { NextPage } from 'next'
import Head from 'next/head'
import { Col, Container, Row } from 'react-bootstrap'
import { HeatMapChart } from '../components/HeatMapChart'
import { LineChart } from '../components/LineChart'
import { SideMenu } from '../components/SideMenu'
import { TopMenu } from '../components/TopMenu'

const Dashboard: NextPage = () => {
    return (
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
                                    <LineChart />
                                </Col>
                                <Col>
                                    <LineChart />
                                </Col>
                            </Row>

                            <Row xs={1} md={1} lg={2}>
                                <Col>
                                    <HeatMapChart />
                                </Col>
                                <Col>
                                    <HeatMapChart />
                                </Col>
                            </Row>

                            <Row xs={1} md={1} lg={2}>
                                <Col>Gráfico presença 1</Col>
                                <Col>Gráfico presença 2</Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </SideMenu>
        </div>
    )
}

export default Dashboard
