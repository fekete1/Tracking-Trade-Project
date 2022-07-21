import { left } from '@popperjs/core'
import dynamic from 'next/dynamic'
import { ToolTipInfo } from '../ToolTipInfo'
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
                    offsetX: -760,
                    offsetY: 0,
                    tools: {
                        download: true,
                    },
                },
            },
            legend: {
                position: left,
                offsetY: 40,
            },

            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
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
                offsetX: 50,
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
                data: [30, 40, 45, 50, 49, 60, 70, 91, 30, 40, 45, 50, 49, 60, 70, 91, 30, 40, 45, 50, 49, 60, 70, 91],
            },
        ],
    }

    return (
        <div className="graphic-container">
            <span className="tooltip-charts">
                <ToolTipInfo tooltipText="Alguma informação do gráfico de Linhas e Colunas" />
            </span>
            <Chart options={options.options} series={series.series} type="bar" height="220px" width="800px" />
        </div>
    )
}
