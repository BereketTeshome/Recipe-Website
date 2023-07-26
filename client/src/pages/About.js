import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Navbar from '../components/Navbar';


const About = () => {
  return (
    <div className='about'>
    <Navbar />
      <header className='about_header'>
        <h1><span>About</span> <span className='about_span'>Us</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam odio, sapiente, ipsam possimus quo vel sequi aspernatur facere incidunt sint ipsum eos deserunt modi animi dolorum atque maiores laboriosam autem.</p>
      </header>

      <section className='about_container'>
        <div className='sub-about-container'>
          <MenuBookIcon className='about-icon' fontSize='large'/>
          <h2>MISSION</h2>
          <div></div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut amet ad magnam quis sint similique totam voluptates accusantium, magni iste.</p>
        </div>

        <div className='sub-about-container'>
          <LanguageIcon className='about-icon' fontSize='large'/>
          <h2>VISION</h2>
          <div></div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut amet ad magnam quis sint similique totam voluptates accusantium, magni iste.</p>
        </div>

        <div className='sub-about-container'>
          <EmojiEventsIcon className='about-icon' fontSize='large'/>
          <h2>GOALS</h2>
          <div></div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut amet ad magnam quis sint similique totam voluptates accusantium, magni iste.</p>
        </div>

      </section>

      <footer className='about_footer'>
        <p>&copy; 2023 BEKI Company. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default About
