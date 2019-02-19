const Decorator = function(stock = []) {
  this.stock = stock;
};

Decorator.prototype.addPaint = function (paint) {
  this.stock.push(paint.volume);
};

Decorator.prototype.calcTotal = function () {
  let total = 0
  for (let i = 0; i < this.stock.length; i++) {
    let currentStock = this.stock[i];
    total += currentStock
  }
  return total;
};

Decorator.prototype.canPaint = function (room) {
  if (this.calcTotal >= room.area) {
    return true;
  } else {
    return false;
  }
}

module.exports = Decorator;
