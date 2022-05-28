const Recipe = require('../../models/recipe');

module.exports.home = async function(req, res){

    let recipes = await Recipe.find({ });

    return res.status(200).json({
        message: "List of Products",
        recipes: recipes
    });
};

module.exports.recipeInfo = async function(req, res){

    console.log(req.params);

    try{
        let recipe = await Recipe.findOne({ _id: req.params.id });

        if(!recipe){
            return res.status(422).json({
                message: "Recipe does not exist"
            })
        }
        return res.status(200).json({
            message: "Recipe Sent",
            recipe: recipe
        });
    }catch{
        return res.status(500).json({
            message: "internal server error"
        });
    }
};