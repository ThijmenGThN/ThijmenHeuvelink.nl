import { VscGithub } from 'react-icons/vsc'

export default function Index() {
  return (
    <div className="grid h-screen text-center bg-gray-100 place-items-center">
      <div className="w-full p-10 bg-white border-gray-200 border-y-4">
        <b className="my-10">Thijmen Heuvelink</b>
        <br />
        <i>A developer from The Netherlands</i>

        <div className="my-10">
          <a href="mailto:mail@thijmenheuvelink.nl"
            className="px-4 py-2 mx-2 transition duration-500 border-2 border-black rounded hover:bg-black hover:text-white"
          >contact</a>

          <a href="https://github.com/ThijmenGThN"
            className="px-4 py-2 mx-2 transition duration-500 border-2 border-black rounded hover:bg-black hover:text-white"
          >
            <button>
              <VscGithub />
            </button>
          </a>

          <a href="mailto:support@thijmenheuvelink.nl"
            className="px-4 py-2 mx-2 transition duration-500 border-2 border-black rounded hover:bg-black hover:text-white"
          >support</a>
        </div>

        <p className="mt-10">~ { new Date().getFullYear() } ~</p>
      </div>
    </div>
  )
}
