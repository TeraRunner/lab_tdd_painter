const assert = require('assert');
const Room = require("../room.js");


describe("room", function() {

  let room;

  beforeEach(function() {
    room = new Room(10, false);
  })

  it("should have an area in square meters", function() {
    assert.strictEqual(room.area, 10);
  })

  it("should start not painted", function () {
    assert.equal(room.painted, false);
  })


  it("should be able to be painted", function () {
    room.paint();
    assert.equal(room.painted, true);
  })



});
