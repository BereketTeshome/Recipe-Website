import React, { useEffect, useState } from 'react' 
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import {Box, Breadcrumbs, Link, Typography} from '@mui/material'
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';

const List = () => {
    const location = useLocation();
    const [list, setList] = useState([])    


    useEffect(() => {
        const fetchSingleRecipe = async () => {
          const pathName = location.pathname.split("/")[2]
          try {
            const res =await axios.get(`http://localhost:3001/api/recipe/getSingleRecipe/${pathName}`)
            setList(res.data.recipes)
          } catch (error) {
            console.error(error)
          }          
        }
        fetchSingleRecipe();
    }, [])
    
  return (
    <div className='list'>
      {list.map((item)=> (
        <div key={item._id}>
          <Navbar />
          <Box mb={'20px'}>
            <Breadcrumbs area-label='breadcrumb'>
              <Link underline='hover' href='/'>Home</Link>
              {/* <Link underline='hover'>{item.name}</Link> */}
              <Typography>{item.name}</Typography>              
            </Breadcrumbs>
          </Box>

          <div className='list_container'>

            <div className='list_left'>
              <img src={item.imageUrl} alt={item.name} />
            </div>

            <div className='list_right'>
              <h1>{item.name}</h1>
              
              <p style={{marginBottom:'30px'}}><LocalOfferOutlinedIcon className='list_icon' fontSize='small'/>{item.category}</p>
              
              <h3 style={{marginBottom:'30px'}}>Cooking Instructions</h3>

              <p style={{marginBottom:'30px'}}>{item.instruction}</p>

              <h2 style={{marginBottom:'10px'}}>Ingredients</h2>
              {item.ingredients.map((ingredient) => (
                <p style={{marginLeft:'10px'}}>{ingredient}<hr className='list_hr'/></p> 
              ))}
            </div>

            <p style={{marginTop:'50px', fontWeight:'600'}}>Build by Beki.</p>

          </div>
        </div>
      ))}
    </div>
  )
}

export default List
