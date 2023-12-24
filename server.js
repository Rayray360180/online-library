const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

const usersFilePath = path.join(__dirname, "users.json");

// Проверяем существование файла users.json
if (!fs.existsSync(usersFilePath)) {
  fs.writeFileSync(usersFilePath, JSON.stringify([]));
}

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  const users = JSON.parse(fs.readFileSync(usersFilePath));

  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    res.json({ success: true, message: "Login successful" });
  } else {
    res.status(401).json({ success: false, message: "Invalid email or password" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
