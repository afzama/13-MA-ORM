const Sequelize = require('sequelize');
require('dotenv').config();

// Create a connection object
const sequelize = new Sequelize(
  process.env.DB_NAME,
  // User
  process.env.DB_USER,
  // Password
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  }
);

module.exports = sequelize;
