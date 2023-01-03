import type Directus from '@/types/Directus'

import About from '@/components/About'
import Contact from '@/components/Contact'
import Courses from '@/components/Courses'
import Education from '@/components/Education'
import Footer from '@/components/Footer'
import Hotbar from '@/components/Hotbar'
import Internships from '@/components/Internships'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import Skills from '@/components/Skills'
import Status from '@/components/Status'
import Work from '@/components/Work'

export default function Index({ API }: { API: Directus }) {

  return (
    <div className='relative'>
      <About API={API} />

      <Skills API={API} />
      <Projects API={API} />

      <Status API={API} />
      <Services API={API} />

      <Work API={API} />
      <Education API={API} />
      <Internships API={API} />
      <Courses API={API} />

      <Contact API={API} />
      <Footer API={API} />


      <Navbar API={API} />
      <Hotbar API={API} />
    </div>
  )
}
