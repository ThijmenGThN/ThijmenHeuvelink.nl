import { FiLogOut, FiUser } from 'react-icons/fi'

export default function User({ me }: { me: any }) {

    return (
        <div className="rounded-lg bg-white w-full border px-4 py-2 flex gap-2 items-center">
            <div className='px-4 py-2 bg-primary text-white rounded'>
                {me ? me.shortcode : '•••'}
            </div>

            <p className='grow text-center font-semibold'>Hi {me ? me.first_name : '•••••••'}</p>

            <div onClick={() => window.location.replace('/portal/login')} className='px-4 py-3 rounded bg-red-500 text-white flex gap-2 items-center hover:cursor-pointer hover:-m-1 hover:px-5 hover:py-4 transition-all'>
                <FiLogOut />
            </div>
        </div>
    )
}
