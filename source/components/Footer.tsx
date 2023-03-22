
import Link from 'next/link'
import { FaDiscord, FaGithub } from 'react-icons/fa'

interface itemType {
    name: string
    link: string
}

const personal = [
    {
        name: 'Courses (soon)',
        link: '#'
    },
    {
        name: 'Internships (soon)',
        link: '#'
    }
]

const business = [
    {
        name: 'Projects',
        link: '#'
    },
    {
        name: 'Testimonials (soon)',
        link: '#'
    }
]

interface socialType {
    name: string
    icon: any
    link?: string
    color: {
        normal: string
        hover?: string
    }
}

const socials = [
    {
        name: 'ThijmenGThN',
        icon: <FaGithub />,
        link: 'https://github.com/ThijmenGThN',
        color: {
            normal: 'bg-dark',
            hover: 'bg-dark-active'
        }
    },
    {
        name: 'ThijmenGThN#2684',
        icon: <FaDiscord />,
        color: {
            normal: 'bg-[#5865F2]'
        }
    }
]

export default function Component() {

    return (
        <div className="bg-white px-8 py-10">
            <div className="container mx-auto py-8 flex flex-col gap-8">
                <p className="text-2xl font-semibold">
                    Thijmen Heuvelink
                </p>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="font-semibold">Personal</p>
                        <ul>
                            {
                                personal.map((item: itemType, index: number) => (
                                    <li className='hover:cursor-pointer group w-2/3' key={index}>
                                        <Link href={item.link}>
                                            <div className='rounded -mx-4 px-4 py-2 group-hover:bg-neutral-100'>
                                                {item.name}
                                            </div>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold">Business</p>
                        <ul>
                            {
                                business.map((item: itemType, index: number) => (
                                    <li className='hover:cursor-pointer group w-2/3' key={index}>
                                        <Link href={item.link}>
                                            <div className='rounded -mx-4 px-4 py-2 group-hover:bg-neutral-100'>
                                                {item.name}
                                            </div>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                <div className='flex flex-col gap-4'>
                    <p className="font-semibold">Socials</p>
                    <ul className="flex flex-wrap gap-4">
                        {
                            socials.map((social: socialType, index: number) =>
                                social.link
                                    ? (
                                        <li key={index} className="group hover:cursor-pointer">
                                            <Link href={social.link} target="_blank">
                                                <div className='flex items-center'>
                                                    <div className={'text-neutral-100 p-3 rounded-l ' + social.color.normal + ` hover:${social.color.hover}`}>
                                                        {social.icon}
                                                    </div>
                                                    <p className='font-mono bg-neutral-100 px-4 py-2 rounded-r group-hover:bg-neutral-200'>{social.name}</p>
                                                </div>
                                            </Link>
                                        </li>
                                    )
                                    : (
                                        <li key={index}>
                                            <div className='flex items-center'>
                                                <div className={'text-neutral-100 p-3 rounded-l ' + social.color.normal}>
                                                    {social.icon}
                                                </div>
                                                <p className='font-mono bg-neutral-100 px-4 py-2 rounded-r'>{social.name}</p>
                                            </div>
                                        </li>
                                    )
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
