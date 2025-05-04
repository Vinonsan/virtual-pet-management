import React from 'react'
import Hero from '../components/Hero'
import Petlist from '../components/Petlist'
import PetCard from '../components/PetCard'
import AddPetForm from '../components/Addpet'
import About from '../components/About'
import Service from '../components/Service'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


function Home() {
  return (
    <div>
        <Hero />
        <About />
        <Service />
        <PetCard />
        <Contact />
        <Footer />
       
    </div>
  )
}

export default Home