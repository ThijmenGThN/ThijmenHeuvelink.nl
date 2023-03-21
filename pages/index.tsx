import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import InTouch from '@/components/widgets/InTouch'
import Toolset from '@/components/widgets/Toolset'

import { FaBootstrap, FaCoffee, FaCss3, FaNodeJs, FaReact, FaWordpress } from 'react-icons/fa'
import { SiDirectus, SiHtml5, SiJavascript, SiLua, SiPhp, SiPostgresql, SiPrisma, SiPython, SiTailwindcss } from 'react-icons/si'
import { TbBrandLaravel, TbBrandNextjs, TbBrandTypescript, TbFileDescription, TbScript } from 'react-icons/tb'

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

const tools = [
  {
    name: 'React',
    icon: <FaReact />
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

export default function Component() {

  return (
    <>
      <NavBar />

      <div className='container mx-auto px-8 my-72 grid grid-cols-1 gap-16 md:grid-cols-2'>
        <div className='bg-green-500/50'>
          <p>Passionate about code, relentless in learning, dedicated to helping.</p>
        </div>
        <div className='bg-red-500/50'>
          a
        </div>
      </div>

      <Toolset color='#fafafa' direction='left' tools={tools} />
      <div className='pb-96 bg-neutral-100 py-16'>
        <div className='mx-auto container px-8'>
          abc
        </div>
      </div>

      <Toolset color='#2d2d2d' direction='right' tools={skills} dark />
      <div className='pb-96 bg-dark text-neutral-100 py-16'>
        <div className='mx-auto container px-8'>
          abc
        </div>
      </div>

      <InTouch />

      <Footer />
    </>
  )
}
