require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
const connect = require('./connect/connect')
const recipeRouter = require('./routes/recipeRoute')

//middleware
app.use(express.json())
app.use(cors())

//routes
app.use('/api/recipe', recipeRouter)
app.get("/", (req, res)=>{
    res.setHeader("Access-Control-Allow-Credentials", "true")
})
const start = async () =>{
    const port = 3001 
    try {
        await connect("mongodb+srv://bereketteshome685:462462b@recipe-web-application.sbpzkj0.mongodb.net/?retryWrites=true&w=majority");
        app.listen(port, () => console.log(`Server is running on port ${port}`))
    } catch (error) {
        console.error(error)
    }
}

start();