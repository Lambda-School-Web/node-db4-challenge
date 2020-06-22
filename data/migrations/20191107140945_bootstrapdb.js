exports.up = function(knex) {
  return knex.schema
    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl.string("name", 255).notNullable();
    })
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl.string("name", 255).notNullable();
    })
    .createTable("steps", tbl => {
      tbl.increments();
      tbl.string("instructions", 255).notNullable();
      tbl
        .integer("step_number")
        .unsigned()
        .notNullable();
      tbl
        .integer("recipe_id")
        .unsigned()
        .references("id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE")
        .notNullable();
    })
    .createTable("recipe_ingredients", tbl => {
      tbl.increments();
      tbl
        .integer("recipe_id")
        .unsigned()
        .references("id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE")
        .notNullable();
      tbl
        .integer("ingredient_id")
        .unsigned()
        .references("id")
        .inTable("ingredients")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE")
        .notNullable();
      tbl.float("quantity").notNullable();
      tbl.string("measurement_unit", 64);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("recipes")
    .dropTableIfExists("ingredients");
};
