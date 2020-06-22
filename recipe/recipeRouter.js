const router = require("express").Router();
const db = require("./recipeModel");
const validateID = require("./recipeMiddleware");

router.get("/", async (req, res) => {
  try {
    const recipes = await db.getRecipes();

    res.status(200).json(recipes);
  } catch {
    res.status(500).json({ error: "Failed to retrieve recipes" });
  }
});

router.get("/:id/shoppingList", validateID, async (req, res) => {
  try {
    const shoppingList = await db.getShoppingList(req.params.id);

    res.status(200).json(shoppingList);
  } catch {
    res
      .status(500)
      .json({ error: "Failed to retreive shopping list for that recipe" });
  }
});

router.get("/:id/instructions", validateID, async (req, res) => {
  try {
    const instructions = await db.getInstructions(req.params.id);

    res.status(200).json(instructions);
  } catch {
    res
      .status(500)
      .json({ error: "Failed to retrieve the instructions for that recipe" });
  }
});

module.exports = router;
