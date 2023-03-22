import Link from "next/link";

export default function Component() {

    return (
        <div className='bg-gradient-to-r from-blue-500 to-purple-500 py-16'>
            <div className="mx-auto container">
                <div className="flex flex-col gap-4 md:gap-8 mx-8 rounded-xl bg-dark p-8 md:p-16">
                    <p className="text-white font-bold text-xl md:text-5xl">Ready, to create wonderful things - my inbox is always open.</p>
                    <p className="text-neutral-200 m:text-lg">From sharing thoughts to discussing solutions, I&#x27;m up for it all. Let&#x27;s chat!</p>
                    <Link className="hover:bg-neutral-200 bg-white rounded-lg px-4 py-2 md:py-4 md:px-6 mr-auto" href="mailto:mail@thijmenheuvelink.nl">Get in touch</Link>
                </div>
            </div>
        </div>
    )
}
