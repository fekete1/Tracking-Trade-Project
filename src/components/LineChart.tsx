import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

export function LineChart() {
    const state = {
        options: {
            chart: {
                id: 'basic-bar',
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
            },
        },
        series: [
            {
                name: 'VAR',
                type: 'column',
                data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
            },
            {
                name: 'RRP',
                type: 'line',
                data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
            },
            {
                name: 'Mode',
                type: 'line',
                data: [30, 40, 45, 50, 49, 60, 70, 91],
            },
            {
                name: 'Max',
                type: 'line',
                data: [72, 32, 56, 65, 86, 32, 7, 43],
            },
            {
                name: 'Min',
                type: 'line',
                data: [72, 32, 56, 65, 86, 32, 7, 43],
            },
        ],
    }
    return (
        <>
            <div className="mixed-chart">
                <Chart options={state.options} series={state.series} type="line" max-width="500" />
            </div>
        </>
    )
}
