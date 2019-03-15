const Sequelize = require("sequelize");

// Database Setup
module.exports = new Sequelize("codegig", "bolt", "", {
  host: "localhost",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
