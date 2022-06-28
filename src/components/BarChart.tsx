import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

export function BarChart() {
    const options = {
        options: {
            chart: {
                id: 'basic-bar',
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
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

    return <Chart options={options.options} series={series.series} type="bar" max-width="500" />
}
