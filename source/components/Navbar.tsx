import { FiMenu } from 'react-icons/fi'
import Link from 'next/link'

export default function Navbar() {

    return (
        <>
            <div className='fixed top-0 left-0 w-full font-semibold bg-white border-b'>
                <div className='container mx-auto'>
                    <div className='flex backdrop-blur-3xl p-2 gap-4'>
                        <Link href='/' className='mt-1 hover:cursor-pointer hover:italic'>Thijmen Heuvelink</Link>

                        <div className='grow' />

                        <Link href="https://wiki.thijmenheuvelink.nl" className='mt-1.5 text-sm hover:cursor-pointer hover:italic'>wiki</Link>
                        <Link href="/menu" className='text-white px-4 py-2 rounded bg-black hover:cursor-pointer hover:-m-1 hover:px-5 hover:py-3 transition-all'>
                            <FiMenu />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
