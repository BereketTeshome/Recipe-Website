import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import {Box, Breadcrumbs, Link, Typography} from '@mui/material'
import Loading from '../components/Loading'

const EthiopianAll = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async() =>{
            setLoading(true)
            try {
                const res = await axios.get("http://localhost:3001/api/recipe/getAllEthiopianRecipe")
                setData(res.data.recipes)
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
<div className='allLatest'>
    <Navbar />
    <Box mb={'20px'}>
            <Breadcrumbs area-label='breadcrumb'>
              <Link underline='hover' href='/'>Home</Link>
              <Typography>All Ethiopian Recipes</Typography>              
            </Breadcrumbs>
          </Box>
    <div className='allLatest_header'>
        <h2>All Ethiopian Recipes</h2>
    </div>

    <div className='allLatest_api_container'>
        {data.map((item) =>{
            return <div className='sub_allLatest_api_container' key={item._id}>
                            <Link href={`/list/${item._id}`}>
                                <img src={item.imageUrl} alt={item.name}/>
                                    <p>{item.name}</p> 
                            </Link>                                   
                    </div>
            })}
    </div>
</div>
)
}

export default EthiopianAll
