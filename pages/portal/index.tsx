import { FiLogOut } from 'react-icons/fi'
import type Directus from '@/types/Directus'

import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function Index({ API }: { API: Directus }) {

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar API={API} />
    </div>
  )
}
