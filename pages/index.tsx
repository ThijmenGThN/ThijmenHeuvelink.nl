import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import InTouch from '@/components/widgets/InTouch'
import Toolset from '@/components/widgets/Toolset'

export default function Component() {

  return (
    <>
      <NavBar />

      <div className='container mx-auto px-8 my-72 grid grid-cols-1 gap-16 md:grid-cols-2'>
        <div className='bg-green-500/50'>
          <p>Passionate about code, relentless in learning, dedicated to helping.</p>
        </div>
        <div className='bg-red-500/50'>
          a
        </div>
      </div>

      <Toolset />

      <div className='pb-96 bg-dark text-neutral-100 py-16'>
        <div className='mx-auto container px-8'>
          abc
        </div>
      </div>

      <InTouch />
      <Footer />
    </>
  )
}
