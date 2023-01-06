import { FiMenu } from 'react-icons/fi'
import type Directus from '@/types/Directus'
import Link from 'next/link'

export default function Navbar({ API }: { API: Directus }) {

    return (
        <>
            <div className='fixed top-0 left-0 w-full font-semibold'>
                <div className='container mx-auto mt-2 bg-white/40 rounded-lg overflow-hidden border-b-2 border-black'>
                    <div className='flex backdrop-blur-3xl p-2 gap-4'>
                        <Link href='/' className='ml-2 mt-1 hover:cursor-pointer hover:italic'>Thijmen Heuvelink</Link>

                        <div className='grow' />

                        <Link href="https://wiki.thijmenheuvelink.nl" className='mt-1.5 text-sm hover:cursor-pointer hover:italic'>wiki</Link>
                        <button className='text-white px-4 py-2 rounded bg-black hover:cursor-pointer hover:-m-1 hover:px-5 hover:py-3 transition-all'>
                            <FiMenu />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
