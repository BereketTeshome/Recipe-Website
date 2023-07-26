import React from 'react'
import American from '../components/American';
import Chinese from '../components/Chinese';
import Home from '../components/Home';
import Latest from '../components/Latest';
import Mexican from '../components/Mexican';
import Navbar from '../components/Navbar';
import Publish from '../components/Publish';
import Thai from '../components/Thai';
import Ethiopian from '../components/Ethiopian';


const Main = () => {
  return (
    <div>
      <Navbar />
        <Home />
        <Latest />
        <Ethiopian />
        <Thai />
        <American />
        <Chinese />
        <Mexican />
        <Publish />
    </div>
  )
}

export default Main
