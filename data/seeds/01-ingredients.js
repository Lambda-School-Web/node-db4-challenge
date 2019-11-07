exports.seed = function(knex) {
  // Inserts seed entries
  return knex("ingredients").insert([
    { name: "oxo cubes" }, //1
    { name: "pasta" }, //2
    { name: "corn flakes" }, //3
    { name: "baileys" }, //4
    { name: "oysters" }, //5
    { name: "red onions" }, //6
    { name: "green peppers" }, //7
    { name: "vegetable stock" }, //8
    { name: "carrots" }, //9
    { name: "bread" }, //10
    { name: "butter" }, //11
    { name: "pumpkin" }, //12
    { name: "swedes" }, //13
    { name: "red peppers" }, //14
    { name: "rose wine" } //15
  ]);
};
