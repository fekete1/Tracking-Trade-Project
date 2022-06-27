import Link from 'next/link'

import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { SidebarData } from './SidebarData'

export function SideMenu({ children }) {
    const [sideMenuIsOpen, setSideMenuIsOpen] = useState(false)

    const toggleSideMenu = () => {
        setSideMenuIsOpen(sideMenuIsOpen => !sideMenuIsOpen)
    }

    return (
        <>
            <div id="sidebar-main-container">
                <nav className="sidebar">
                    <ul>
                        <span className="menu-label">menu</span>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link href={item.path}>
                                        <a>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </a>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                <main className="children">{children}</main>
            </div>
        </>
    )
}

{
    /* <ul>
                        <li>
                            <Link href="/dashboard">
                                <a>

                                    Dashboard
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/example">
                                <a>

                                    Example
                                </a>
                            </Link>
                        </li>
                    </ul> */
}
