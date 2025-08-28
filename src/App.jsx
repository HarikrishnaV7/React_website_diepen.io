import React from 'react'
import Navbar from './components/Navbar'
import "./App.css"
import Wwo from './components/Wwo'
import Container from './components/Container'
import Container2 from './components/Container2'
import Benefits from './components/Benefits'
import Container3 from './components/Container3'
import Container4 from './components/Container4'
import Nst from './components/Nst'
import Testimonials from './components/Testimonials'
import Wom from './components/Wom'
import Container5 from './components/Container5'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <section id='Services'><Container/></section>
      <Wwo/>
      <section id='Whoweare'><Container2/></section>
      <Benefits/>
      <Container3/>
      <Container4/>
      <Nst/>
      <section id='Testimonials'><Testimonials/></section>
      <Wom/>
      <Container5/>
      <Footer/>
    </>
  )
}

export default App
