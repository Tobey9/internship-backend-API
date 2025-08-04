const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logout,
  getUsers,
} = require("../controllers/UserControllers");
const catchAsync = require("../utils/catchAsync");
const authorizeRoles = require("../middlewares/authorizeRoles");
const { registerValidator, loginUserValidator } = require("../utils/validate");
const authVerify = require("../middlewares/authVerify");
const validateRequest = require("../middlewares/validateRequest");

router.get("/", authVerify, authorizeRoles(["Admin"]), catchAsync(getUsers));
router.post(
  "/register",
  registerValidator,
  validateRequest,
  catchAsync(registerUser)
);
router.post(
  "/login",
  loginUserValidator,
  validateRequest,
  catchAsync(loginUser)
);
router.post("/logout", logout);

module.exports = router;
