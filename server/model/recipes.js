const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
        name:{
            type: String,
            required:[true, 'please input title']
        },
        instruction:{
            type: String,
            required:[true, 'please input instruction']
        },
        ingredients: [
            {
            type: String,
            required: true,
            },
        ],
        category: {
            type: String,
            enum: ['Chinese', 'Mexican', 'American', 'Thai', 'Ethiopian'],
            default: 'Chinese',
            required: true
        },
        imageUrl:{
            type: String,
            required:[true, 'please input imageUrl']
        },
    }, 
    { timestamps: true }
)

RecipeSchema.index({ name: 'text', description: 'text' });

module.exports = mongoose.model('Recipes', RecipeSchema);