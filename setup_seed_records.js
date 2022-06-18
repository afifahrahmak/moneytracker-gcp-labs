const pool = require('./db')

pool
  .query(
    `CREATE TABLE IF NOT EXISTS records (
    id SERIAL PRIMARY KEY,
    name VARCHAR(25) NOT NULL,
    amount FLOAT NOT NULL,
    date DATE NOT NULL,
    notes TEXT,
    attachment VARCHAR(255)
)`
  )
  .then(() => {
    console.log('Table created')
    return pool.query(
      `INSERT INTO records (name, amount, date, notes, attachment) VALUES ('afifah', 90.5, '2022-06-17', 'IP', 'N/A')`
    )
  })
  .then(() => {
    console.log('Record inserted')
    pool.end()
  })
  .catch((err) => {
    console.log('Error creating table', err.stack)
  })
