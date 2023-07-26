import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Loading from './Loading'

const Mexican = () => {
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async() =>{
            setLoading(true)
            try {
                const res = await axios.get("http://localhost:3001/api/recipe/getMexicanRecipe")
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
<div className='mexican' id='mexican'>
    <div className='mexican_header'>
        <h2>Mexican Recipes</h2>
        <a href="/mexican">View More</a>
    </div>

    <div className='mexican_api_container'>
        {images.map((item) =>{
                return <div className='sub_mexican_api_container' key={item._id}>                
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

export default Mexican
