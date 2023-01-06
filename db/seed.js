// const {
//   parks,
//   ride_categories,
//   rides,
//   stall_categories,
//   stalls,
// } = require("./data/index.js");

const db = require("./connection.js");

function seed() {
  return db
    .query("DROP TABLE IF EXISTS rides;")
    .then(() => {
      return db.query("DROP TABLE IF EXISTS stalls;");
    })
    .then(() => {
      return db.query("DROP TABLE IF EXISTS foods;");
    })
    .then(() => {
      return db.query("DROP TABLE IF EXISTS stalls_foods;");
    })
    .then(() => {
      return db.query("DROP TABLE IF EXISTS parks;");
    })
    .then(() => {
      return createParks();
    });
}

function createParks() {
  return db.query("DROP TABLE IF EXISTS parks;").then(() => {
    /* Create your parks table in the query below */
    return db.query(
      "CREATE DATABASE parks (park_id SERIAL PRIMARY KEY, park_name VARCHAR(40) NOT NULL, year_opened INT NOT NULL, annual_attendance INT NOT NULL);"
    );
  });
}

module.exports = { seed };
