const db = require("../db/connection.js");

exports.selectParks = () => {
  return db.query(`SELECT * FROM parks;`).then((res) => {
    return res.rows;
  });
};

exports.selectParkById = () => {};

exports.insertPark = () => {};

exports.removeParkById = () => {};

exports.updateParkById = () => {};
