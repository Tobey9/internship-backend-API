const jwt = require("jsonwebtoken");

function authVerify(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Access token missing" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // { id, role, ... }
    next();
  } catch (err) {
    res.status(403).json({ message: "Invalid token" });
  }
}

module.exports = authVerify;
