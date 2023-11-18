import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {getStorage, ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage'
import app from '../firebase'



const Submit = () => {
  const navigate = useNavigate()

  const [recipe, setRecipe] = useState({
    name: "",
    instruction: "",
    ingredients: [],
    category: "",
    imageUrl:""
  })
  const [newRecipe, setNewRecipe] = useState(recipe)
  const [file, setFile] = useState(null)
  const [error, setError] = useState(false)
  const [submitBtn, setSubmitBtn] = useState(false)

  const handleBtn = () => {
    setSubmitBtn(!submitBtn)
  }

   const handleChange = (event) => {
    const {name, value} = event.target
    setRecipe({...recipe, [name]:value})
  }

  const handleAddIngredient = (e) => {
    e.preventDefault();
    setRecipe({...recipe, ingredients:[...recipe.ingredients, ""]})
  }

  const handleIngredientChange = (event, idx)=>{
    const {value} = event.target
    const ingredients = recipe.ingredients
    ingredients[idx]= value
    setRecipe({...recipe, ingredients})
  }

  const handleSubmit =async (e) => {
    const{name, instruction, ingredients, category, imageUrl} = recipe
    const fileName = new Date().getTime() + file.name
    const storage = getStorage(app)
    const storageRef = ref(storage, fileName)
    const uploadTask = uploadBytesResumable(storageRef, file);
    // setRecipe({...recipe, recipe.imageUrl: })

    uploadTask.on('state_changed', 
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
            default:
        }
      }, 
      (error) => {
        // Handle unsuccessful uploads
        console.error(error)
      }, 
      () => {
        // Handle successful uploads on complete
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const newRecipe = {...recipe, imageUrl: downloadURL}
          setNewRecipe(newRecipe)
          console.log('File available at', downloadURL);
        });
      }
    );

    e.preventDefault();

    if (name.length === 0 || instruction.length === 0 || ingredients.length === 0 || category.length === 0 || imageUrl.length === 0) {
      setError(true)
    }
    try {
      await axios.post("https://recipe-website-three-rho.vercel.app/api/recipe/createRecipe", newRecipe)
      alert('Recipe added!!')
      navigate("/");
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='submit'>
      <Navbar />
      <div className="submit_header">
        <h1>Submit Your <span>Recipe</span></h1>
        <p>Share your amazing recipes with thousands of web developers across the world.</p>
        <p>Fill our form to get started.</p>
      </div>

        <form onSubmit={handleSubmit}>

            <p>Recipe Name</p>
            <input type="text" name='name' style={{ marginBottom: '25px' }} onChange={handleChange}/>
            {error && recipe.name.length<=0? <label htmlFor="">Recipe Name can not be empty.</label> : ""}
            
            <p>Instruction</p>
            <textarea name="instruction" id="" cols="70" rows="6" style={{ marginBottom: '25px'}} onChange={handleChange}></textarea>
            {error && recipe.instruction.length<=0? <label htmlFor="">Instructions can not be empty.</label> : ""}

            <p>Ingredients</p>
            <p>Example: Garlic</p>

            {recipe.ingredients.map((ingredient, idx) => (
              <input type="text" name='ingredients' value={ingredient} key={idx} style={{ marginBottom: '1px' }} onChange={(event) => handleIngredientChange(event, idx)}/>
            ))}
            {error && recipe.ingredients.length<=0? <label htmlFor="">Ingredients can not be empty.</label> : ""}
            <button style={{ marginBottom: '25px' }} onClick={(e) => handleAddIngredient(e)}>+Ingredient</button>



            <p>Select Category</p>
            <select name="category" defaultValue={'Select Category'} style={{ marginBottom: '25px' }} className='select' onChange={handleChange}>
                <option value="">Select...</option> 
                <option value="Ethiopian">Ethiopian</option> 
                <option value="Thai">Thai</option> 
                <option value="American">American</option> 
                <option value="Chinese">Chinese</option> 
                <option value="Mexican">Mexican</option> 
            </select>
            {error && recipe.category.length<=0? <label htmlFor="">Select a category from the provided options.</label> : ""}

            <p>Product Image</p>
            <input type="file" name='imageUrl' className='imageUrlInput' style={{ marginBottom: '30px', fontWeight:'550' }} onChange={(e) => setFile(e.target.files[0])} placeholder='Insert image url here...'/>
            {/* <input type="text" name='imageUrl' style={{ marginBottom: '30px', fontWeight:'550' }} onChange={handleChange} placeholder='Insert image url here...'/> */}
            {error && file.length<=0? <label htmlFor="">Image can not be empty.</label> : ""}

            <button type='submit' onClick={handleBtn}>{submitBtn ? 'Submit Recipe' : 'Done'}</button>
        </form>

        <p className='credit'>Build by BEKI.</p>

    </div>
  )
}

export default Submit
