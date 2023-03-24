import Marquee from "react-fast-marquee"
import hexRgb from 'hex-rgb'

import { shuffle } from '@/resources/utils/array'

interface toolType {
    name: string
    icon: any
}

interface propTypes {
    color: string
    dark?: boolean
    direction: 'left' | 'right'
    tools: Array<toolType>
}

export default function Component({ color, tools, direction, dark }: propTypes) {
    const { red, green, blue } = hexRgb(color)

    return (
        <Marquee className='py-12 overflow-hidden'
            style={{ backgroundColor: color }}
            direction={direction}
            speed={40}
            gradientColor={[red, green, blue]}
            gradientWidth={100}
        >
            {
                shuffle(tools).map((tool: toolType, index: number) => (
                    <div key={index} className='flex items-center gap-4 ml-16'>
                        <p className={'text-3xl ' + (dark && 'text-neutral-100')}>
                            {tool.icon}
                        </p>
                        <p className={'text-2xl ' + (dark && 'text-neutral-100')}>
                            {tool.name}
                        </p>
                    </div>
                ))
            }
        </Marquee >
    )
}
