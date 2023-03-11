import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Blankpage from '../components/Blankpage'
import Intro from '../components/Intro';
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div> <Navbar/>
          <Intro/>
          <Blankpage/>
          <Banner/>
          <Blankpage/>
          <Footer/>
      </div>
  
  )
}

export default Home