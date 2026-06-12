const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");

//fake databse
let data = [];

module.exports = class Home {
  constructor(name, location, price, rating) {
    this.name = name;
    this.location = location;
    this.price = price;
    this.rating = rating;
  }
  save() {
    Home.fetchAll((data) => {
      data.push(this);
      const filePath = path.join(rootDir, "data", "homes.json");
      fs.writeFile(filePath, JSON.stringify(data), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(callback) {
    const filePath = path.join(rootDir, "data", "homes.json");
    fs.readFile(filePath, (err, data) => {
      if (!err) {
        callback(JSON.parse(data));
      } else {
        callback([]);
      }
    });
  }
};
