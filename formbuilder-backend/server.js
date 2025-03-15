const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Allow frontend to access backend
app.use(express.json()); // Parse JSON requests

// Test API route
app.get("/", (req, res) => {
  res.send({ message: "Hello from Node.js backend!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
