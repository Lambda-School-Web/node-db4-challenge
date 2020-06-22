const db = require("./ingredientModel");
module.exports = validateID;

async function validateID(req, res, next) {
  try {
    const ingredient = await db.getIngredientById(req.params.id);

    ingredient
      ? next()
      : res.status(404).json({ message: "There's no ingredient with that ID" });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ error: "Failed to retrieve ingredient with that ID" });
  }
}
