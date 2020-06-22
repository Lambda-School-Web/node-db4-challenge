exports.seed = function(knex) {
  // Inserts seed entries
  return knex("recipes").insert([
    { name: "Spicy Baileys Cakes" },
    { name: "Green Peppers Sandwich" },
    { name: "Battered Green Peppers" },
    { name: "Oysters Surprise" }
  ]);
};
