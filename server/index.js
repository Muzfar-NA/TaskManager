require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authMiddleware = require("./middleware/auth");
const pool = require("./db");



const app = express();

app.use(cors());
app.use(express.json());;

app.post("/register", async (req, res) => {

  try {

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "All fields required",
      });
    }

    // CHECK IF USER EXISTS
    const existingUser = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (existingUser.rows.length > 0) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // HASH PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10);

    // INSERT USER
    const newUser = await pool.query(
      "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
      [email, hashedPassword]
    );

    res.json({
      message: "User created",
      user: newUser.rows[0],
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server error",
    });

  }

});
app.get("/me", authMiddleware, async (req, res) => {

  try {

    const userResult = await pool.query(
      "SELECT id, email FROM users WHERE id = $1",
      [req.user.id]
    );

    res.json(userResult.rows[0]);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server error",
    });

  }

});

app.post("/login", (req, res) => {

  const { email, password } = req.body;

  if (!email || !password) {

    return res.status(400).json({
      message: "All fields required",
    });

  }

  res.json({
    message: "Login successful",
  });

});
app.listen(5000, () => {
  console.log("Server running on port 5000");
});