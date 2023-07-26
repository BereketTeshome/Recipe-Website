import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Loading from './Loading'


const Thai = () => {

    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(true)

        useEffect(() => {
            const fetchData = async() =>{
                setLoading(true)
                try {
                    const res = await axios.get("https://recipe-website-5naj.onrender.com/api/recipe/getThaiRecipes")
                    setImages(res.data.recipes)
                    setLoading(false)
                } catch (error) {
                    setLoading(false)
                    console.error(error)
                }
            }
            fetchData();      
    }, [])

    if (loading) {
        return (
          <main>
            <Loading />
          </main>
        )
      }
      
  return (
    <div className='thai' id='thai'>
        <div className='thai_header'>
            <h2>Thai Recipes</h2>
            <a href="/thai">View More</a>
        </div>

        <div className='thai_api_container'>
            {images.map((item) =>{
                    return <div className='sub_thai_api_container' key={item._id}>
                            <Link to={`/list/${item._id}`}>
                                <img src={item.imageUrl} alt={item.name}/>
                                    <p>{item.name}</p> 
                            </Link>                        
                    </div>
                })}
        </div>
    </div>
  )
}

export default Thai
