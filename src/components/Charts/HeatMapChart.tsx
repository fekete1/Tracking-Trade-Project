import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

interface HeatMapChartProps {
    chartTitle: string
}

export function HeatMapChart({ chartTitle }: HeatMapChartProps) {
    const options = {
        plotOptions: {
            heatmap: {
                colorScale: {
                    ranges: [
                        {
                            from: 0,
                            to: 24,
                            color: '#94b9f2',
                            name: '0% -24%',
                        },
                        {
                            from: 25,
                            to: 49,
                            color: '#5e97ec',
                            name: '25% - 49%',
                        },
                        {
                            from: 50,
                            to: 74,
                            color: '#397be8',
                            name: '50% - 74%',
                        },
                        {
                            from: 74,
                            to: 100,
                            color: '#0251e1',
                            name: '74% - 100%',
                        },
                    ],
                },
            },
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
            text: 'Spot price',
            offsetY: 20,
            style: {
                fontSize: '12px',
                fontWeight: 600,
                fontFamily: 'sans-serif',
                color: '#263238',
            },
        },
        chart: {
            id: 'heatmap-chart',
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
    }

    const series = {
        series: [
            {
                name: 3662,
                data: [
                    {
                        x: '0:00',
                        y: 70,
                    },
                    {
                        x: '2:00',
                        y: 47,
                    },
                    {
                        x: '3:00',
                        y: 52,
                    },
                    {
                        x: '4:00',
                        y: 63,
                    },
                    {
                        x: '5:00',
                        y: 57,
                    },
                    {
                        x: '6:00',
                        y: 53,
                    },
                    {
                        x: '7:00',
                        y: 64,
                    },
                    {
                        x: '8:00',
                        y: 50,
                    },
                    {
                        x: '9:00',
                        y: 52,
                    },
                    {
                        x: '10:00',
                        y: 64,
                    },
                    {
                        x: '11:00',
                        y: 55,
                    },
                    {
                        x: '12:00',
                        y: 57,
                    },
                    {
                        x: '13:00',
                        y: 62,
                    },
                    {
                        x: '14:00',
                        y: 50,
                    },
                    {
                        x: '15:00',
                        y: 77,
                    },
                    {
                        x: '16:00',
                        y: 59,
                    },
                    {
                        x: '17:00',
                        y: 58,
                    },
                    {
                        x: '18:00',
                        y: 65,
                    },
                    {
                        x: '19:00',
                        y: 65,
                    },
                    {
                        x: '20:00',
                        y: 67,
                    },
                    {
                        x: '21:00',
                        y: 75,
                    },
                    {
                        x: '22:00',
                        y: 67,
                    },
                    {
                        x: '23:00',
                        y: 76,
                    },
                ],
            },
            {
                name: 3762,
                data: [
                    {
                        x: '2:00',
                        y: 13,
                    },
                    {
                        x: '3:00',
                        y: 10,
                    },
                    {
                        x: '4:00',
                        y: 5,
                    },
                    {
                        x: '5:00',
                        y: 9,
                    },
                    {
                        x: '6:00',
                        y: 11,
                    },
                    {
                        x: '7:00',
                        y: 4,
                    },
                    {
                        x: '8:00',
                        y: 19,
                    },
                    {
                        x: '9:00',
                        y: 5,
                    },
                    {
                        x: '10:00',
                        y: 4,
                    },
                    {
                        x: '11:00',
                        y: 14,
                    },
                    {
                        x: '12:00',
                        y: 9,
                    },
                    {
                        x: '13:00',
                        y: 10,
                    },
                    {
                        x: '14:00',
                        y: 5,
                    },
                ],
            },
            {
                name: 4049,
                data: [
                    {
                        x: '0:00',
                        y: 15,
                    },
                    {
                        x: '2:00',
                        y: 27,
                    },
                    {
                        x: '3:00',
                        y: 14,
                    },
                    {
                        x: '4:00',
                        y: 11,
                    },
                    {
                        x: '5:00',
                        y: 22,
                    },
                    {
                        x: '6:00',
                        y: 16,
                    },
                    {
                        x: '7:00',
                        y: 20,
                    },
                    {
                        x: '8:00',
                        y: 19,
                    },
                    {
                        x: '9:00',
                        y: 19,
                    },
                    {
                        x: '10:00',
                        y: 18,
                    },
                    {
                        x: '11:00',
                        y: 9,
                    },
                    {
                        x: '12:00',
                        y: 26,
                    },
                    {
                        x: '13:00',
                        y: 10,
                    },
                    {
                        x: '14:00',
                        y: 30,
                    },
                    {
                        x: '15:00',
                        y: 9,
                    },
                    {
                        x: '16:00',
                        y: 21,
                    },
                    {
                        x: '17:00',
                        y: 17,
                    },
                    {
                        x: '18:00',
                        y: 22,
                    },
                    {
                        x: '19:00',
                        y: 22,
                    },
                    {
                        x: '20:00',
                        y: 19,
                    },
                    {
                        x: '21:00',
                        y: 25,
                    },
                    {
                        x: '22:00',
                        y: 18,
                    },
                    {
                        x: '23:00',
                        y: 12,
                    },
                ],
            },
            {
                name: 4174,
                data: [
                    {
                        x: '0:00',
                        y: 7,
                    },
                    {
                        x: '2:00',
                        y: 13,
                    },
                    {
                        x: '3:00',
                        y: 10,
                    },
                    {
                        x: '4:00',
                        y: 11,
                    },
                    {
                        x: '5:00',
                        y: 9,
                    },
                    {
                        x: '6:00',
                        y: 5,
                    },
                    {
                        x: '7:00',
                        y: 12,
                    },
                    {
                        x: '8:00',
                        y: 6,
                    },
                    {
                        x: '9:00',
                        y: 10,
                    },
                    {
                        x: '10:00',
                        y: 11,
                    },
                    {
                        x: '11:00',
                        y: 9,
                    },
                    {
                        x: '12:00',
                        y: 9,
                    },
                    {
                        x: '13:00',
                        y: 10,
                    },
                    {
                        x: '14:00',
                        y: 5,
                    },
                    {
                        x: '15:00',
                        y: 9,
                    },
                    {
                        x: '16:00',
                        y: 10,
                    },
                    {
                        x: '17:00',
                        y: 17,
                    },
                    {
                        x: '18:00',
                        y: 4,
                    },
                    {
                        x: '19:00',
                        y: 4,
                    },
                    {
                        x: '20:00',
                        y: 5,
                    },
                    {
                        x: '22:00',
                        y: 6,
                    },
                    {
                        x: '23:00',
                        y: 4,
                    },
                ],
            },
            {
                name: 4799,
                data: [
                    {
                        x: '0:00',
                        y: 7,
                    },
                    {
                        x: '3:00',
                        y: 14,
                    },
                    {
                        x: '4:00',
                        y: 11,
                    },
                    {
                        x: '5:00',
                        y: 4,
                    },
                    {
                        x: '6:00',
                        y: 16,
                    },
                    {
                        x: '8:00',
                        y: 6,
                    },
                    {
                        x: '9:00',
                        y: 14,
                    },
                    {
                        x: '10:00',
                        y: 4,
                    },
                    {
                        x: '11:00',
                        y: 14,
                    },
                    {
                        x: '13:00',
                        y: 10,
                    },
                    {
                        x: '14:00',
                        y: 10,
                    },
                    {
                        x: '15:00',
                        y: 5,
                    },
                    {
                        x: '16:00',
                        y: 10,
                    },
                    {
                        x: '17:00',
                        y: 8,
                    },
                    {
                        x: '18:00',
                        y: 9,
                    },
                    {
                        x: '19:00',
                        y: 9,
                    },
                    {
                        x: '20:00',
                        y: 10,
                    },
                    {
                        x: '22:00',
                        y: 9,
                    },
                    {
                        x: '23:00',
                        y: 8,
                    },
                ],
            },
        ],
    }
    return (
        <div className="graphic-container">
            <Chart options={options} series={series.series} type="heatmap" width="800px" height="220px" />
        </div>
    )
}
