const Recipe = require('../../models/recipe');

module.exports.home = async function(req, res){

    let recipes = await Recipe.find({ });

    return res.status(200).json({
        message: "List of Products",
        recipes: recipes
    });
};