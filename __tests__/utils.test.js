/* make sure you write your tests for your utils functions in here :eyes: */
const db = require("../db/connection.js");
const { seed } = require("../db/seed");
const { formatRides } = require("../utils/utils.js");

beforeEach(() => {
  return seed();
});

afterAll(() => {
  if (db.end) db.end();
});

describe("formatRides()", () => {
  test("should return an array", () => {
    expect(Array.isArray(formatRides())).toBe(true);
  });

  //   test("should return an array", () => {
  //     expect(Array.isArray(formatRides())).toBe(true);
  //   });
});
