import { FormEvent, useContext, useEffect, useRef } from 'react'
import { Form } from 'react-bootstrap'
import { BiSearchAlt } from 'react-icons/bi'
import { ToggleSideMenuContext } from '../contexts/ToggleSideMenuContext'
import { ProductTypes } from './TopMenu'

interface SearchBarProps {
    products: ProductTypes[]
    onInputChange: (value: string) => void
}

export function SearchBar({ products, onInputChange }: SearchBarProps) {
    const { sideMenuIsOpen } = useContext(ToggleSideMenuContext)

    const inputRef = useRef<HTMLInputElement>(null)
    const ulRef = useRef<HTMLUListElement>(null)

    function handleProductSelection(product: string) {
        if (inputRef.current !== null) {
            inputRef.current.value = product
        }
    }

    function searchPreventDefault(event: FormEvent) {
        event.preventDefault()
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
        <Form id="search-top-menu-container" onSubmit={searchPreventDefault}>
            <span className="search-icon">
                <BiSearchAlt />
            </span>
            <Form.Control
                type="search"
                placeholder="Search..."
                className="search"
                aria-label="Search"
                onChange={e => onInputChange(e.target.value)}
                disabled={sideMenuIsOpen && window.innerWidth <= 940 ? true : false} //TODO quando troca as resoluções essa regra não funciona na mineira vez, ao menos que clique no toggleButton de novo
                ref={inputRef}
            />
            <div className="result-search-container">
                <ul className="list-group" ref={ulRef}>
                    {products.map((product, index) => {
                        return (
                            <button
                                type="button"
                                key={index}
                                className="list-group-item list-group-item-action btn-product-search"
                                onClick={() => handleProductSelection(product.name)}
                            >
                                <div className="btn-product-search-container">
                                    <div className="btn-image-product">
                                        <img src={product.pictureUrl} alt="Product image" />
                                    </div>
                                    <div className="btn-name-and-brand">
                                        <span className="btn-product-name">{product.name}</span>
                                        <span className="btn-product-brand">{product.brand.name}</span>
                                    </div>
                                </div>
                            </button>
                        )
                    })}
                </ul>
            </div>
        </Form>
    )
}
