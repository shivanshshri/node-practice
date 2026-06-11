const express = require("express");

const path = require("path");

const addHomeRouter = express.Router();

addHomeRouter.get("/add-home", (req, res, next) => {
  console.log("adding home page loaded");
  res.sendFile(path.join(__dirname, "../views/add-home.html"));
});

module.exports = addHomeRouter;
