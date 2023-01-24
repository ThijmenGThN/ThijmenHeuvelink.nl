import Image from 'next/image'

import type Directus from '@/types/Directus'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Splash from '@/resources/assets/splash.png'

export default function Index({ API }: { API: Directus }) {

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />

      <div className='mx-auto container mt-28 justify-center flex'>
        <div className='max-w-[512px]'>
          <Image src={Splash} alt="banner" width="512" height="512"></Image>
          <p className='font-semibold mx-6 mb-28'>
            As you have noticed, this website is currently actively being built.

            It is just a matter of time until something amazing happens, keep an eye out for any cool changes!
          </p>
        </div>
      </div>

      <div className='grow' />

      <Footer />
    </div>
  )
}
