import Image from 'next/image'

import type Directus from '@/types/Directus'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Whoops from '@/resources/assets/whoops.png'
import Link from 'next/link'

export default function Index({ API }: { API: Directus }) {

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />

      <div className='mx-auto container mt-28 justify-center flex'>
        <div className='max-w-[512px] mx-6 mb-28'>
          <Image src={Whoops} alt="banner" width="512" height="512"></Image>
          <p className='font-semibold'>
            It looks like you are lost, you may use the button below to return to the homepage.
          </p>

          <div className='flex gap-4 my-6'>
            <Link href="/">
              <button className='bg-black rounded text-white px-4 py-2 hover:-m-1 hover:py-3 hover:px-5'>
                Home
              </button>
            </Link>
            <p className='text-sm'>
              If you have got here from somewhere else then you should get in touch with me at <a href="mailto:support@thijmenheuvelink.nl" className='text-primary'>support@thijmenheuvelink.nl</a>
            </p>
          </div>
        </div>
      </div>

      <div className='grow' />

      <Footer />
    </div >
  )
}
