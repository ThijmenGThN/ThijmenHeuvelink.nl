export default function NavBar() {
  return (
    <div className="container mx-auto flex m-8 mb-16 flex-nowrap">
      <div className="flex-grow h-full p-2 sm:p-0">
        <p className="font-bold">Thijmen Heuvelink</p>
        <p className="text-zinc-500 italic hidden sm:block text-sm">A software developer from The Netherlands</p>
      </div>
      
      <ul className="flex flex-row gap-4 ml-10">
        <li>
          <button 
            className="h-full px-4 mx-2 hover:border-b-2 transition-all border-black"
            onClick={() => open('https://wiki.thijmenheuvelink.nl')}
          >
            WIKI
          </button>
        </li>
        <li>
          <button 
            className="bg-black hover:-mx-1 hover:px-7 transition-all text-white h-full px-6 rounded-full"
            onClick={() => open('mailto:support@thijmenheuvelink.nl')}
          >
            Support
          </button>
        </li>
      </ul>
	  </div>
  )
}
