import { useContext } from 'react'
import { Form } from 'react-bootstrap'
import { BiSearchAlt } from 'react-icons/bi'
import { ToggleSideMenuContext } from '../contexts/ToggleSideMenuContext'

export function SearchBar() {
    const { sideMenuIsOpen } = useContext(ToggleSideMenuContext)

    return (
        <Form>
            <span className="search-icon">
                <BiSearchAlt />
            </span>
            <Form.Control type="search" placeholder="Search..." className="search" aria-label="Search" disabled={sideMenuIsOpen ? true : false} />
            <div className="result-search-container">
                <ul className="list-group">
                    <button type="button" className="list-group-item list-group-item-action">
                        um item ai
                    </button>
                </ul>
            </div>
        </Form>
    )
}
