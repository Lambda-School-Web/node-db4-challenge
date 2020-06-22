const db = require("./recipeModel");
module.exports = validateID;

async function validateID(req, res, next) {
  try {
    const recipe = await db.getRecipeById(req.params.id);

    recipe
      ? next()
      : res.status(404).json({ message: "There's no recipe with that ID" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to retrieve recipe with that ID" });
  }
}
