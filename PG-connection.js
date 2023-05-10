const knex = require("knex");

module.exports = knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: '1234',
    database: 'escola',
    port: '5432'
  }
});
