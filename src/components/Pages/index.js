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
  // function reveal() {
  //   var reveals = document.querySelectorAll(".reveal");
  
  //   for (var i = 0; i < reveals.length; i++) {
  //     var windowHeight = window.innerHeight;
  //     var elementTop = reveals[i].getBoundingClientRect().top;
  //     var elementVisible = 150;
  
  //     if (elementTop < windowHeight - elementVisible) {
  //       reveals[i].classList.add("active");
  //     } else {
  //       reveals[i].classList.remove("active");
  //     }
  //   }
  // }
  
  // window.addEventListener("scroll", reveal);

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