import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useContext, useEffect, useRef } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { ToggleSideMenuContext } from '../contexts/ToggleSideMenuContext'
import { ProductTypes } from './TopMenu'

interface SearchBarProps {
    products: ProductTypes[]
    onInputChange: (value: string) => void
    searchIsDisabled: boolean
}

export function SearchBar({ products, onInputChange, searchIsDisabled }: SearchBarProps) {
    const { sideMenuIsOpen } = useContext(ToggleSideMenuContext)

    const inputRef = useRef<HTMLInputElement>(null)
    const ulRef = useRef<HTMLUListElement>(null)

    function handleProductSelection(product: string) {
        if (inputRef.current !== null) {
            inputRef.current.value = product
        }
    }

    useEffect(() => {
        inputRef.current?.addEventListener('click', event => {
            event.stopPropagation()
            if (ulRef.current !== null && inputRef.current !== null) {
                ulRef.current.style.display = 'flex'
                onInputChange(inputRef.current.value)
            }
        })
        document.addEventListener('click', event => {
            if (ulRef.current !== null) {
                ulRef.current.style.display = 'none'
            }
        })
    }, [])

    return (
        <Box id="search-top-menu-container">
            <InputGroup>
                <InputLeftElement className=" search-icon" pointerEvents="none" children={<BiSearchAlt />} />
                <Input
                    type="text"
                    placeholder="Search..."
                    className="search"
                    aria-label="Search"
                    onChange={e => onInputChange(e.target.value)}
                    disabled={searchIsDisabled || (sideMenuIsOpen && window.innerWidth <= 940 ? true : false)} //TODO quando troca as resoluções essa regra não funciona na mineira vez, ao menos que clique no toggleButton de novo
                    ref={inputRef}
                />
            </InputGroup>

            <Box className="result-search-container">
                <ul className="list-group" ref={ulRef}>
                    {products.map((product, index) => {
                        return (
                            <button
                                type="button"
                                key={index}
                                className="list-group-item btn-product-search"
                                onClick={() => handleProductSelection(product.name)}
                            >
                                <Box className="btn-product-search-container">
                                    <Box className="btn-image-product">
                                        <img src={product.pictureUrl} alt="Product image" />
                                    </Box>
                                    <Box className="btn-name-and-brand">
                                        <span className="btn-product-name">{product.name}</span>
                                        <span className="btn-product-brand">{product.brand.name}</span>
                                    </Box>
                                </Box>
                            </button>
                        )
                    })}
                </ul>
            </Box>
        </Box>
    )
}
