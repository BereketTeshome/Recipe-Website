import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Loading from './Loading'

const Ethiopian = () => {
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async() =>{
            setLoading(true)
            try {
                const res = await axios.get("https://recipe-website-three-rho.vercel.app/api/recipe/getEthiopianRecipe")
                setImages(res.data.recipes)
                setLoading(false)
            } catch (error) {
                console.error(error)
                setLoading(false)
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
<div className='ethiopian' >
    <div className='ethiopian_header'>
        <h2 id='ethiopian'>Ethiopian Recipes</h2>
        <a href="/ethiopian">View More</a>
    </div>

    <div className='ethiopian_api_container'>
        {images.map((item) =>{
                return <div className='sub_ethiopian_api_container' key={item._id}>
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

export default Ethiopian
