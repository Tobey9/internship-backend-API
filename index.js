require("dotenv").config();
const app = require("./app");
const PORT = 3000;
const testConnection = require("./config/testConnection");

require("./models/User");

testConnection();

app.listen(PORT, () => {
  console.log(`Server connected to port ${3000}`);
});
