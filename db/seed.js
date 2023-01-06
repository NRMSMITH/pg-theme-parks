const {
  parks,
  rides,
  stalls,
} = require("./data/index.js");

const pg = require('pg-format')

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
    }).then(() => {
      return createRides();
    }).then(() => {
      return insertParks();
    });
}

function createParks() {
  return db.query("DROP TABLE IF EXISTS parks;").then(() => {
    return db.query("CREATE TABLE parks ( park_id SERIAL PRIMARY KEY, park_name VARCHAR(40) NOT NULL, year_opened INT NOT NULL, annual_attendance INT NOT NULL);")
  })
}

function insertParks() {
  const sql = pg(`INSERT INTO parks ( park_name, year_opened, annual_attendance ) VALUES %L RETURNING *;`, parks.map(({park_name, year_opened, annual_attendance}) => [park_name, year_opened, annual_attendance]))
  return db.query(sql);
}


function createRides() {
  return db.query("DROP TABLE IF EXISTS rides").then(() => {
    return db.query("CREATE TABLE rides ( ride_id SERIAL PRIMARY KEY, ride_name VARCHAR(20) NOT NULL, year_opened INT NOT NULL, votes INT DEFAULT 0, park_id INT REFERENCES parks(park_id) );")
  })
}


module.exports = { seed };
