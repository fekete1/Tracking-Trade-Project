import { useState } from 'react'
import { Button, Container, ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
import { ButtonDate } from './ButtonDate'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

export function ChartsMenu() {
    const [periodValue, setPeriodValue] = useState<String>('week')
    const [chartsDate, setChartsDate] = useState(new Date())
    const [formOfPayment, setFormOfPayment] = useState<String>('spot')
    const [selectedMarketplaces, setSelectedMarketplaces] = useState([])

    const marketplacesReference: String[] = [] //TODO requisição de todos os marketplaces

    function handlePeriodValue(value: string) {
        setPeriodValue(value)
        console.log(value)
    }

    const ButtonDateCharts = ButtonDate

    function handleChartsDate(date: Date) {
        setChartsDate(date)
        console.log(date)
    }

    function handleFormOfPayment(form: string) {
        setFormOfPayment(form)
        console.log(form)
    }

    return (
        <Container fluid id="charts-menu-container">
            <div>
                <p>Period</p>
                <ToggleButtonGroup className="clickable-toggle-button" type="radio" name="period-options" defaultValue={periodValue} onChange={value => handlePeriodValue(value)}>
                    <ToggleButton id="tbg-hour" value={'hour'}>
                        Hour
                    </ToggleButton>
                    <ToggleButton id="tbg-day" value={'day'}>
                        Day
                    </ToggleButton>
                    <ToggleButton id="tbg-week" value={'week'}>
                        Week
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div>
                <p>Date</p>
                <DatePicker selected={chartsDate} onChange={(newDate: Date) => handleChartsDate(newDate)} dateFormat="yyyy-MM-dd" customInput={<ButtonDateCharts />} />
            </div>
            <div>
                <p>Form of payment</p>
                <ToggleButtonGroup className="clickable-toggle-button" type="radio" name="price-options" defaultValue={formOfPayment} onChange={form => handleFormOfPayment(form)}>
                    <ToggleButton id="tbg-spot" value={'spot'}>
                        Spot Price
                    </ToggleButton>
                    <ToggleButton id="tbg-installment" value={'installment'}>
                        Installment Price
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div>
                <p>Marketplace</p>
                <Button className="clickable-button">
                    {JSON.stringify(selectedMarketplaces) === JSON.stringify(marketplacesReference) ? 'All marketplaces' : 'Not all marketplaces'}
                </Button>
            </div>
        </Container>
    )
}
