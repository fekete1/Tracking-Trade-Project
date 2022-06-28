import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

interface LineChartProps {
    chartTitle: String
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
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012],
            },
            title: {
                text: chartTitle,
                align: 'left',
                float: true,
                style: {
                    fontSize: '14px',
                    fontWeight: 600,
                    fontFamily: 'sans-serif',
                    color: '#263238',
                },
            },
            subtitle: {
                text: 'Spot Price',
                align: 'left',
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
                name: 'VAR',
                type: 'column',
                data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160, 440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 16],
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
            <div className="graphic-container">
                <Chart options={state.options} series={state.series} type="line" height="250px" />
            </div>
        </>
    )
}
