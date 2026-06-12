const express = require("express");

const path = require("path");
const bodyParser = require("body-parser");

const data = require("../data/data");
const controller = require("../controller/home");

const succesfulRouter = express.Router();

succesfulRouter.use(bodyParser.urlencoded());

succesfulRouter.post("/add-home", controller.succesfulController);

module.exports = succesfulRouter;
