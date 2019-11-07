const db = require("../data/dbConfig");

module.exports = {
  getIngredientRecipes,
  getIngredientById
};

function getIngredientRecipes(id) {
  return db("ingredients")
    .select("recipes.name")
    .where("ingredients.id", id)
    .innerJoin(
      "recipe_ingredients",
      "ingredients.id",
      "=",
      "recipe_ingredients.ingredient_id"
    )
    .innerJoin("recipes", "recipe_ingredients.recipe_id", "=", "recipes.id");
}

function getIngredientById(id) {
  return db("ingredients")
    .where({ id })
    .first();
}
