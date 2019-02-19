const assert = require('assert');
const Decorator = require("../decorator.js");
const Paint = require("../paint.js");
const Room = require("../room.js");


describe("decorator", function() {

  let decorator;

  beforeEach(function() {
    decorator = new Decorator();

    paint1 = new Paint(5);
    paint2 = new Paint(8);
    paint3 = new Paint(2);

    room1 = new Room(12);
    room2 = new Room(15);
  })

  it("should start with an empty paint stock", function() {
    assert.deepStrictEqual(decorator.stock, []);
  })

  it("should be able to add a can of paint to paint stock", function () {
    decorator.addPaint(paint1);
    assert.deepStrictEqual(decorator.stock, [5]);
  })

  it("should be able to calculate total litres of paint it has in stock", function () {
    decorator.addPaint(paint1);
    decorator.addPaint(paint2);

    assert.deepStrictEqual(decorator.stock, [5,8]);
    assert.deepStrictEqual(decorator.calcTotal(), 13)
  })

  it("should be able to calculate if it has enough paint to paint a room", function () {
    decorator.addPaint(paint1);
    decorator.addPaint(paint2);

    assert.equal(decorator.canPaint(room1), true);
    assert.equal(decorator.canPaint(room2), false);
  })

  it("should be able to paint a room if has enough paint in stock", function () {
    decorator.addPaint(paint1);
    decorator.addPaint(paint2);

    decorator.paint(room1);
    assert.equal(room1.painted, true);
  })

});
