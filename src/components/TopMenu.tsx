import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

import { AiOutlineExpand, AiOutlinePoweroff } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
import { useContext, useState } from 'react'
import { ToggleSideMenuContext } from '../contexts/ToggleSideMenuContext'
import { ToggleFullScreenContext } from '../contexts/FullScreenContext'
import { SearchBar } from './SearchBar'

const defaultProducts: string[] = []
for (let i = 0; i < 5; i++) {
    defaultProducts.push(`product ${i}`)
    defaultProducts.push(`cellphone ${i}`)
    defaultProducts.push(`notebook ${i}`)
}
export function TopMenu() {
    const item = {
        name: 'Xeldu ',
    }

    const { toggleSideMenu } = useContext(ToggleSideMenuContext)
    const { toggleFullScreen } = useContext(ToggleFullScreenContext)

    const [products, setProducts] = useState<string[]>([])

    function onInputChange(value: string) {
        setProducts(defaultProducts.filter(product => product.includes(value)))
    }

    return (
        <Navbar bg="light" sticky="top" id="top-menu-main-container">
            <div className="top-menu-content">
                <div className="search-section">
                    <button type="button" className="btn btn-expand-sidebar" onClick={toggleSideMenu}>
                        <FaBars />
                    </button>
                    <SearchBar products={products} onInputChange={onInputChange} />
                </div>
                <div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="">
                            <button type="button" className="btn btn-expand-page" onClick={toggleFullScreen}>
                                <AiOutlineExpand />
                            </button>
                            <NavDropdown
                                title={item.name}
                                id="basic-nav-dropdown"
                                align="end"
                                className="logout-container"
                            >
                                <NavDropdown.Item href="#" className="logout-item">
                                    <span className="logout-icon">
                                        <AiOutlinePoweroff />
                                    </span>
                                    <span className="logout-text">Logout</span>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </div>
        </Navbar>
    )
}
