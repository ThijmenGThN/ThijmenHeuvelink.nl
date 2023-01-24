import { useEffect } from 'react'

import type Directus from '@/types/Directus'

import Navbar from '@/components/Navbar'

export default function Index({ API }: { API: Directus }) {
  useEffect(() => {
    API.users.me.read()
      .then(() => window.location.replace('/portal/credentials/'))
      .catch(() => window.location.replace('/portal/login'))
  }, [API])

  return (
    <>
      <Navbar />

      <div className='min-h-screen flex flex-col justify-center items-center'>
        <div>
          <p className='text-xl font-bold'>You are being redirected,</p>
          <p className='text-sm'>this will take less than a jiffy.</p>
        </div>
      </div>
    </>
  )
}
