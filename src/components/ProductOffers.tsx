import { BiLinkExternal } from 'react-icons/bi'
import { BiUnlink } from 'react-icons/bi'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import { GoChevronDown } from 'react-icons/go'
import { useState } from 'react'
import { ButtonDate } from './ButtonDate'
import { ToolTipInfo } from './ToolTipInfo'
import { Box, Table, Th, Thead, Tr, Menu, MenuItem, MenuButton, MenuList } from '@chakra-ui/react'

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
        <Box id="product-offers-container">
            <Box className="product-offers-header">
                <Box className="offers-label">
                    <p>Offer</p>
                    <span className="product-offers-tooltip">
                        <ToolTipInfo tooltipText="Alguma informação das ofertas de produto" />
                    </span>
                </Box>
                <Box className="product-offers-menu">
                    <Box>
                        <p className="menu-label">Date</p>
                        <DatePicker
                            selected={date}
                            onChange={(newDate: Date) => toggleOffersDate(newDate)}
                            dateFormat="yyyy-MM-dd"
                            customInput={<ButtonDateOffers />}
                        />
                    </Box>
                    <Box>
                        <p className="menu-label">Price</p>

                        <Menu>
                            <MenuButton
                                px={2}
                                py={2}
                                transition="all 0.2s"
                                borderRadius="4px"
                                _hover={{ bg: 'gray.400' }}
                                _expanded={{ bg: 'white.100' }}
                                _focus={{ boxShadow: 'outline' }}
                                className="btn btn-shadow"
                            >
                                <Box display="flex" alignItems="center">
                                    {price}
                                    <GoChevronDown />
                                </Box>
                            </MenuButton>
                            <MenuList zIndex="999" fontSize="14px" minWidth="120px">
                                <MenuItem value="Mode" onClick={() => togglePriceOption('Mode')} fontWeight="500">
                                    Mode
                                </MenuItem>
                                <MenuItem value="Maximum" onClick={() => togglePriceOption('Maximum')} fontWeight="500">
                                    Maximum
                                </MenuItem>
                                <MenuItem value="Minimum" onClick={() => togglePriceOption('Minimum')} fontWeight="500">
                                    Minimum
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Box>

            <Box overflowX="auto">
                <Table boxSizing="border-box" className="table-offers">
                    <Thead>
                        <Tr>
                            <Th>Marketplace</Th>
                            <Th>Presence</Th>
                            <Th>SP(R$)</Th>
                            <Th>%RRP</Th>
                            <Th>IP(R$)</Th>
                            <Th>%RRP</Th>
                            <Th>View</Th>
                        </Tr>
                    </Thead>
                    <tbody>
                        {productInfos.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.marketplace}</td>
                                    <td>{item.presence}</td>
                                    <td>{item.sp === null ? '-' : item.sp}</td>
                                    <td>
                                        <div
                                            style={{
                                                backgroundColor: handleTonalityRed(item.rrpSp),
                                                fontWeight: 500,
                                                color: 'black',
                                            }}
                                        >
                                            {item.rrpSp === null ? '0%' : item.rrpSp}
                                        </div>
                                    </td>
                                    <td>{item.ip === null ? '-' : item.ip}</td>
                                    <td>
                                        <div
                                            style={{
                                                backgroundColor: handleTonalityRed(item.rrpIp),
                                                fontWeight: 500,
                                                color: 'black',
                                            }}
                                        >
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
            </Box>
        </Box>
    )
}
