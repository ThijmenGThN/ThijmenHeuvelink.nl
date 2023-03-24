import Link from 'next/link'

import { FiAlignRight } from 'react-icons/fi'

export default function Component() {

    return (
        <div className='container mx-auto p-4 flex items-center'>
            <Link href="/">
                <p className='uppercase rounded bg-dark text-neutral-100 text-2xl px-4 py-2 font-bold'>
                    Heuvelink
                </p>
            </Link>

            <button className='ml-auto text-3xl font-semibold p-4'>
                <FiAlignRight />
            </button>
        </div>
    )
}
