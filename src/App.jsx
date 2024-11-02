import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import MyProjects from './Components/My_Project/MyProjects'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Experience from './Components/Experience/Experience'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <MyProjects/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App