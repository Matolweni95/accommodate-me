import React from 'react'
import Nav from '../component/Nav'
import Hero from '../component/Hero'
import Discover from '../component/Discover'
import Accommodation from '../component/Accommodation'
import Estate from '../component/Estate'
import Partners from '../component/Partners'
import Footer from '../component/Footer'

function Landing() {
  return (
    <>
        <Nav />
        <Hero />
        <Discover />
       <Accommodation />
        <Estate />
        <Partners />
        <Footer /> 
    </>
  )
}

export default Landing