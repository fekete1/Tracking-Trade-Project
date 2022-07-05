import { FormEvent, useContext, useEffect, useRef } from 'react'
import { Form } from 'react-bootstrap'
import { BiSearchAlt } from 'react-icons/bi'
import { ToggleSideMenuContext } from '../contexts/ToggleSideMenuContext'

interface SearchBarProps {
    products: string[]
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
        <Form>
            <span className="search-icon">
                <BiSearchAlt />
            </span>
            <Form.Control
                onSubmit={searchPreventDefault}
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
                            <button type="button" key={index} className="list-group-item list-group-item-action" onClick={() => handleProductSelection(product)}>
                                {product}
                            </button>
                        )
                    })}
                </ul>
            </div>
        </Form>
    )
}
