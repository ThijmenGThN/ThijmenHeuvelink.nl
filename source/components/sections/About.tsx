import Image from 'next/image'

import type Directus from '@/types/Directus'

import Splash from '@/resources/splash.jpeg'

export default function About({ API }: { API: Directus }) {

    return (
        <>
            <div className='bg-neutral-300 min-h-[400px]'>
                <Image src={Splash} alt="Splash" width="4032" height="2268" />
            </div>

            <div className='mx-auto container py-8 bg-neutral-100'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam, eius eaque dignissimos corporis laboriosam aperiam ipsa veritatis assumenda, doloribus dolor explicabo doloremque voluptas quasi saepe ipsam! Fugit, ipsum recusandae!
            </div>
        </>
    )
}