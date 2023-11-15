/* eslint-disable */

const Sequelize = require('sequelize');
require('dotenv').config();

const dialect = process.env.DB_DIALECT;
const userName = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const dbName = process.env.DB_NAME;

// Sequelize url
const sequelize = new Sequelize(
  `${dialect}://${userName}:${password}@${host}/${dbName}`,
  {
    dialect: 'postgres',
  },
);

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
testConnection();

module.exports = sequelize;
