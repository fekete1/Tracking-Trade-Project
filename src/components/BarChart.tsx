import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

interface BarChartProps {
    chartTitle: string
}

export function BarChart({ chartTitle }: BarChartProps) {
    const options = {
        options: {
            chart: {
                id: 'basic-bar',
                toolbar: {
                    show: true,
                    offsetX: 0,
                    offsetY: 0,
                    tools: {
                        download: true,
                    },
                },
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
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
    }

    const series = {
        series: [
            {
                name: 'series-1',
                data: [30, 40, 45, 50, 49, 60, 70, 91],
            },
        ],
    }

    return (
        <div className="graphic-container">
            <Chart options={options.options} series={series.series} type="bar" height="220px" />
        </div>
    )
}
