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
  }

  static fetchAll() {
    return data;
  }
};
