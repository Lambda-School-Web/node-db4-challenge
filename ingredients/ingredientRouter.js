const router = require("express").Router();
const db = require("./ingredientModel");
const validateID = require("./ingredientMiddleware");

router.get("/:id/recipes", validateID, async (req, res) => {
  try {
    const recipes = await db.getIngredientRecipes(req.params.id);

    res.status(200).json(recipes);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ error: "Failed to retrieve recipes using that ingredient" });
  }
});

module.exports = router;
