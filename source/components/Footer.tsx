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
                    <ul>
                        <li>Skills</li>
                        <li>Projects</li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div>
                    <p className='font-semibold text-lg'>Education</p>
                    <ul>
                        <li>Courses</li>
                        <li>Internships</li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div>
                    <p className='font-semibold text-lg'>Services</p>
                    <ul>
                        <li>Wiki</li>
                        <li>Status</li>
                        <li>Services</li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
