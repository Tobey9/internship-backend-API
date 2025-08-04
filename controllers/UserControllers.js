const User = require("../models/User");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
};

module.exports.registerUser = async (req, res) => {
  const { email, password, userName, role } = req.body;

  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    const error = new Error("Email already registered");
    error.status = 400;
    throw error;
  }

  const user = await User.create({ userName, email, password, role });

  const token = generateToken(user);

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV == "production",
    sameSite: "lax",
    maxAge: 3600000,
  });

  res.status(200).json({ token });
};

module.exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });

  if (!user || !(await user.validatePassword(password))) {
    const error = new Error("Invalid Credentials");
    error.status = 401;
    throw error;
  }

  const token = generateToken(user);

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV == "production",
    sameSite: "lax",
    maxAge: 3600000,
  });

  res.status(200).json({ token });
};

module.exports.logout = (req, res) => {
  res.clearCookie("jwt", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV == "production",
  });
  res.json({ message: "Logged out successfully" });
};

module.exports.getUsers = async (req, res) => {
  const users = await User.findAll({
    where: {
      role: ["Intern", "Volunteer"],
    },
    attributes: ["id", "userName", "email", "role"],
  });

  if (!users || users.length === 0) {
    return res.status(404).json({ message: "No interns or volunteers found" });
  }

  res.status(200).json(users);
};
