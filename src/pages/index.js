import React from "react"

import Footer from "../components/Footer"
import PersistentEmail from "../components/PersistentEmail"
import Landing from "../components/Landing"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import Contact from "../components/Contact"
import Social from "../components/Social"

const IndexPage = () => {
  return (
    <main className="w-full h-full container mx-auto">
      <PersistentEmail />
      <Landing />
      <Projects />
      <Skills />
      {/* <Social /> */}
      <Contact />
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Allen Shibu</title>
