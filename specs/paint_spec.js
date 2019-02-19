const assert = require('assert');
const Paint = require("../paint.js");


describe("paint", function() {

  let paint;

  beforeEach(function() {
    paint = new Paint(5);
  })

  it("should have a number of litres of paint", function() {
    assert.strictEqual(paint.volume, 5);
  })

  it("should be able to check if it is empty", function () {
    paint.check_volume();
    assert.strictEqual(paint.check_volume(), false);
  })

  it("should be able to empty itself of paint", function () {
    paint.empty();
    assert.strictEqual(paint.volume, 0);
  })

});
