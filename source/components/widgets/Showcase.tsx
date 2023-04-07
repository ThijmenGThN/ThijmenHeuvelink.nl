import Link from "next/link"
import { FaExternalLinkSquareAlt } from "react-icons/fa"
import { FiArrowRight } from "react-icons/fi"

interface projectType {
    image: string
}

export default function Component({projects}: {projects: Array<projectType>}) {

    return (
        <div className="flex flex-col -my-5">
            <div className="relative mx-5 flex rounded opacity-50">
                <img className="object-cover aspect-video w-full rounded"
                    src={`${projects[1].image}`}
                    alt="Project" 
                />
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-white via-transparent to-transparent" />
            </div>

            <Link href="/projects" className="z-10 relative flex rounded -my-32 md:-my-16 lg:-my-32">
                <img className="object-cover aspect-video w-full rounded transition-all hover:scale-105 hover:cursor-pointer"
                    src={`${projects[0].image}`}
                    alt="Project" 
                    />

                <div className="absolute flex justify-end -bottom-5 left-0 w-full px-10">
                    <div className="flex items-center gap-6 bg-gradient-to-r from-blue-500/80 to-purple-500/80 backdrop-blur px-6 py-2 rounded transition-all hover:cursor-pointer hover:brightness-95 hover:-mx-2 hover:-my-1 hover:px-8 hover:py-3">
                        <p className="text-white uppercase font-mono font-semibold">
                            projects
                        </p>

                        <div className="-rotate-90">
                            <div className="animate-bounce">
                                    <FiArrowRight className="rotate-90 text-xl text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>

            <div className="relative mx-5 flex rounded opacity-50">
                <img className="object-cover aspect-video w-full rounded"
                    src={`${projects[2].image}`}
                    alt="Project" 
                />
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent via-transparent to-white " />
            </div>
        </div>
    )
}
