"use strict";

const { assert } = require("chai");
const { multiply } = require("../");

describe("multiply()", () => {
  it("should multiply positive numbers together", () => {
    assert.equal(multiply(2, 4), 8);
  });
});
