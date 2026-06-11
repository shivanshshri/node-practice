const express = require("express");

const path = require("path");

const data = require("../data/data");

const homepageRouter = express.Router();

homepageRouter.get("/", (req, res, next) => {
  console.log("Homepage loaded");
  // res.sendFile(path.join(__dirname, "../views/homepage.html"));
  res.render("homepage", { data });
});

module.exports = homepageRouter;
