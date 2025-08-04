const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const errorHandler = require("./middlewares/errorHandler");
const userRoutes = require("./routes/userRoutes");

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", userRoutes);

app.use(errorHandler);

module.exports = app;
