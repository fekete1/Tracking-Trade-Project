import { NextPage } from 'next'
import Link from 'next/link'

import { ReactElement, useState } from 'react'
import { Container } from 'react-bootstrap'
import { SidebarData } from './SidebarData'

interface SideMenuProps {
    children: ReactElement | ReactElement[]
}
export function SideMenu({ children }: SideMenuProps) {
    const [sideMenuIsOpen, setSideMenuIsOpen] = useState(false)

    const toggleSideMenu = () => {
        setSideMenuIsOpen(sideMenuIsOpen => !sideMenuIsOpen)
    }

    return (
        <>
            <div id="sidebar-main-container">
                <nav className={sideMenuIsOpen ? 'sidebar sidebar-expanded' : 'sidebar sidebar-compressed'}>
                    <ul>
                        <span className="menu-label">menu</span>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link href={item.path}>
                                        <a>
                                            <span className="page-icon">{item.icon}</span>
                                            <span className="page-title">{item.title}</span>
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
