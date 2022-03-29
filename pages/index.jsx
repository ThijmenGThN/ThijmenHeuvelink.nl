import { VscGithub } from 'react-icons/vsc'

export default function Index() {
  return (
    <div className="bg-red-100 text-center grid place-items-center h-screen">
      <div className="bg-white w-full p-10">
        <b className="my-10">Thijmen Heuvelink</b>
        <br />
        <i>A developer from The Netherlands</i>

        <div className="my-10">
          <a href="mailto:mail@thijmenheuvelink.nl"
            className="transition duration-500 border-2 border-black rounded mx-2 py-2 px-4 hover:bg-black hover:text-white hover:border-none"
          >contact</a>

          <a href="https://github.com/ThijmenGThN"
            className="transition duration-500 border-2 border-black rounded mx-2 py-2 px-4 hover:bg-black hover:text-white hover:border-none"
          >
            <button>
              <VscGithub />
            </button>
          </a>

          <a href="mailto:support@thijmenheuvelink.nl"
            className="transition duration-500 border-2 border-black rounded mx-2 py-2 px-4 hover:bg-black hover:text-white hover:border-none"
          >support</a>
        </div>

        <p className="mt-10">~ { new Date().getFullYear() } ~</p>
      </div>
    </div>
  )
}
