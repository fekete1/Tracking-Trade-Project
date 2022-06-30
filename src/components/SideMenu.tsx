import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactElement, useContext, useState } from 'react'

import { ToggleSideMenuContext } from '../contexts/ToggleSideMenuContext'
import { SidebarData } from './SidebarData'

interface SideMenuProps {
    children: ReactElement | ReactElement[]
}
export function SideMenu({ children }: SideMenuProps) {
    const { sideMenuIsOpen } = useContext(ToggleSideMenuContext)
    const router = useRouter()

    return (
        <div id="sidebar-main-container">
            <nav className={sideMenuIsOpen ? 'sidebar sidebar-expanded' : 'sidebar sidebar-compressed'}>
                <ul>
                    <span className="menu-label">menu</span>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={router.pathname == item.path ? 'active' : ''}>
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
    )
}
