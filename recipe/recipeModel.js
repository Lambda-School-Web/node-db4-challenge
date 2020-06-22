const db = require("../data/dbConfig");

module.exports = {
  getRecipes,
  getRecipeById,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db("recipes");
}

function getRecipeById(id) {
  return db("recipes")
    .where({ id })
    .first();
}

function getShoppingList(id) {
  return db("ingredients")
    .select(
      "ingredients.name",
      "recipe_ingredients.quantity",
      "recipe_ingredients.measurement_unit"
    )
    .where("recipe_id", id)
    .innerJoin(
      "recipe_ingredients",
      "ingredients.id",
      "=",
      "recipe_ingredients.ingredient_id"
    );
}

function getInstructions(id) {
  return db("steps")
    .select("step_number", "instructions")
    .where("recipe_id", id)
    .orderBy("step_number");
}
