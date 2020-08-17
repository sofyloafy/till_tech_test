let coffeeData = require('../hipstercoffee.json')


class Till {
  constructor() {
    this.total = 0
    this.receipt = ""
  }

  calculateReceipt(item) {
    this.total += coffeeData[0].prices[0][item]
    return coffeeData[0].prices[0][item]
  }

  header(){
    this.receipt += (coffeeData[0].shopName + "\n")
    this.receipt += coffeeData[0].address
    return this.receipt
  }

}
module.exports = Till 