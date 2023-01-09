import Link from 'next/link'
import { FiCreditCard, FiGrid, FiHome, FiKey, FiLifeBuoy, FiLogOut, FiMessageSquare, FiPackage, FiPower } from 'react-icons/fi'

const applets = [
    // {
    // link: '',
    // icon: <FiGrid />
    // },
    // {
    // link: 'payments',
    // icon: <FiCreditCard />
    // },
    {
        link: 'credentials',
        icon: <FiKey />
    },
    {
        link: 'support',
        icon: <FiMessageSquare />
    }
]

export default function Switcher({ link }: { link: string }) {

    return (
        <ul className="rounded-lg bg-white border p-2 flex flex-col gap-2 mb-auto">
            {
                applets.map((app, index) => (
                    <Link href={'/portal/' + app.link} key={index} className={link == app.link ? 'bg-black text-white p-4 rounded hover:-m-1 hover:p-5 transition-all' : 'bg-neutral-100 p-4 hover:-m-1 hover:p-5 rounded'}>
                        {app.icon}
                    </Link>
                ))
            }
        </ul>
    )
}
