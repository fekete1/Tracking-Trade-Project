import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

interface LineChartProps {
    chartTitle: string
}

export function LineChart({ chartTitle }: LineChartProps) {
    const state = {
        options: {
            chart: {
                id: 'line-chart',
                toolbar: {
                    show: true,
                    offsetX: 0,
                    offsetY: 0,
                    tools: {
                        download: true,
                        selection: false,
                        zoom: false,
                        zoomin: false,
                        zoomout: false,
                        pan: false,
                        reset: false,
                    },
                },
            },
            xaxis: {
                categories: [
                    1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006,
                    2007, 2008, 2009, 2010, 2011, 2012,
                ],
            },
            title: {
                text: chartTitle,
                style: {
                    fontSize: '14px',
                    fontWeight: 600,
                    fontFamily: 'sans-serif',
                    color: '#263238',
                },
            },
            subtitle: {
                text: 'Spot Price',
                offsetY: 20,
                style: {
                    fontSize: '11px',
                    fontWeight: 600,
                    fontFamily: 'sans-serif',
                    color: '#263238',
                },
            },
        },
        series: [
            {
                dashPriceChart: {
                    labels: [
                        '0:00',
                        '2:00',
                        '3:00',
                        '4:00',
                        '5:00',
                        '6:00',
                        '7:00',
                        '8:00',
                        '9:00',
                        '10:00',
                        '11:00',
                        '12:00',
                        '13:00',
                        '14:00',
                        '15:00',
                        '16:00',
                        '17:00',
                        '18:00',
                        '19:00',
                        '20:00',
                        '21:00',
                        '22:00',
                        '23:00',
                    ],
                    data: [
                        {
                            name: 'VAR',
                            type: 'column',
                            data: [
                                16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
                                16,
                            ],
                            color: '#0D3B85',
                            enableDataLabel: true,
                            dash: 0,
                        },
                        {
                            name: 'RRP',
                            type: 'line',
                            data: [
                                3161, 3161, 3161, 3161, 3161, 3161, 3161, 3161, 3161, 3161, 3161, 3161, 3161, 3161,
                                3161, 3161, 3161, 3161, 3161, 3161, 3161, 3161, 3161,
                            ],
                            color: '#74788D',
                            enableDataLabel: false,
                            dash: 3,
                        },
                        {
                            name: 'Mode',
                            type: 'line',
                            data: [
                                3662, 3662, 3662, 3662, 3662, 3662, 3662, 3662, 3662, 3662, 3662, 3662, 3662, 3662,
                                3662, 3662, 3662, 3662, 3662, 3662, 3662, 3662, 3662,
                            ],
                            color: '#7fa7e9',
                            enableDataLabel: true,
                            dash: 0,
                        },
                        {
                            name: 'Max',
                            type: 'line',
                            data: [
                                4799, 4174, 4799, 4799, 4799, 4799, 4263, 4799, 4799, 4799, 4799, 4263, 4799, 4799,
                                4799, 4799, 4799, 4799, 4799, 4799, 4489, 4799, 4799,
                            ],
                            color: '#2A73E8',
                            enableDataLabel: true,
                            dash: 0,
                        },
                        {
                            name: 'Min',
                            type: 'line',
                            data: [
                                3642, 3662, 3662, 3642, 3642, 3642, 3662, 3662, 3642, 3662, 3662, 3662, 3662, 3662,
                                3662, 3662, 3662, 3662, 3662, 3662, 3662, 3662, 3662,
                            ],
                            color: '#F1B44C',
                            enableDataLabel: true,
                            dash: 0,
                        },
                    ],
                    maxLine: 4799,
                },
            },
        ],
    }
    return (
        <>
            <div className="graphic-container">
                <Chart options={state.options} series={state.series} type="line" height="220px" width="800px" />
            </div>
        </>
    )
}
