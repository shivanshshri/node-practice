const express = require("express");

const path = require("path");

const controller = require("../controller/home");

const addHomeRouter = express.Router();

addHomeRouter.get("/add-home", controller.addhomeController);

module.exports = addHomeRouter;
