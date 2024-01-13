
export default function About() {

    return (
        <div className="w-screen bg-gray-100">
            <div className="container mx-auto flex flex-col gap-y-12 py-24">
                <div className="mx-auto">
                    <p className="rounded-full bg-gray-300 px-4 py-0.5 text-gray-600 font-semibold">
                        About me
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-x-16">
                    <div>
                        image
                    </div>

                    <div>
                        text
                    </div>
                </div>
            </div>
        </div>
    )
}
