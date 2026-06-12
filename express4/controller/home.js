const path = require("path");

const Home = require("../models/homes");

exports.addhomeController = (req, res, next) => {
  console.log("adding home page loaded");
  res.sendFile(path.join(__dirname, "../views/add-home.html"));
};

exports.succesfulController = (req, res, next) => {
  const { name, location, price, rating } = req.body;
  const home = new Home(name, location, price, rating);
  home.save();
  //console.log(data);
  res.sendFile(path.join(__dirname, "../views/succesful.html"));
};

exports.homepageController = (req, res, next) => {
  const data = Home.fetchAll();
  console.log("Homepage loaded");
  // res.sendFile(path.join(__dirname, "../views/homepage.html"));
  res.render("homepage", { data });
};
