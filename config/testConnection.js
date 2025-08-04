const sequelize = require("./database");

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection established");

    await sequelize.sync();
    console.log("Database synced.");
  } catch (err) {
    console.error("Unable to connect:", err);
  }
}

module.exports = testConnection;
