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
        <div className='fixed flex flex-col top-1/2 left-4 rounded-lg overflow-hidden backdrop-blur-3xl bg-white/40 border-r-2 border-black'>
            <ul>
                {
                    applets.map((app, index) => (
                        <li key={index} className='hover:cursor-pointer p-4'>
                            {app.icon}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
