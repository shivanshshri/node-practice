const path = require("path");

const data = require("../data/data");

exports.homepageController = (req, res, next) => {
  console.log("Homepage loaded");
  // res.sendFile(path.join(__dirname, "../views/homepage.html"));
  res.render("homepage", { data });
};

exports.addhomeController = (req, res, next) => {
  console.log("adding home page loaded");
  res.sendFile(path.join(__dirname, "../views/add-home.html"));
};

exports.succesfulController = (req, res, next) => {
  data.push(req.body);
  console.log(data);
  res.sendFile(path.join(__dirname, "../views/succesful.html"));
};
