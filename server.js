const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

const passwords = {
  "ownerPassword123": "OWNER",
  "developerPassword456": "DEVELOPER"
};

app.post('/api/login', (req, res) => {
  const { password } = req.body;
  
  if (password && passwords[password]) {

    res.json({
      success: true,
      role: passwords[password]
    });
  } else {

    res.json({
      success: false,
      message: 'Invalid password'
    });
  }
});

app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
});
