import { Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { SideMenu } from './SideMenu'

import { BiSearchAlt } from 'react-icons/bi'
import { AiOutlineExpand, AiOutlinePoweroff } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'
import { useContext } from 'react'
import { ToggleSideMenuContext } from '../contexts/ToggleSideMenuContext'

export function TopMenu() {
    const item = {
        name: 'Xeldu ',
    }

    const { sideMenuIsOpen, toggleSideMenu } = useContext(ToggleSideMenuContext)

    return (
        <>
            <Navbar bg="light" sticky="top" id="top-menu-main-container">
                <div className="top-menu-content">
                    <div className="search-section">
                        <button type="button" className="btn btn-expand-sidebar" onClick={toggleSideMenu}>
                            <FaBars />
                        </button>
                        <Form>
                            <span className="search-icon">
                                <BiSearchAlt />
                            </span>
                            <Form.Control type="search" placeholder="Search..." className="search" aria-label="Search" />
                        </Form>
                    </div>
                    <div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="">
                                <button type="button" className="btn btn-expand-page">
                                    <AiOutlineExpand />
                                </button>
                                <NavDropdown title={item.name} id="basic-nav-dropdown" align="end" className="logout-container">
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
        </>
    )
}
