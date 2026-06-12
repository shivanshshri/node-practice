const express = require("express");

const path = require("path");

const controller = require("../controller/home");

const homepageRouter = express.Router();

homepageRouter.get("/", controller.homepageController);

module.exports = homepageRouter;
