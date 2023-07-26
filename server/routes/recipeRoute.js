const express = require('express');
const router = express.Router();
const {createRecipe, getRecipe, getAllRecipes, getSingleRecipe, getEthiopianRecipe, getThaiRecipe, getAmericanRecipe, getChineseRecipe, getMexicanRecipe, getSearchRecipe, getAllLatestRecipe, getAllEthiopianRecipe, getAllThaiRecipe, getAllAmericanRecipe, getAllChineseRecipe, getAllMexicanRecipe} = require('../controllers/recipeController')

router.post('/createRecipe', createRecipe)
router.get('/getRecipes', getRecipe)
router.get('/getAllRecipes', getAllRecipes)
router.get('/getSingleRecipe/:id', getSingleRecipe)
router.get('/getThaiRecipes', getThaiRecipe)
router.get('/getAmericanRecipe', getAmericanRecipe)
router.get('/getChineseRecipe', getChineseRecipe)
router.get('/getMexicanRecipe', getMexicanRecipe)
router.get('/getEthiopianRecipe', getEthiopianRecipe)
router.post('/search', getSearchRecipe)
router.get('/getAllLatestRecipe', getAllLatestRecipe)
router.get('/getAllThaiRecipe', getAllThaiRecipe)
router.get('/getAllAmericanRecipe', getAllAmericanRecipe)
router.get('/getAllChineseRecipe', getAllChineseRecipe)
router.get('/getAllMexicanRecipe', getAllMexicanRecipe)
router.get('/getAllEthiopianRecipe', getAllEthiopianRecipe)

module.exports = router