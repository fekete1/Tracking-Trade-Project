import { Nav } from 'react-bootstrap'
import Link from 'next/link'

import { BiHomeCircle } from 'react-icons/bi'
import { FaGithubAlt } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa'

export function SideMenu() {
    return (
        <>
            <Nav>
                <ul>
                    <li>
                        <Link href="/dashboard">
                            <a>
                                <BiHomeCircle />
                                Dashboard
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/example">
                            <a>
                                <FaGithubAlt />
                                Example
                            </a>
                        </Link>
                    </li>
                </ul>
            </Nav>
        </>
    )
}
