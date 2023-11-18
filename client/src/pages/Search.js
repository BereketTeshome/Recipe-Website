import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'


const Search = () => {
    const [data, setData] = useState([])
    const searchTerm = window.location.href.split('?')[1]
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async() =>{
            setLoading(true)
            try {
                const res = await axios.post(`https://recipe-website-three-rho.vercel.app/api/recipe/search?${searchTerm}`)
                console.log(res.data);
                setData(res.data.recipe)
                setLoading(false)
            } catch (error) {
                setLoading(false)
                console.error(error)
            }
        }
        fetchData();      
}, [searchTerm])

if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  
return (
<div className='search'>
    <div className='search_header'>
        <Navbar />
        <h2 style={{marginBottom: '30px'}}> {data.length > 0 ? 'Search Results' : 'No results found'}</h2>
    </div>

    <div className='search_api_container'>
        {data.map((item) =>{
                return <div className='sub_search_api_container' key={item._id}>
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

export default Search

// import React from 'react'
// import Navbar from '../components/Navbar'

// const Search = () => {
//   return (
//     <div>
//     <Navbar />
//       <h1>Search</h1>
//     </div>
//   )
// }

// export default Search