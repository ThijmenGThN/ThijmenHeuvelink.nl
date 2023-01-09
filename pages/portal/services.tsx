import { FiLogOut } from 'react-icons/fi'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import type Directus from '@/types/Directus'

import Navbar from '@/components/Navbar'
import User from '@/components/portal/User'
import Switcher from '@/components/portal/Switcher'

export default function Index({ API }: { API: Directus }) {
  const [me, setMe] = useState<any>()
  const [services, setServices] = useState<any>()

  useEffect(() => {
    API.users.me.read()
      .catch(() => window.location.replace('/portal/login'))
      .then((_me: any) => {
        setMe(_me)
        API.items('projects').readByQuery({ limit: -1 })
          .then((_services: any) => setServices(_services.data))
      })
  }, [API])

  return (
    <>
      <Navbar />

      <div className='mt-16 mx-auto container'>
        <User me={me} />

        <div className='flex mt-4 gap-2'>
          <Switcher link='services' />

          <div className='grow rounded-lg bg-white w-full border px-4 py-2 flex flex-col gap-2'>
            <p className='font-semibold'>Services</p>

            <ul className='px-4 py-2 border bg-neutral-100 rounded'>
              {
                services && services.map((service: any, index: number) => (
                  <li key={index} className='grid grid-cols-2'>
                    <p className='font-bold'>Project</p>
                    <p className='font-bold'>Name</p>
                    <p>{service.shortcode}</p>
                    <p>{service.name}</p>

                    <p className='font-bold mt-4'>Due Date</p>
                    <p className='font-bold mt-4'>Price</p>
                    <p>{service.due}</p>
                    <p>€{service.price} {service.monthly && '/ month'}</p>

                    {index < services.length - 1 && (<hr className='col-span-2 my-4' />)}
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
