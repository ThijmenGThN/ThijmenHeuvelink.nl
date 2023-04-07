import Toolset from '@/components/widgets/Toolset'

import { FaCoffee, FaCss3 } from 'react-icons/fa'
import { SiHtml5, SiJavascript, SiLua, SiPhp, SiPostgresql, SiPython } from 'react-icons/si'
import { TbBrandTypescript, TbFileDescription } from 'react-icons/tb'

const skills = [
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

export default () => {

    return (
        <>
            <Toolset color='#2d2d2d' direction='right' tools={skills} dark />
            <div className='pb-36 bg-dark py-16'>
                <div className='mx-auto container text-neutral-100 px-8'>

                    <p className='font-semibold text-neutral-100 text-lg'></p>

                </div>
            </div>
        </>
    )
}
