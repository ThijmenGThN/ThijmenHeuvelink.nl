import Directus from '@/resources/lib/directus'

import Footer from '@/components/Footer'
import NavBar from '@/components/Navbar'
import InTouch from '@/components/pages/InTouch'
import Tools from '@/components/pages/Tools'
import Skills from '@/components/pages/Skills'
import Showcase from '@/components/widgets/Showcase'

export default function Component({projects}: {projects: any}) {

  return (
    <>
      <NavBar />

      <div className='container mx-auto px-8 my-36 grid grid-cols-1 gap-16 md:grid-cols-2'>
        <div className='flex flex-col gap-2'>
          <p className="text-3xl font-bold">Hi,</p>
          <p className="text-6xl font-bold">I&apos;m Thijmen</p>
          {/* <p className="text-xl italic mt-8">Passionate about code, relentless in learning, dedicated to helping.</p> */}
        </div>
        
        <Showcase projects={projects} />
      </div>

      <Tools />
      <Skills />
      <InTouch />

      <Footer />
    </>
  )
}

export async function getServerSideProps() {
  let props: any = {}

  const SDK = await Directus({ useAdmin: true })

  let { data } = await SDK.items('projects').readByQuery({sort: ['-date_updated']})

  if (data)
    props['projects'] = data.map((project: any) => ({
      image: SDK.url + '/assets/' + project.image
    }))

  return { props }
}
