const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

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