import axios from 'axios'
import { FormEvent, useContext, useEffect, useRef } from 'react'
import { Form } from 'react-bootstrap'
import { BiSearchAlt } from 'react-icons/bi'
import { ToggleSideMenuContext } from '../contexts/ToggleSideMenuContext'
import SetCookie from '../hooks/SetCookie'
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
        SetCookie(
            '__Secure-next-auth.session-token',
            'eyJhbGciOiJIUzUxMiJ9.eyJuYW1lIjoiRGF2aSBWaWxlbGEgZGUgQXJhdWpvIiwiZW1haWwiOiJ0ZXN0ZUBleGFtcGxlLmNvbSIsInN1YiI6ImM5NjgxMWYwLTEzY2QtNGQ0Mi1hMzU0LTA3ZDY2MmE1YTY1OCIsImlkIjoiYzk2ODExZjAtMTNjZC00ZDQyLWEzNTQtMDdkNjYyYTVhNjU4IiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjU3NzI0MTAwLCJleHAiOjE2NjAzMTYxMDB9.czTJdzMLwKmo4-fK--SOgWpufOsrmKtfrefDUj7cxVbkL4o4EJpqKNqc8q-lVds5TWGVHkh5rL6ZLyWc2XIFVQ'
        )

        const options = {
            method: 'POST',
            url: 'https://omni-tracking-web-staging.herokuapp.com/graphql',
            headers: {
                cookie: '__Secure-next-auth.session-token=eyJhbGciOiJIUzUxMiJ9.eyJuYW1lIjoiRGF2aSBWaWxlbGEgZGUgQXJhdWpvIiwiZW1haWwiOiJ0ZXN0ZUBleGFtcGxlLmNvbSIsInN1YiI6ImM5NjgxMWYwLTEzY2QtNGQ0Mi1hMzU0LTA3ZDY2MmE1YTY1OCIsImlkIjoiYzk2ODExZjAtMTNjZC00ZDQyLWEzNTQtMDdkNjYyYTVhNjU4IiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjU3NzI4MjAzLCJleHAiOjE2NjAzMjAyMDN9.hKrBYynbu_k2UQF0LQBFKEvl00eRngo-TeQR9tvAli0dpBeGMB7YS6H2nSbfY58EDlhIXx9MKNZdirSa223r3g',
                'Content-Type': 'application/json',
            },
            data: '{"query":" {\n  product ( id: "767f0983-bd0a-488d-ab6b-7fb261057ef7" ) {\n    id,\n    name,\n    brand {\n      id\n      name\n    },\n    pictureUrl,\n    lastRatingCount,\n    lastRatingValue\n  }\n}","variables":{}}',
        }

        axios
            .request(options)
            .then(function (response) {
                console.log(response.data)
            })
            .catch(function (error) {
                console.error(error)
            })
    }

    //Previne o usuário de submeter o formulário
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
