const express = require("express");
const mysql = require("mysql2");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // Change this to your MySQL password
  database: "project_bidding",
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected...");
});


// Register User
app.post("/register", async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  try {
    // Check if user exists
    db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
      if (results.length > 0) {
        return res.status(400).json({ message: "Email already exists" });
      }

      // Hash Password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert User
      db.query(
        "INSERT INTO users (first_name, last_name, email, password_hash) VALUES (?, ?, ?, ?)",
        [first_name, last_name, email, hashedPassword],
        (err, result) => {
          if (err) return res.status(500).json({ message: "Database error" });
          res.status(201).json({ message: "User registered successfully" });
        }
      );
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Start Server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
