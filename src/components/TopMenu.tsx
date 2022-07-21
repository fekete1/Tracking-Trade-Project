import { GoChevronDown } from 'react-icons/go'
import { AiOutlineExpand, AiOutlinePoweroff } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
import { useContext, useState } from 'react'
import { ToggleSideMenuContext } from '../contexts/ToggleSideMenuContext'
import { ToggleFullScreenContext } from '../contexts/FullScreenContext'
import { SearchBar } from './SearchBar'
import { AuthContext } from '../contexts/AuthContext'
import { Avatar, Box, Flex, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'

type BrandTypes = {
    id: string
    name: string
}

export type ProductTypes = {
    id: string
    name: string
    brand: BrandTypes
    pictureUrl: string
}

interface TopMenuProps {
    searchIsDisabled: boolean
}

const defaultProducts: ProductTypes[] = [
    {
        id: '9cc5d8fe-3b68-4946-b668-f45c5570bc79',
        name: '14Z90N-V.BR51P1',
        brand: {
            id: '55157f37-314c-4281-a578-5f15496a6e7e',
            name: 'LG',
        },
        pictureUrl:
            'https://firebasestorage.googleapis.com/v0/b/omni-tracking-5fa23.appspot.com/o/products_images%2FgdshaLV3-.jpg?alt=media&token=ce90d9ea-b358-4367-a13b-b66add1082d9',
    },
    {
        id: '0b82bbf7-d835-48b2-b5ff-db553cec19af',
        name: '15Z90N-V.BJ51P1',
        brand: {
            id: '55157f37-314c-4281-a578-5f15496a6e7e',
            name: 'LG',
        },
        pictureUrl:
            'https://firebasestorage.googleapis.com/v0/b/omni-tracking-5fa23.appspot.com/o/products_images%2FEgIrdxcv-LGGramZNTitanio.webp?alt=media&token=46bdd8d7-bb23-415c-88d4-3eefbc062fa1',
    },
    {
        id: '9cd79fbe-af09-4294-85ea-d6da716c64b2',
        name: 'UX434FAC-A6339T',
        brand: {
            id: 'f43a6848-025a-4952-87ac-47156d911811',
            name: 'ASUS',
        },
        pictureUrl:
            'https://firebasestorage.googleapis.com/v0/b/omni-tracking-5fa23.appspot.com/o/products_images%2FOaPmVeLy-dbcbebf.CRPTSXV.jpg?alt=media&token=c7017cac-8a35-43c6-9166-e71314aeeeca',
    },
    {
        id: '430b14cc-0b7e-46a7-9a99-d8f163ef0242',
        name: 'UX434FAC-A6340T',
        brand: {
            id: 'f43a6848-025a-4952-87ac-47156d911811',
            name: 'ASUS',
        },
        pictureUrl:
            'https://firebasestorage.googleapis.com/v0/b/omni-tracking-5fa23.appspot.com/o/products_images%2FM8pAPACJ-UXFACAPRD.jpg?alt=media&token=0829400e-c934-4b31-94d6-9546609cefa2',
    },
    {
        id: '10b30ad2-20f0-4830-a787-a42f677e1985',
        name: 'WATCH 3 41MM LTE',
        brand: {
            id: '5e00c1a9-d0e2-453d-9a01-3d483ba861ba',
            name: 'SAMSUNG',
        },
        pictureUrl: 'https://www.extra-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1416850466',
    },
    {
        id: '0399c8c1-a6b3-4fcd-9da4-54fb7daf1822',
        name: 'WATCH 3 45MM LTE',
        brand: {
            id: '5e00c1a9-d0e2-453d-9a01-3d483ba861ba',
            name: 'SAMSUNG',
        },
        pictureUrl: 'https://images-shoptime.b2w.io/produtos/01/00/img/1902702/5/1902702511_1GG.jpg',
    },
    {
        id: 'e36db085-7fab-4bea-8eea-ee194655884f',
        name: 'WATCH4 BT 40MM',
        brand: {
            id: '5e00c1a9-d0e2-453d-9a01-3d483ba861ba',
            name: 'SAMSUNG',
        },
        pictureUrl:
            'https://a-static.mlcdn.com.br/186x140/smartwatch-samsung-galaxy-watch4-bt-preto-40mm-16gb/magazineluiza/231241100/085a1da124806f964baa1f4b8452bf28.jpg',
    },
    {
        id: '0d624d12-50a0-4cea-bc71-f6292dcd1a6c',
        name: 'WATCH4 BT 44MM',
        brand: {
            id: '5e00c1a9-d0e2-453d-9a01-3d483ba861ba',
            name: 'SAMSUNG',
        },
        pictureUrl: 'https://images-americanas.b2w.io/produtos/01/00/img/3734821/9/3734821975_1GG.jpg',
    },
    {
        id: 'c61ecf3e-7e17-44c7-ae83-ec3a12a0fcac',
        name: 'WATCH4 CLASSIC BT 42MM',
        brand: {
            id: '5e00c1a9-d0e2-453d-9a01-3d483ba861ba',
            name: 'SAMSUNG',
        },
        pictureUrl:
            'https://images-shoptime.b2w.io/produtos/3918788954/imagens/galaxy-watch4-classic-bt-42mm/3918788971_1_large.jpg',
    },
    {
        id: '30520c1b-ea33-4d3a-8a86-93ca3fc20abc',
        name: 'WATCH4 CLASSIC BT 46MM',
        brand: {
            id: '5e00c1a9-d0e2-453d-9a01-3d483ba861ba',
            name: 'SAMSUNG',
        },
        pictureUrl: 'https://images-shoptime.b2w.io/produtos/01/00/img/3734822/0/3734822011_1GG.jpg',
    },
    {
        id: '049ea45c-7ae1-4c6f-b56f-7e86d8de98af',
        name: 'WATCH4 CLASSIC LTE 42MM',
        brand: {
            id: '5e00c1a9-d0e2-453d-9a01-3d483ba861ba',
            name: 'SAMSUNG',
        },
        pictureUrl:
            'https://a-static.mlcdn.com.br/186x140/smartwatch-samsung-galaxy-watch4-classic-lte-preto-42mm-16gb/magazineluiza/231240700/932ce8e2157c577126cd629eaf5fe37e.jpg',
    },
    {
        id: '34768e8d-6e49-4a66-88c8-c813ee2a66b4',
        name: 'WATCH4 CLASSIC LTE 46MM',
        brand: {
            id: '5e00c1a9-d0e2-453d-9a01-3d483ba861ba',
            name: 'SAMSUNG',
        },
        pictureUrl:
            'https://firebasestorage.googleapis.com/v0/b/omni-tracking-5fa23.appspot.com/o/products_images%2FAaR4ktUF-Capturar.PNG?alt=media&token=548a06e3-f137-4a48-9abf-9b90613f6c71',
    },
    {
        id: '1dea1b4f-5163-49e3-b0ab-800ac6abd6ee',
        name: 'WATCH4 LTE 40MM',
        brand: {
            id: '5e00c1a9-d0e2-453d-9a01-3d483ba861ba',
            name: 'SAMSUNG',
        },
        pictureUrl: 'https://images-americanas.b2w.io/produtos/01/00/img/3734821/5/3734821537_1GG.jpg',
    },
    {
        id: '6bba3e6c-b4b7-4138-ba83-7a3acad67680',
        name: 'WATCH4 LTE 44MM',
        brand: {
            id: '5e00c1a9-d0e2-453d-9a01-3d483ba861ba',
            name: 'SAMSUNG',
        },
        pictureUrl:
            'https://firebasestorage.googleapis.com/v0/b/omni-tracking-5fa23.appspot.com/o/products_images%2Fw1D2nWoC-Capturar.PNG?alt=media&token=3202eed4-dcaf-4141-969f-adf85f997464',
    },
    {
        id: '0eade710-d35d-48e7-8d7a-750b3a1310e2',
        name: 'WATCH ACTIVE',
        brand: {
            id: '5e00c1a9-d0e2-453d-9a01-3d483ba861ba',
            name: 'SAMSUNG',
        },
        pictureUrl: '//static.nagem.com.br/util/artefatos/produtos/n/n/760061613498975/520781.jpg',
    },
    {
        id: '0d2092d3-bb52-48cf-b48f-12716fb02446',
        name: 'WATCH ACTIVE 2 40MM LTE',
        brand: {
            id: '5e00c1a9-d0e2-453d-9a01-3d483ba861ba',
            name: 'SAMSUNG',
        },
        pictureUrl:
            'https://images-shoptime.b2w.io/produtos/1625340435/imagens/samsung-galaxy-watch-active2-lte-40mm-rose-original/1625340443_1_large.jpg',
    },
    {
        id: 'e9371b70-2484-486a-a598-35b85d78e980',
        name: 'WATCH ACTIVE 2 44MM BT',
        brand: {
            id: '5e00c1a9-d0e2-453d-9a01-3d483ba861ba',
            name: 'SAMSUNG',
        },
        pictureUrl: 'https://www.extra-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1372546309',
    },
    {
        id: 'ba57d5e4-3cb6-4c57-946b-2a2baba7e1f6',
        name: 'WATCH ACTIVE 2 44MM LTE',
        brand: {
            id: '5e00c1a9-d0e2-453d-9a01-3d483ba861ba',
            name: 'SAMSUNG',
        },
        pictureUrl: 'https://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1459628286',
    },
    {
        id: '20cb715c-4763-4efa-a62e-dbf9d5708541',
        name: 'X512FB-BR501T',
        brand: {
            id: 'f43a6848-025a-4952-87ac-47156d911811',
            name: 'ASUS',
        },
        pictureUrl:
            'https://firebasestorage.googleapis.com/v0/b/omni-tracking-5fa23.appspot.com/o/products_images%2FHI8z8Z2M-ArquivoExibir.webp?alt=media&token=0f8e0c13-236f-4ff3-8adc-711a99e40091',
    },
    {
        id: '15675765-0c90-42cc-9249-7be9e498eda7',
        name: 'X512FJ-EJ551T',
        brand: {
            id: 'f43a6848-025a-4952-87ac-47156d911811',
            name: 'ASUS',
        },
        pictureUrl:
            'https://firebasestorage.googleapis.com/v0/b/omni-tracking-5fa23.appspot.com/o/products_images%2Fpnq1Iha7-Foto.webp?alt=media&token=4c52cb84-aa7f-4b8a-84c2-bd25aed678bc',
    },
]
export function TopMenu({ searchIsDisabled }: TopMenuProps) {
    const item = {
        name: 'Xeldu ',
    }

    const { toggleSideMenu } = useContext(ToggleSideMenuContext)
    const { toggleFullScreen } = useContext(ToggleFullScreenContext)

    const [products, setProducts] = useState<ProductTypes[]>([])

    const { signOut } = useContext(AuthContext)

    function onInputChange(value: string) {
        setProducts(
            defaultProducts.filter(
                product =>
                    product.name.toLowerCase().includes(value.toLowerCase()) ||
                    product.brand.name.toLowerCase().includes(value.toLowerCase())
            )
        )
    }

    return (
        <nav id="top-menu-main-container">
            <Flex width="100%" justifyContent="space-between" className="top-menu-content">
                <Flex gap="10px" className="search-section">
                    <button type="button" className="btn btn-expand-sidebar" onClick={toggleSideMenu}>
                        <FaBars />
                    </button>
                    <SearchBar products={products} onInputChange={onInputChange} searchIsDisabled={searchIsDisabled} />
                </Flex>

                <Flex alignItems="center" gap="10px">
                    <button type="button" className="btn btn-expand-page" onClick={toggleFullScreen}>
                        <AiOutlineExpand />
                    </button>

                    <Flex alignItems="center" gap={3}>
                        <Avatar size="xs" name={item.name} src="" />
                        <Menu>
                            <MenuButton
                                transition="all 0.2s"
                                _expanded={{ bg: 'white.100' }}
                                className="btn-username-menu"
                            >
                                <Flex alignItems="center" gap={1}>
                                    <Text className="username-text"> {item.name} </Text>
                                    <GoChevronDown size={8} />
                                </Flex>
                            </MenuButton>
                            <MenuList zIndex="999" fontSize="14px" minWidth="120px">
                                <MenuItem onClick={signOut} className="logout-menu-item">
                                    <Flex className="logout-container" alignItems="center" justifyContent="flex-end">
                                        <span className="logout-icon">
                                            <AiOutlinePoweroff />
                                        </span>
                                        <Text className="logout-text">Logout</Text>
                                    </Flex>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>
            </Flex>
        </nav>
    )
}
