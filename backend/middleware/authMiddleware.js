const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  // Get token from Authorization header
  const authHeader = req.headers.authorization; // Expect: "Bearer TOKEN"
  const token = authHeader?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    // Verify JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user info to request
    req.user = {
      userId: decoded.userId,  // MongoDB _id
      email: decoded.email,    // optional
    };

    next(); // proceed to route/controller
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = verifyToken;
