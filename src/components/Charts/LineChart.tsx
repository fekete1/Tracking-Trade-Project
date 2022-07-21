import { left } from '@popperjs/core'
import dynamic from 'next/dynamic'
import { ToolTipInfo } from '../ToolTipInfo'
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
                    offsetX: -760,
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
            legend: {
                position: left,
                offsetY: 30,
            },
            xaxis: {
                categories: [
                    1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006,
                    2007, 2008, 2009, 2010, 2011, 2012,
                ],
            },
            title: {
                text: chartTitle,
                offsetX: 50,
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
                offsetX: 50,
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
                data: [
                    440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160, 440, 505, 414, 671, 227, 413, 201, 352,
                    752, 320, 257, 16,
                ],
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
                <span className="tooltip-charts">
                    <ToolTipInfo tooltipText="Alguma informação do gráfico de Colunas" />
                </span>

                <Chart options={state.options} series={state.series} type="line" height="220px" width="800px" />
            </div>
        </>
    )
}
