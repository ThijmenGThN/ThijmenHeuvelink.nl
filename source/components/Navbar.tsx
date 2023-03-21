import Link from 'next/link'

import { FiAlignRight } from 'react-icons/fi'

export default function Component() {

    return (
        <div className='container mx-auto p-4 flex'>
            <Link href="/">
                <p className='text-2xl p-4 font-semibold'>
                    Thijmen Heuvelink
                </p>
            </Link>

            <button className='ml-auto text-3xl font-semibold p-4'>
                <FiAlignRight />
            </button>
        </div>
    )
}
