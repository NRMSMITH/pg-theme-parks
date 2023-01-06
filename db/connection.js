const { Pool } = require("pg");
require("dotenv").config({ path: "../.env" });

// console.log(process.env.PGDATABASE);

if (!process.env.PGDATABASE) {
  throw new Error("No PGDATABASE configured");
}

const pool = new Pool();

// console.log(pool.password);

module.exports = pool;
