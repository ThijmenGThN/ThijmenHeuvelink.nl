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
        <div className='flex flex-col gap-2'>
          <p className="text-3xl font-bold">Hi,</p>
          <p className="text-6xl font-bold">I'm Thijmen</p>
          <p className="text-xl italic mt-8">Passionate about code, relentless in learning, dedicated to helping.</p>
        </div>
        <div className='flex justify-center items-center'>
          <p className='font-semibold text-lg'>This website is in the works, hold on it'll be amazing in no time!</p>
        </div>
      </div>

      <Toolset color='#fafafa' direction='left' tools={tools} />
      <div className='pb-96 bg-neutral-100 py-16'>
        <div className='mx-auto container px-8'>
          {/* soon */}
        </div>
      </div>

      <Toolset color='#2d2d2d' direction='right' tools={skills} dark />
      <div className='pb-96 bg-dark text-neutral-100 py-16'>
        <div className='mx-auto container px-8'>
          {/* soon */}
        </div>
      </div>

      <InTouch />

      <Footer />
    </>
  )
}
