const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Dockerized App is Live! 🚀</h1><p>Managed by Kiran | DevOps Journey</p>');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
