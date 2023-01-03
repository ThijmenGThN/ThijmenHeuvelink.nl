import { FiHome } from 'react-icons/fi'

import type Directus from '@/types/Directus'

const applets = [
    {
        link: '/',
        icon: <FiHome />
    }
]

export default function Hotbar({ API }: { API: Directus }) {

    return (
        <ul className='fixed flex flex-col top-1/2 left-4 rounded-lg border overflow-hidden backdrop-blur-3xl'>
            {
                applets.map(app => (
                    <li className='hover:cursor-pointer p-4'>
                        {app.icon}
                    </li>
                ))
            }
        </ul>
    )
}
