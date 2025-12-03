import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Title from './components/Title/Title'
import About from './components/About/About';
import Campus from './components/Campus/Campus';
import Testmonial from './components/Testimonial/Testmonial';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle='OUR PROGRAM' title='WHAT WE OFFER' />
        <Programs/>
        <About/>
        <Title subTitle='GALLERY' title=' CAMPUS PHOTOS'/>
        <Campus/>
        <Title subTitle='TESTIMONIAL' title='WHAT STUDENT SAY'/>
        <Testmonial/>
        <Title subTitle='Contact Us' title='Get In Touch'/>
        <Contact/>
        <Footer/>
        {/* hello */}

      </div>
      
    </div>
  )
}

export default App;
