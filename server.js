/* eslint-disable */
const express = require('express');
const sequelize = require('./db.js');
const routes = require('./routes');

require('dotenv').config();
const port = process.env.DB_PORT || 3000;

const app = express();
app.use(express.json());
app.use(routes);

sequelize.sync().then(() => {
  console.log('Database connected');
  app.listen(port, () => {
    console.log('Server is running on port 3000');
  });
});
