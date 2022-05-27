const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    ingredients: [
        {
            quantity: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            type: {
                type: String,
                required: true
            }
        }
    ],
    timers: [
        {
            type: Number,
        }
    ],
    steps: [
        {
            type: String,
            required: true
        }
    ],
    imageURL: {
        type: String
    }
}, {
    timestamps: true
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;