const recipes = require('../model/recipes')
const RecipeSchema = require('../model/recipes')


//create

const createRecipe = async (req, res) =>{
    try {
        const recipes = await RecipeSchema.create(req.body)
        res.status(200).json({recipes})
    } catch (error) {
        console.error(error)
    }
}

const getAllRecipes = async (req, res) =>{

    try {
        const recipes = await RecipeSchema.find()
        res.status(200).json({recipes})
    } catch (error) {
        console.error(error)
    }
}


const getRecipe = async (req, res) =>{

    try {
        const recipes = await RecipeSchema.find().limit(4).sort('-createdAt')
        res.status(200).json({recipes})
    } catch (error) {
        console.error(error)
    }
}

const getSingleRecipe = async (req, res) =>{

    const id = req.params.id

    try {
        const recipes = await RecipeSchema.find({_id: id})
        res.status(200).json({recipes})
    } catch (error) {
        console.error(error)
    }
}

const getThaiRecipe = async (req, res) =>{

    try {
        const recipes = await RecipeSchema.find({category: 'Thai'}).limit(4).sort('-createdAt')
        res.status(200).json({recipes})
    } catch (error) {
        console.error(error)
    }
}

const getAmericanRecipe = async (req, res) =>{

    try {
        const recipes = await RecipeSchema.find({category: 'American'}).limit(4).sort('-createdAt')
        res.status(200).json({recipes})
    } catch (error) {
        console.error(error)
    }
}


const getChineseRecipe = async (req, res) =>{

    try {
        const recipes = await RecipeSchema.find({category: 'Chinese'}).limit(4).sort('-createdAt')
        res.status(200).json({recipes})
    } catch (error) {
        console.error(error)
    }
}


const getMexicanRecipe = async (req, res) =>{

    try {
        const recipes = await RecipeSchema.find({category: 'Mexican'}).limit(4).sort('-createdAt')
        res.status(200).json({recipes})
    } catch (error) {
        console.error(error)
    }
}

const getEthiopianRecipe = async (req, res) =>{

    try {
        const recipes = await RecipeSchema.find({category: 'Ethiopian'}).limit(4).sort('-createdAt')
        res.status(200).json({recipes})
    } catch (error) {
        console.error(error)
    }
}

// All recipes


const getAllLatestRecipe = async (req, res) =>{

    try {
        const recipes = await RecipeSchema.find().sort('-createdAt')
        res.status(200).json({recipes})
    } catch (error) {
        console.error(error)
    }
}

const getAllThaiRecipe = async (req, res) =>{

    try {
        const recipes = await RecipeSchema.find({category: 'Thai'})
        res.status(200).json({recipes})
    } catch (error) {
        console.error(error)
    }
}

const getAllAmericanRecipe = async (req, res) =>{
    
    try {
        const recipes = await RecipeSchema.find({category: 'American'})
        res.status(200).json({recipes})
    } catch (error) {
        console.error(error)
    }
}


const getAllChineseRecipe = async (req, res) =>{
    
    try {
        const recipes = await RecipeSchema.find({category: 'Chinese'})
        res.status(200).json({recipes})
    } catch (error) {
        console.error(error)
    }
}


const getAllMexicanRecipe = async (req, res) =>{

    try {
        const recipes = await RecipeSchema.find({category: 'Mexican'})
        res.status(200).json({recipes})
    } catch (error) {
        console.error(error)
    }
}

const getAllEthiopianRecipe = async (req, res) =>{

    try {
        const recipes = await RecipeSchema.find({category: 'Ethiopian'})
        res.status(200).json({recipes})
    } catch (error) {
        console.error(error)
    }
}

const getSearchRecipe = async (req, res) =>{

    let searchTerm = req.query.searchTerm
    try {
        let recipe = await RecipeSchema.find({ $text: {$search: searchTerm, $diacriticSensitive: true } })
        res.status(200).json({recipe})
    } catch (error) {
        res.status(500).send({error: error.message})
        console.error(error)
    }
   
}


module.exports = {createRecipe, getRecipe, getAllRecipes, getSingleRecipe,getEthiopianRecipe, getThaiRecipe, getAmericanRecipe, getChineseRecipe, getMexicanRecipe, getSearchRecipe , getAllLatestRecipe, getAllThaiRecipe, getAllAmericanRecipe, getAllChineseRecipe, getAllMexicanRecipe, getAllEthiopianRecipe}