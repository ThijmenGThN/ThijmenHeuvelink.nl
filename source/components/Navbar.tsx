import type Directus from '@/types/Directus'

const applets = [
    {
        link: '/',
        name: 'Skills'
    },
    {
        link: '/',
        name: 'Projects'
    },
    {
        link: '/',
        name: 'Education'
    },
    {
        link: '/',
        name: 'Status'
    },
    {
        link: '/',
        name: 'Wiki'
    },
    {
        link: '/',
        name: 'Contact'
    }
]

export default function Navbar({ API }: { API: Directus }) {

    return (
        <div className='fixed top-0 w-full border-b font-semibold backdrop-blur-3xl'>
            <div className='flex mx-auto container'>
                <div className='p-4 bg-primary text-white'>
                    <p>Thijmen Heuvelink</p>
                </div>

                <div className='grow' />

                <ul className='flex gap-6 p-4'>
                    {
                        applets.map(app => (
                            <li>
                                {app.name}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
