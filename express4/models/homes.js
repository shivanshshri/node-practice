const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");

//fake databse
const data = [];

module.exports = class Home {
  constructor(name, location, price, rating) {
    this.name = name;
    this.location = location;
    this.price = price;
    this.rating = rating;
  }
  save() {
    data.push(this);
    const filePath = path.join(rootDir, "data", "homes.json");
    fs.writeFile(filePath, JSON.stringify(data), (err) => {
      console.log(err);
    });
  }

  static fetchAll() {
    return data;
  }
};
