import type Directus from '@/types/Directus'

import Footer from '@/components/Footer'
import Hotbar from '@/components/Hotbar'
import Navbar from '@/components/Navbar'

import Contact from '@/components/sections/Contact'
import Education from '@/components/sections/Education'
import About from '@/components/sections/About'
import Courses from '@/components/sections/Courses'
import Internships from '@/components/sections/Internships'
import Projects from '@/components/sections/Projects'
import Services from '@/components/sections/Services'
import Skills from '@/components/sections/Skills'
import Status from '@/components/sections/Status'
import Work from '@/components/sections/Work'

export default function Index({ API }: { API: Directus }) {

  return (
    <>
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
    </>
  )
}
