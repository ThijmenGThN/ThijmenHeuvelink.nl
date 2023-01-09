import type Directus from '@/types/Directus'
import Link from 'next/link'

import Navbar from '@/components/Navbar'

const applets = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "Portal",
    link: "/portal"
  }
]

export default function Menu({ API }: { API: Directus }) {

  return (
    <>
      <Navbar />

      <ul className='min-h-screen w-1/2 min-w-[256px] mx-auto flex justify-center items-center flex-col font-semibold gap-2'>
        {
          applets.map(({ name, link }, index) => (
            <Link href={link} key={index} className="w-full">
              <div className='px-4 py-2 border hover:-m-1 hover:py-3 text-center hover:cursor-pointer bg-white hover:bg-black transition-all hover:text-white rounded-lg'>
                {name}
              </div>
            </Link>
          ))
        }
      </ul>
    </>
  )
}
