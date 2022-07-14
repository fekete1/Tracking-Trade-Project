import { Table } from 'react-bootstrap'
import { BiLinkExternal } from 'react-icons/bi'
import { BiUnlink } from 'react-icons/bi'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react'
import { ButtonDate } from './ButtonDate'
import { ToolTipInfo } from './ToolTipInfo'

export function ProductOffers() {
    const [date, setDate] = useState(new Date())
    const [price, setPrice] = useState<string>('Mode')

    function toggleOffersDate(newDate: Date) {
        setDate(newDate)
        console.log(date)
    }

    function togglePriceOption(value: string) {
        setPrice(value)
        console.log(price)
    }

    function handleTonalityRed(value: string | null) {
        if (value === null) return 'none'
        if (parseInt(value) <= 24) return '#f8d7da'
        if (parseInt(value) <= 49) return '#f1aeb5'
        if (parseInt(value) <= 74) return '#ea868f'
        return '#e35d6a'
    }
    const ButtonDateOffers = ButtonDate

    const productInfos = [
        {
            marketplace: 'Magalu',
            presence: '80%',
            sp: 3201,
            rrpSp: '30%',
            ip: null,
            rrpIp: null,
            link: '//www.google.com',
        },
        {
            marketplace: 'Serasa',
            presence: '20%',
            sp: null,
            rrpSp: null,
            ip: null,
            rrpIp: null,
            link: null,
        },
    ]
    return (
        <div id="product-offers-container">
            <div className="product-offers-header">
                <div className="offers-label">
                    <p>Offer</p>
                    <ToolTipInfo />
                </div>
                <div className="product-offers-menu">
                    <div>
                        <p className="menu-label">Date</p>
                        <DatePicker
                            selected={date}
                            onChange={(newDate: Date) => toggleOffersDate(newDate)}
                            dateFormat="yyyy-MM-dd"
                            customInput={<ButtonDateOffers />}
                        />
                    </div>
                    <div>
                        <p className="menu-label">Price</p>
                        <select
                            className="btn btn-price btn-shadow"
                            value={price}
                            onChange={e => togglePriceOption(e.target.value)}
                        >
                            <option value="Mode">Mode</option>
                            <option value="Minimum">Min</option>
                            <option value="Maximum">Max</option>
                        </select>
                    </div>
                </div>
            </div>
            <Table responsive hover size="sm">
                <thead>
                    <tr>
                        <th>Marketplace</th>
                        <th>Presence</th>
                        <th>SP(R$)</th>
                        <th>%RRP</th>
                        <th>IP(R$)</th>
                        <th>%RRP</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    {productInfos.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.marketplace}</td>
                                <td>{item.presence}</td>
                                <td>{item.sp === null ? '-' : item.sp}</td>
                                <td>
                                    <div style={{ backgroundColor: handleTonalityRed(item.rrpSp) }}>
                                        {item.rrpSp === null ? '0%' : item.rrpSp}
                                    </div>
                                </td>
                                <td>{item.ip === null ? '-' : item.ip}</td>
                                <td>
                                    <div style={{ backgroundColor: handleTonalityRed(item.rrpIp) }}>
                                        {item.rrpIp === null ? '0%' : item.rrpIp}
                                    </div>
                                </td>
                                <td>
                                    {item.link === null ? (
                                        <BiUnlink />
                                    ) : (
                                        <a href={item.link} target="_blank">
                                            <BiLinkExternal />
                                        </a>
                                    )}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}
