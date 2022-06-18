const { Pool } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'recordsGCP',
  password: 'postgres',
  port: 5432
})
// ''database.server.com''

module.exports = pool
