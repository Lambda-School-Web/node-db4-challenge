exports.seed = function(knex) {
  // Inserts seed entries
  return knex("steps").insert([
    { instructions: "Slice the oxo cubes", step_number: 1, recipe_id: 1 },
    { instructions: "Soak the pasta", step_number: 2, recipe_id: 1 },
    { instructions: "Recycle the corn flakes", step_number: 3, recipe_id: 1 },
    { instructions: "Boil the Baileys", step_number: 4, recipe_id: 1 },
    { instructions: "Roll out the oysters", step_number: 5, recipe_id: 1 },
    { instructions: "Score the oysters", step_number: 6, recipe_id: 1 },
    { instructions: "Season the oxo cubes", step_number: 7, recipe_id: 1 },
    { instructions: "Shake the Baileys", step_number: 8, recipe_id: 1 },
    { instructions: "Blend the oysters", step_number: 9, recipe_id: 1 },
    { instructions: "Roll out the oxo cubes", step_number: 10, recipe_id: 1 },
    { instructions: "Roll the red onions", step_number: 1, recipe_id: 2 },
    { instructions: "Dice the green peppers", step_number: 2, recipe_id: 2 },
    { instructions: "Squash the pasta", step_number: 3, recipe_id: 2 },
    { instructions: "Whisk the vegetable stock", step_number: 4, recipe_id: 2 },
    { instructions: "Finely chop the carrots", step_number: 5, recipe_id: 2 },
    { instructions: "Quarter the carrots", step_number: 6, recipe_id: 2 },
    { instructions: "Pound the green peppers", step_number: 7, recipe_id: 2 },
    { instructions: "Roughly chop the carrots", step_number: 8, recipe_id: 2 },
    { instructions: "Mash the red onions", step_number: 9, recipe_id: 2 },
    { instructions: "Crush the green peppers", step_number: 10, recipe_id: 2 },
    {
      instructions: "Butter the slices of bread",
      step_number: 11,
      recipe_id: 2
    },
    {
      instructions: "Add filling to the slices of bread",
      step_number: 12,
      recipe_id: 2
    },
    { instructions: "Cut into triangles", step_number: 13, recipe_id: 2 },
    { instructions: "Score the green peppers", step_number: 1, recipe_id: 3 },
    {
      instructions: "Put the pumpkin in the saucepan",
      step_number: 2,
      recipe_id: 3
    },
    { instructions: "Unwrap the swedes", step_number: 3, recipe_id: 3 },
    { instructions: "Dice the swedes", step_number: 4, recipe_id: 3 },
    { instructions: "Season the pumpkin", step_number: 5, recipe_id: 3 },
    { instructions: "Compost the swedes", step_number: 6, recipe_id: 3 },
    { instructions: "Dice the green peppers", step_number: 7, recipe_id: 3 },
    { instructions: "Beat the pumpkin", step_number: 8, recipe_id: 3 },
    { instructions: "Wash the oysters", step_number: 2, recipe_id: 4 },
    {
      instructions:
        "Bring the rose wine to the boil in a saucepan with the oysters",
      step_number: 3,
      recipe_id: 4
    },
    { instructions: "Score the oysters", step_number: 4, recipe_id: 4 },
    {
      instructions: "Throw away the red peppers",
      step_number: 5,
      recipe_id: 4
    },
    { instructions: "Squeeze the oysters", step_number: 6, recipe_id: 4 },
    { instructions: "Never cook again", step_number: 7, recipe_id: 4 },
    { instructions: "Squeeze the red peppers", step_number: 1, recipe_id: 4 }
  ]);
};
