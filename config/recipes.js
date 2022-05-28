const mongoose = require('mongoose');

const data = require('../assets/recipes.json');

const Recipe = require('../models/recipe');
const db = require('../config/mongoose');

Recipe.deleteMany({ });

Recipe.insertMany(data, function(err, r){
    if(err){
        return console.log("Error in store database", err)
    };
    return console.log("Database populated");
})