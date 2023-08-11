import React, { useState } from 'react'
import logo from '../img/beki_logo.png'
import Search from './Search'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () =>{
    setToggle(!toggle)
  }

  return (
    <header className='navbar'>

      <div>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>

      <div className='navbar_links' style={toggle ? {left:'-100%'} : {left:'0'}}>
        <nav>
          <ul>
              <li><a href="/">Home</a> </li>
              <li><a href="/about">About</a> </li>
              <li><a href="/submit">Submit</a> </li>
              <li><a href="/contact">Contact</a> </li>
          </ul>
        </nav>
      </div>

      <div className='check_btn_container'>
        <input type="checkbox" id='check' name='check'/>
          <label htmlFor="check" className='navbar_checkBtn' onClick={handleToggle}>
            {toggle ? <MenuIcon /> : <CloseIcon />}
          </label>
        <Search />
      </div>

    </header>
  ) 
}

export default Navbar
