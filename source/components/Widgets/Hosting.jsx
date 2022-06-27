import { BsArrowRight } from 'react-icons/bs'

export default function Hosting({name, hosted}) {
  return (
    <div>
      <p className="mb-2 font-bold">{name}</p>

      <ul className="gap-2 flex flex-col max-h-[350px] overflow-y-scroll">
        {
          hosted.map((client, index) => (
            <li key={index} className="border bg-zinc-100 mr-1 flex rounded">
              <div className="mx-4 my-1 flex-grow">
                <p>
                  <span className="font-bold">
                    {client.tag}
                  </span> - {client.name}
                </p>
                <p className="italic text-zinc-500">{client.description}</p>
              </div>

              <button onClick={() => open(client.link)} className="hover:bg-black hover:text-white text-black text-2xl px-4 m-2 hover:my-1 transition-all rounded">
                <BsArrowRight />
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
