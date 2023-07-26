import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Loading from './Loading'

const Latest = () => {
    const [image, setImage] = useState([])
    const [loading, setLoading] = useState(true)

        useEffect(() => {
            const fetchData = async() =>{
                setLoading(true)
                try {
                    const res = await axios.get("https://recipe-website-5naj.onrender.com/api/recipe/getRecipes")
                    setImage(res.data.recipes)
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
    <div className='latest'>
        <div className='latest_header'>
            <h2>Latest Recipes</h2>
            <a href="/latest">View More</a>
        </div>

        <div className='latest_api_container'>
            {image.map((item) =>{
                    return <div className='sub_latest_api_container' key={item._id}>
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

export default Latest
