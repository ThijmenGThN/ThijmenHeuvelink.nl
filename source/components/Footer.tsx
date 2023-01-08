
export default function Footer() {

    return (
        <div className='w-full bg-primary text-white border-t-4 border-secondary'>
            <div className='mx-auto container grid grid-cols-4 justify-items-center py-8'>
                <div className='flex flex-col font-bold'>
                    <p>Thijmen</p>
                    <p>Heuvelink</p>
                </div>
                <div>
                    <p className='font-semibold'>Personal</p>
                    <div>
                        <p className='hover:italic hover:cursor-pointer'>Skills</p>
                        <p className='hover:italic hover:cursor-pointer'>Projects</p>
                    </div>
                </div>
                <div>
                    <p className='font-semibold'>Education</p>
                    <div>
                        <p className='hover:italic hover:cursor-pointer'>Courses</p>
                        <p className='hover:italic hover:cursor-pointer'>Internships</p>
                    </div>
                </div>
                <div>
                    <p className='font-semibold'>Services</p>
                    <div>
                        <p className='hover:italic hover:cursor-pointer'>Wiki</p>
                        <p className='hover:italic hover:cursor-pointer'>Status</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
