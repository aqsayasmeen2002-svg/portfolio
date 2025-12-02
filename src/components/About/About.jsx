import React from 'react'
import './About.css';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png'


function About() {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt='' className='about_img'/>
            <img src={play_icon} alt='' className='play_icon'/>
        </div>
        <div className='about-right'>
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Naturng tomorrow's Leader today</h2>
            <p>The standard lorem ipsum passage has been a printer's friend for centuries.
            Like stock photos today, it served as a placeholder for actual content.
            The original text comes from Cicero's philosophical work "De Finibus Bonorum et Malorum," 
            written in 45 BC.</p>

            <p>The standard lorem ipsum passage has been a printer's friend for centuries.
            Like stock photos today, it served as a placeholder for actual content.
            The original text comes from Cicero's philosophical work "De Finibus Bonorum et Malorum," 
            written in 45 BC.</p>

            <p>The standard lorem ipsum passage has been a printer's friend for centuries.
            Like stock photos today, it served as a placeholder for actual content.
            The original text comes from Cicero's philosophical work "De Finibus Bonorum et Malorum," 
            written in 45 BC.</p>
        </div>
    </div>
  )
}

export default About;
