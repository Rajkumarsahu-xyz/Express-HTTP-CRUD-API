const express = require("express");
const sequelize = require("./db.js");
const routes = require("./routes");

const app = express();
app.use(express.json());
app.use(routes);

sequelize.sync().then(() => {
  console.log("Database connected");
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
});
