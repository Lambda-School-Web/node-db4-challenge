exports.seed = function(knex) {
  // Inserts seed entries
  return knex("recipe_ingredients").insert([
    { recipe_id: 1, ingredient_id: 1, quantity: 4, measurement_unit: "cubes" },
    { recipe_id: 1, ingredient_id: 2, quantity: 11, measurement_unit: "oz" },
    { recipe_id: 1, ingredient_id: 3, quantity: 410, measurement_unit: "g" },
    { recipe_id: 1, ingredient_id: 4, quantity: 5, measurement_unit: "fl.oz" },
    { recipe_id: 1, ingredient_id: 5, quantity: 2 },
    { recipe_id: 2, ingredient_id: 6, quantity: 3 },
    { recipe_id: 2, ingredient_id: 7, quantity: 5 },
    { recipe_id: 2, ingredient_id: 2, quantity: 7, measurement_unit: "oz" },
    { recipe_id: 2, ingredient_id: 8, quantity: 73, measurement_unit: "ml" },
    { recipe_id: 2, ingredient_id: 9, quantity: 4 },
    {
      recipe_id: 2,
      ingredient_id: 10,
      quantity: 12,
      measurement_unit: "slices"
    },
    { recipe_id: 2, ingredient_id: 11, quantity: 1, measurement_unit: "bar" },
    { recipe_id: 3, ingredient_id: 7, quantity: 5 },
    { recipe_id: 3, ingredient_id: 12, quantity: 130, measurement_unit: "g" },
    { recipe_id: 3, ingredient_id: 13, quantity: 3 },
    { recipe_id: 4, ingredient_id: 5, quantity: 5 },
    { recipe_id: 4, ingredient_id: 14, quantity: 3 },
    { recipe_id: 4, ingredient_id: 15, quantity: 13, measurement_unit: "fl.oz" }
  ]);
};
