import React from 'react'
import homeImage from '../img/hero-image.png'
import thaiImg from '../img/thai-food.jpg'
import americanImg from '../img/american-food.jpg'
import chineseImg from '../img/chinese-food.jpg'
import mexicanImg from '../img/mexican-food.jpg'
import ethiopianImg from '../img/ethiopian-food1.jpg'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div className='home'>
        <div className="home_container">
            <div className="home_left">
                <h1 className='typewriter'>Delicious<span> recipe ideas</span></h1>
                <p>
                    Explore our huge selection of delicious recipe ideas including: easy desserts, delicious vegan and vegetarian dinner ideas, gorgeous pasta recipes, quick bakes, family-friendly meals and gluten-free recipes.
                </p>
                <Link to={'/latest'}><button className='home_button_left'>Explore Latest</button></Link>
            </div>

            <div className="home_right">
                <img src={homeImage} alt="homeImage"/>
            </div>
        </div>

        <div className='home_categories_container'>

            <div className='ethiopian_img_container'>
                <a href="#ethiopian">
                    <img src={ethiopianImg} alt="ethiopian"/>
                        <p>Ethiopian</p>
                </a>                  
            </div>

            <div>
                <a href="#thai">
                    <img src={thaiImg} alt="thai"/>
                        <p>Thai</p>
                </a>                  
            </div>
            <div>
                <a href="#american">
                    <img src={americanImg} alt="american"/>
                    <p>American</p>
                </a>
            </div>
            <div>
                <a href="#chinese">
                    <img src={chineseImg} alt="chinese" />
                    <p>Chinese</p>
                </a>
            </div>
            <div>
                <a href="#mexican">
                    <img src={mexicanImg} alt="mexican" />
                    <p>Mexican</p>
                </a>    
            </div>
            
        </div>
      
    </div>
  )
}

export default Home
