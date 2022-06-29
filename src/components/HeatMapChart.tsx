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
                name: 'Jan',
                data: [1, 7, 23, 45, 32, 45, 67, 85, 32, 56, 1, 100, 5, 43, 67, 44],
            },
            {
                name: 'Feb',
                data: [1, 7, 23, 45, 32, 45, 67, 85, 32, 56, 1, 100, 5, 43, 67, 44],
            },
            {
                name: 'Mar',
                data: [1, 7, 23, 45, 32, 45, 67, 85, 32, 56, 1, 100, 5, 43, 67, 44],
            },
            {
                name: 'Apr',
                data: [1, 7, 23, 45, 32, 45, 67, 85, 32, 56, 1, 100, 5, 43, 67, 44],
            },
            {
                name: 'May',
                data: [1, 7, 23, 45, 32, 45, 67, 85, 32, 56, 1, 100, 5, 43, 67, 44],
            },
        ],
    }
    return (
        <div className="graphic-container">
            <Chart options={options} series={series.series} type="heatmap" width="800px" height="250px" />
        </div>
    )
}
