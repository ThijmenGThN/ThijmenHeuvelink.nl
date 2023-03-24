import Toolset from '@/components/widgets/Toolset'

import { FaBootstrap, FaNodeJs, FaReact, FaVuejs, FaWordpress } from 'react-icons/fa'
import { SiDirectus, SiPrisma, SiTailwindcss } from 'react-icons/si'
import { TbBrandLaravel, TbBrandNextjs } from 'react-icons/tb'
import { MdOutlineDesignServices } from 'react-icons/md'
import { FiFigma } from 'react-icons/fi'

const tools = [
    {
        name: 'Figma',
        icon: <FiFigma />
    },
    {
        name: 'React',
        icon: <FaReact />
    },
    {
        name: 'Vue',
        icon: <FaVuejs />
    },
    {
        name: 'Fusion 360',
        icon: <MdOutlineDesignServices />
    },
    {
        name: 'NextJS',
        icon: <TbBrandNextjs />
    },
    {
        name: 'Directus',
        icon: <SiDirectus />
    },
    {
        name: 'Laravel',
        icon: <TbBrandLaravel />
    },
    {
        name: 'Prisma',
        icon: <SiPrisma />
    },
    {
        name: 'Tailwind',
        icon: <SiTailwindcss />
    },
    {
        name: 'Bootstrap',
        icon: <FaBootstrap />
    },
    {
        name: 'Wordpress',
        icon: <FaWordpress />
    },
    {
        name: 'Node',
        icon: <FaNodeJs />
    }
]

export default () => {

    return (
        <>
            <Toolset color='#fafafa' direction='left' tools={tools} />
            <div className='pb-36 bg-neutral-100 py-16'>
                <div className='mx-auto container px-8'>

                    <p className='font-semibold text-lg text-center'>This website is in the works, hold on it&apos;ll be amazing in no time!</p>

                </div>
            </div>
        </>
    )
}
