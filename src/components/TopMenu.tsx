import { Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { SideMenu } from './SideMenu'

import { BiSearchAlt } from 'react-icons/bi'
import { AiOutlineExpand, AiOutlinePoweroff } from 'react-icons/ai'
import { FaBars } from 'react-icons/fa'

export function TopMenu() {
    return (
        <>
            <Navbar bg="light" sticky="top">
                <Container className="d-flex">
                    <div>
                        <button type="button">
                            <FaBars />
                        </button>
                        <Form>
                            <BiSearchAlt />
                            <Form.Control type="search" placeholder="search..." className="" aria-label="Search" />
                        </Form>
                    </div>
                    <div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="">
                                <button type="button">
                                    <AiOutlineExpand />
                                </button>
                                <NavDropdown title="Emanuel quiskas" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.4">
                                        <AiOutlinePoweroff />
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </>
    )
}
