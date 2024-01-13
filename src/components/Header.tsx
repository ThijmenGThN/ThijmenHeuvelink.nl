
import { Link } from "@/helpers/navigation"

export default function Header() {

    return (
        <>
            <div className="fixed w-screen">
                <div className="container mx-auto flex justify-between">

                    <p className="font-semibold text-xl my-8">
                        Thijmen Heuvelink
                    </p>

                    <div className="flex gap-x-12 items-center">
                        <div className="flex gap-x-6">
                            <Link href="#">
                                About
                            </Link>
                            <Link href="#">
                                Work
                            </Link>
                            <Link href="#">
                                Testimonials
                            </Link>
                            <Link href="#">
                                Contact
                            </Link>
                        </div>

                        <button className="bg-black text-white rounded-lg px-4 py-2">
                            Download CV
                        </button>
                    </div>

                </div>
            </div>

            <div className="h-24" />
        </>
    )
}
