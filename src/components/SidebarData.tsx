import { BiHomeCircle } from 'react-icons/bi'
import { FaGithubAlt } from 'react-icons/fa'

export const SidebarData = [
    {
        path: '/dashboard',
        title: 'Dashboard',
        icon: <BiHomeCircle style={{ marginRight: 10 }} />,
        cName: 'nav-text',
    },
    {
        path: '/example',
        title: 'Example',
        icon: <FaGithubAlt style={{ marginRight: 10 }} />,
        cName: 'nav-text',
    },
]
