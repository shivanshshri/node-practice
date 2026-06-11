const express = require("express");

const path = require("path");
const bodyParser = require("body-parser");

const data = require("../data/data");

const succesfulRouter = express.Router();

succesfulRouter.use(bodyParser.urlencoded());

succesfulRouter.post("/add-home", (req, res, next) => {
  data.push(req.body);
  console.log(data);
  res.sendFile(path.join(__dirname, "../views/succesful.html"));
});

module.exports = succesfulRouter;
