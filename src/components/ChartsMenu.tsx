import { useEffect, useState } from 'react'
import { Button, Container, ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
import { ButtonDate } from './ButtonDate'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import { MarketplacesModal } from './MarketplacesModal'

export type MarketplaceType = {
    id: string
    name: string
    pictureUrl: string
    checked?: boolean
}

const marketplaces: MarketplaceType[] = [
    {
        id: '3f009774-3f42-4a25-8dde-2d741b5a47a7',
        name: 'AMERICANAS',
        pictureUrl:
            'https://storage.googleapis.com/omni-tracking-5fa23-scrape-storage/marketplace_images/americanas.png',
    },
    {
        id: 'c6646309-fe06-4ac4-b688-a573baa8658e',
        name: 'CARREFOUR',
        pictureUrl:
            'https://storage.googleapis.com/omni-tracking-5fa23-scrape-storage/marketplace_images/carrefour.png',
    },
    {
        id: 'a6c89bae-fddb-4cd7-9cd7-85c9089a1f19',
        name: 'CASAS BAHIA',
        pictureUrl:
            'https://storage.googleapis.com/omni-tracking-5fa23-scrape-storage/marketplace_images/casas_bahia.png',
    },
    {
        id: '4d66d741-3492-4696-aa3f-da73d513a49d',
        name: 'EFACIL',
        pictureUrl: 'https://storage.cloud.google.com/omni-tracking-5fa23-scrape-storage/marketplace_images/efacil.png',
    },
    {
        id: '39cdcd1c-035f-41bf-98bd-749eb11f19d1',
        name: 'EXTRA',
        pictureUrl: 'https://storage.googleapis.com/omni-tracking-5fa23-scrape-storage/marketplace_images/extra.png',
    },
    {
        id: 'f608195c-c8fd-40fe-9369-91715478dc18',
        name: 'FAST SHOP',
        pictureUrl:
            'https://storage.googleapis.com/omni-tracking-5fa23-scrape-storage/marketplace_images/fast_shop.png',
    },
    {
        id: '004a971f-769d-4d6b-8dea-c59613d22692',
        name: 'FUJIOKA',
        pictureUrl: 'https://storage.googleapis.com/omni-tracking-5fa23-scrape-storage/marketplace_images/fujioka.png',
    },
    {
        id: '35ac6b60-c042-4a5f-a9ae-0fd5989ec48f',
        name: 'GIRAFA',
        pictureUrl: 'https://storage.cloud.google.com/omni-tracking-5fa23-scrape-storage/marketplace_images/girafa.png',
    },
    {
        id: 'c5916385-48c2-4686-8c9e-9ab6e0f098a1',
        name: 'HAVAN',
        pictureUrl: 'https://storage.googleapis.com/omni-tracking-5fa23-scrape-storage/marketplace_images/havan.png',
    },
    {
        id: '43d64d06-3446-46ee-b64d-9bd8cadb7f63',
        name: 'KABUM',
        pictureUrl: 'https://storage.cloud.google.com/omni-tracking-5fa23-scrape-storage/marketplace_images/kabum.png',
    },
    {
        id: '57e0087a-35bf-4f81-91d2-f6143a5ccdc7',
        name: 'MAGAZINE LUIZA',
        pictureUrl:
            'https://storage.googleapis.com/omni-tracking-5fa23-scrape-storage/marketplace_images/magazine_luiza.png',
    },
    {
        id: '98220231-c1a2-40d0-a36b-3f9a349cf573',
        name: 'MERCADO LIVRE',
        pictureUrl:
            'https://storage.googleapis.com/omni-tracking-5fa23-scrape-storage/marketplace_images/mercado_livre.png',
    },
    {
        id: 'fcb9707d-a2c1-4c01-8bc6-336ca2578300',
        name: 'MOBCOM',
        pictureUrl: 'https://storage.googleapis.com/omni-tracking-5fa23-scrape-storage/marketplace_images/mobcom.png',
    },
    {
        id: 'ad4ce278-6277-4c66-a2be-a3330bc4bded',
        name: 'MOTOROLA',
        pictureUrl: 'https://storage.googleapis.com/omni-tracking-5fa23-scrape-storage/marketplace_images/motorola.png',
    },
    {
        id: 'cb68c800-bde7-4f6f-ab4d-dd8c7bde5873',
        name: 'NAGEM',
        pictureUrl: 'https://storage.googleapis.com/omni-tracking-5fa23-scrape-storage/marketplace_images/nagem.png',
    },
    {
        id: '10241168-124d-4005-b5ff-9c3965bfbe1b',
        name: 'NOVO MUNDO',
        pictureUrl:
            'https://storage.googleapis.com/omni-tracking-5fa23-scrape-storage/marketplace_images/novo_mundo.png',
    },
    {
        id: '3748ad4b-1de0-4778-aa6a-9980f7fb0a5e',
        name: 'PERNAMBUCANAS',
        pictureUrl:
            'https://storage.googleapis.com/omni-tracking-5fa23-scrape-storage/marketplace_images/pernambucanas.png',
    },
    {
        id: 'bc424b8b-0416-4886-aaf3-57a3e6349144',
        name: 'PONTO',
        pictureUrl: 'https://storage.googleapis.com/omni-tracking-5fa23-scrape-storage/marketplace_images/ponto.png',
    },
    {
        id: '020f4c22-d71b-4e68-b6da-8eff9b597384',
        name: 'SAMSUNG',
        pictureUrl: 'https://storage.googleapis.com/omni-tracking-5fa23-scrape-storage/marketplace_images/samsung.png',
    },
    {
        id: '2a8e22a6-9f91-423f-ba49-1a963ee7da2c',
        name: 'SHOPTIME',
        pictureUrl: 'https://storage.googleapis.com/omni-tracking-5fa23-scrape-storage/marketplace_images/shoptime.png',
    },
    {
        id: '3fc70715-9a19-417a-bb41-fce80effb352',
        name: 'SUBMARINO',
        pictureUrl:
            'https://storage.googleapis.com/omni-tracking-5fa23-scrape-storage/marketplace_images/submarino.png',
    },
    {
        id: '45734889-e92d-46f2-8cce-6188c2528c7e',
        name: 'WEBFONES',
        pictureUrl: 'https://storage.googleapis.com/omni-tracking-5fa23-scrape-storage/marketplace_images/webfones.png',
    },
]

function checkAllMarketplaces(marketplaces: MarketplaceType[]) {
    marketplaces.map(marketplace => {
        return (marketplace.checked = true)
    })
}

function uncheckAllMarketplaces(marketplaces: MarketplaceType[]) {
    marketplaces.map(marketplace => {
        return (marketplace.checked = false)
    })
}

export function ChartsMenu() {
    const [periodValue, setPeriodValue] = useState<String>('week')
    const [chartsDate, setChartsDate] = useState(new Date())
    const [formOfPayment, setFormOfPayment] = useState<String>('spot')
    const [selectedMarketplaces, setSelectedMarketplaces] = useState([])
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const marketplacesReference: MarketplaceType[] = [] //TODO requisição de todos os marketplaces

    useEffect(() => {
        checkAllMarketplaces(marketplaces)
    }, [])

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

    function handleMarketplacesModal() {
        setModalIsOpen(!modalIsOpen)
    }

    return (
        <Container fluid id="charts-menu-container">
            <div>
                <p className="button-label">Period</p>
                <ToggleButtonGroup
                    className="clickable-toggle-button btn-shadow"
                    type="radio"
                    name="period-options"
                    defaultValue={periodValue}
                    onChange={value => handlePeriodValue(value)}
                >
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
                <p className="button-label">Date</p>
                <DatePicker
                    selected={chartsDate}
                    onChange={(newDate: Date) => handleChartsDate(newDate)}
                    dateFormat="yyyy-MM-dd"
                    customInput={<ButtonDateCharts />}
                />
            </div>
            <div>
                <p className="button-label">Form of payment</p>
                <ToggleButtonGroup
                    className="clickable-toggle-button btn-shadow"
                    type="radio"
                    name="price-options"
                    defaultValue={formOfPayment}
                    onChange={form => handleFormOfPayment(form)}
                >
                    <ToggleButton id="tbg-spot" value={'spot'}>
                        Spot Price
                    </ToggleButton>
                    <ToggleButton id="tbg-installment" value={'installment'}>
                        Installment Price
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div>
                <p className="button-label">Marketplace</p>
                <Button type="button" className="clickable-button btn-shadow" onClick={handleMarketplacesModal}>
                    {JSON.stringify(selectedMarketplaces) === JSON.stringify(marketplacesReference)
                        ? 'All marketplaces'
                        : 'Not all marketplaces'}
                </Button>
            </div>
            <MarketplacesModal
                modalIsOpen={modalIsOpen}
                handleMarketplacesModal={handleMarketplacesModal}
                marketplaces={marketplaces}
            />
        </Container>
    )
}
