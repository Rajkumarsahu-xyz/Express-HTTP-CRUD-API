const Sequelize = require("sequelize");

// Sequelize url
const sequelize = new Sequelize(
  "postgres://postgres:123@Rbpmr@localhost/crud_api",
  {
    dialect: "postgres",
  }
);

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
testConnection();

module.exports = sequelize;
