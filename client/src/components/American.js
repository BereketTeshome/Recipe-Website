import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Loading from './Loading'

const American = () => {
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async() =>{
            setLoading(true)
            try {
                const res = await axios.get("https://recipe-website-5naj.onrender.com/api/recipe/getAmericanRecipe")
                // const res = await axios.get("https://recipe-website-0sdh.onrender.com/http://localhost:3001/api/recipe/getAmericanRecipe")
                setImages(res.data.recipes)
                setLoading(false)
                //console.log(res.data.recipes);
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
<div className='american' id='american'>
    <div className='american_header'>
        <h2>American Recipes</h2>
        <a href="/american">View More</a>
    </div>

    <div className='american_api_container'>
        {images.map((item) =>{
                return <div className='sub_american_api_container' key={item._id}>
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

export default American
