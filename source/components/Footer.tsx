import type Directus from '@/types/Directus'

export default function Footer({ API }: { API: Directus }) {

    return (
        <div className='w-full bg-primary text-white'>
            <div className='mx-auto container grid grid-cols-4 justify-items-center py-8'>
                <div className='flex flex-col font-bold text-xl'>
                    <p>Thijmen</p>
                    <p>Heuvelink</p>
                </div>
                <div>
                    <p className='font-semibold text-lg'>Personal</p>
                    <div>
                        <p>Skills</p>
                        <p>Projects</p>
                    </div>
                </div>
                <div>
                    <p className='font-semibold text-lg'>Education</p>
                    <div>
                        <p>Courses</p>
                        <p>Internships</p>
                    </div>
                </div>
                <div>
                    <p className='font-semibold text-lg'>Services</p>
                    <div>
                        <p>Wiki</p>
                        <p>Status</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
