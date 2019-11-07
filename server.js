const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();
const recipeRouter = require("./recipe/recipeRouter");
const ingredientRouter = require("./ingredients/ingredientRouter");

server.use(helmet());
server.use(cors());
server.use("/api/recipes", recipeRouter);
server.use("/api/ingredients", ingredientRouter);

module.exports = server;
