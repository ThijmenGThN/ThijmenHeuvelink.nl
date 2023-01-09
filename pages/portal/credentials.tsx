import { FiLogOut } from 'react-icons/fi'
import parser from 'react-html-parser'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import type Directus from '@/types/Directus'

import Navbar from '@/components/Navbar'
import User from '@/components/portal/User'
import Switcher from '@/components/portal/Switcher'

export default function Index({ API }: { API: Directus }) {
  const [me, setMe] = useState<any>()
  const [show, setShow] = useState<boolean>(false)

  useEffect(() => {
    API.users.me.read()
      .catch(() => window.location.replace('/portal/login'))
      .then((data: any) => setMe(data))
  }, [API])

  return (
    <>
      <Navbar />

      <div className='mt-16 mx-auto container'>
        <User me={me} />

        <div className='flex mt-4 gap-2'>
          <Switcher link='credentials' />

          <div className='grow rounded-lg bg-white w-full border px-4 py-2 flex flex-col gap-2 min-h-[180px]'>
            <p className='font-semibold'>Credentials</p>
            <div className='bg-neutral-100 rounded px-4 py-2 w-full parser h-full border relative overflow-hidden'>
              {
                me && parser(me.credentials)
              }

              {
                !show && (
                  <div className='backdrop-blur absolute left-0 top-0 w-full h-full flex justify-center items-center'>
                    <button className='bg-black text-white px-4 py-2 rounded hover:-m-1 hover:px-5 hover:py-3 transition-all' onClick={() => setShow(true)}>Show</button>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
