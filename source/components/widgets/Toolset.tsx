import Marquee from "react-fast-marquee"

import { FaCoffee, FaCss3 } from 'react-icons/fa'
import { SiHtml5, SiJavascript, SiLua, SiPhp, SiPostgresql, SiPython } from 'react-icons/si'
import { TbBrandTypescript, TbFileDescription, TbScript } from 'react-icons/tb'

import { shuffle } from '@/resources/utils/array'

interface toolType {
    name: string
    icon: any
}

const tools = [
    {
        name: 'Javascript',
        icon: <SiJavascript />
    },
    {
        name: 'Java',
        icon: <FaCoffee />
    },

    {
        name: 'Typescript',
        icon: <TbBrandTypescript />
    },
    {
        name: 'Lua',
        icon: <SiLua />
    },
    {
        name: 'Batch',
        icon: <TbFileDescription />
    },
    {
        name: 'PHP',
        icon: <SiPhp />
    },
    {
        name: 'CSS',
        icon: <FaCss3 />
    },
    {
        name: 'HTML',
        icon: <SiHtml5 />
    },
    {
        name: 'Python',
        icon: <SiPython />
    },
    {
        name: 'SQL',
        icon: <SiPostgresql />
    }
]

export default function Component() {

    return (
        <Marquee className="py-12 bg-dark-active overflow-hidden"
            pauseOnHover
            speed={40}
            gradientColor={[64, 64, 64]}
            gradientWidth={100}
        >
            {
                shuffle(tools).map((tool: toolType, index: number) => (
                    <div key={index} className='flex items-center gap-4 ml-16'>
                        <p className='text-3xl text-neutral-100'>
                            {tool.icon}
                        </p>
                        <p className='text-2xl text-neutral-100'>
                            {tool.name}
                        </p>
                    </div>
                ))
            }
        </Marquee>
    )
}
