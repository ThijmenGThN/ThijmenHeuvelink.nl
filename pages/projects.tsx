import Footer from '@/components/Footer'
import NavBar from '@/components/Navbar'
import InTouch from '@/components/pages/InTouch'

export default function Component() {

  return (
    <>
      <NavBar />

      <div className='container mx-auto px-8 my-36 grid grid-cols-1 gap-16 md:grid-cols-2'>
        <div className='flex flex-col gap-2'>
          <p className="text-3xl font-bold">This is in the works!</p>
          <p className="text-6xl font-bold">Check back soon.</p>
        </div>
      </div>
      <InTouch />

      <Footer />
    </>
  )
}
