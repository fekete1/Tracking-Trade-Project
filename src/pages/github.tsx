import type { NextPage } from 'next'
import Head from 'next/head'
import { useContext } from 'react'
import { Nav, Navbar, NavDropdown, SSRProvider } from 'react-bootstrap'
import { AiOutlineExpand, AiOutlinePoweroff } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'

import { SideMenu } from '../components/SideMenu'
import { ToggleFullScreenContext } from '../contexts/FullScreenContext'
import { ToggleSideMenuContext } from '../contexts/ToggleSideMenuContext'

const Github: NextPage = () => {
    const item = {
        name: 'Xeldu ',
    }
    const { toggleSideMenu } = useContext(ToggleSideMenuContext)
    const { toggleFullScreen } = useContext(ToggleFullScreenContext)

    return (
        <SSRProvider>
            <Head>
                <title>Project Github</title>
            </Head>

            <SideMenu>
                <Navbar bg="light" sticky="top" id="top-menu-main-container">
                    <div className="top-menu-content">
                        <div className="search-section">
                            <button type="button" className="btn btn-expand-sidebar" onClick={toggleSideMenu}>
                                <FaBars />
                            </button>
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
            </SideMenu>
        </SSRProvider>
    )
}

export default Github
