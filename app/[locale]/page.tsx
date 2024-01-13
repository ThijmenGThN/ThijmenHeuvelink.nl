
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Testimonials from "@/components/Testimonials"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default async function Page() {

    return (
        <>
            <Header />

            <Hero />
            <About />
            <Skills />
            <Testimonials />
            <Contact />

            <Footer />
        </>
    )
}
