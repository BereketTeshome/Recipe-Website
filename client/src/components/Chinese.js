import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Loading from './Loading'

const Chinese = () => {
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async() =>{
            setLoading(true)
            try {
                const res = await axios.get("https://recipe-website-5naj.onrender.com/api/recipe/getChineseRecipe")
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
<div className='chinese' id='chinese'>
    <div className='chinese_header'>
        <h2>Chinese Recipes</h2>
        <a href="/chinese">View More</a>
    </div>

    <div className='chinese_api_container'>
        {images.map((item) =>{
                return <div className='sub_chinese_api_container' key={item._id}>
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

export default Chinese
