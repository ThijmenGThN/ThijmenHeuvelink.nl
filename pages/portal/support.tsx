import { FiCheck, FiCheckCircle, FiLogOut } from 'react-icons/fi'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import axios from 'axios'

import type Directus from '@/types/Directus'

import Navbar from '@/components/Navbar'
import User from '@/components/portal/User'
import Switcher from '@/components/portal/Switcher'

export default function Index({ API }: { API: Directus }) {
  const [me, setMe] = useState<any>()
  const [content, setContent] = useState<string>('')
  const [confirmed, setConfirmed] = useState<boolean>(false)

  const mail = async () => {
    if (confirmed) return
    await axios.post(API._url + '/flows/trigger/fa3579a0-1e07-481e-855e-19be69eb85b4', { author: me.email, content })
    setContent('')
    setConfirmed(true)
    setTimeout(() => setConfirmed(false), 5000)
  }

  useEffect(() => {
    API.users.me.read()
      .then((data: any) => setMe(data))
      .catch(() => window.location.replace('/portal/login'))
  }, [API])

  return (
    <>
      <Navbar />

      <div className='mt-16 mx-auto container'>
        <User me={me} />

        <div className='flex mt-4 gap-2'>
          <Switcher link='support' />

          <div className='grow rounded-lg bg-white w-full flex-col border px-4 py-2 flex gap-2'>
            <div className='flex items-center gap-2'>
              <p className='font-semibold'>Support</p>
              {
                confirmed && (
                  <div className='rounded-full bg-green-500 text-white p-1'>
                    <FiCheck />
                  </div>
                )
              }
            </div>
            <textarea placeholder="Write a detailed description of your inquiry.." value={content} className='border text-sm bg-neutral-100 rounded grow py-2 px-4' onChange={({ target }) => setContent(target.value)}></textarea>

            <div className='ml-auto'>
              <button onClick={() => content.length >= 25 && mail()} className="bg-black rounded text-white px-4 py-2 hover:-m-1 hover:px-5 hover:py-3">{content.length >= 25 ? 'Send' : `${content.length}/25`}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
