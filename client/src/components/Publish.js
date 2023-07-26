import React from 'react'
import publishImage from '../img/publish-recipe.png'

const Publish = () => {
  return (
    <div className='publish'>
      <img src={publishImage} alt="publish_image" />
      <h1>Publish your recipe for free today</h1>
      <p>Publish your recipe in front of thousands of people for free</p>
      <a href="/submit"><button className='publish_button'>Submit Recipe</button></a>
    </div>
  )
}

export default Publish
