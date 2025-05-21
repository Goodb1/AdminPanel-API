const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const passwords = {
  "ownerPassword123": "OWNER",
  "developerPassword456": "DEVELOPER"
};

app.get('/', (req, res) => {
  res.send("Welcome to the API! Use /api/login to log in.");
});

app.post('/api/login', (req, res) => {
  const { password } = req.body;
  
  if (password && Object.prototype.hasOwnProperty.call(passwords, password)) {

    res.json({
      success: true,
      role: passwords[password]
    });
  } else {

    res.json({
      success: false,
      message: "Invalid password"
    });
  }
});

app.listen(port, () => {
  console.log(`API server running on port ${port}`);
});

