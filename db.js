const Pool = require("pg").Pool
const pool = new Pool({
  user: "postgres",
  password: "123456788",
  host: "localhost",
  port: 5432,
  database: "honda_accord",
})

module.exports = pool
