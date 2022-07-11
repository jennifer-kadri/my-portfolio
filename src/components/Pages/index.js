import React from 'react'
import Fade from 'react-reveal/Fade'
import Pulse from 'react-reveal/Pulse'
import Hero from '../Hero/Hero'
import Navbar from '../Navbar/Navbar'
import About from '../About/About'
import Experience from '../Experience/Experience'
import Portfolio from '../Portfolio/Portfolio'
import Carousel from '../Carousel/Carousel'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
   <>
      <Navbar />
      <Hero />
      <Fade right>
        <About />
      </Fade>
      <Fade left>
        <Experience />
      </Fade>
      <Fade bottom>
        <Portfolio />
      </Fade>
      <Fade top>
        <Carousel />
      </Fade>
      <Pulse>
        <Contact />
      </Pulse>
      <Footer />
   </>
  )
}

export default Home