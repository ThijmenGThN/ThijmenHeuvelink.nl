import type Directus from '@/types/Directus'

import Navbar from '@/components/Navbar'
import { useEffect, useState } from 'react'

export default function Menu({ API }: { API: Directus }) {
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()
  const [reject, setReject] = useState<string>()

  const login = async () => {
    try {
      await API.auth.login({ email, password })
      window.location.replace('/portal')
    } catch (err: any) {
      setReject(err.errors[0].message)
    }
  }

  useEffect(() => {
    API.auth.logout()
  }, [API])

  return (
    <>
      <Navbar />

      <div className='min-h-screen w-1/2 min-w-[256px] mx-auto flex justify-center items-center flex-col font-semibold gap-2' onKeyUp={({ key }) => key == "Enter" && login()}>
        <p className='text-3xl font-bold mb-8'>Portal</p>
        <div className='w-full group'>
          <p className='group-hover:italic text-sm'>E-mail</p>
          <input onChange={({ target }) => setEmail(target.value)} className='bg-white border px-4 py-2 w-full rounded-lg group-hover:italic' placeholder='user@heuve.link' type="text" />
        </div>
        <div className='w-full group'>
          <p className='group-hover:italic text-sm'>Password</p>
          <input onChange={({ target }) => setPassword(target.value)} className='bg-white border px-4 py-2 w-full rounded-lg group-hover:italic' placeholder='••••••••' type="password" />
        </div>
        <button onClick={login} className='bg-black text-white px-4 py-2 rounded-lg w-1/2 ml-auto hover:-my-1 hover:py-3'>Login</button>

        {
          reject && (
            <p className='w-full px-4 py-2 bg-red-400 text-white text-center rounded italic text-sm'>
              {reject}
            </p>
          )
        }
      </div>
    </>
  )
}
