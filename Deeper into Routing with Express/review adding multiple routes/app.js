const express = require('express');
const posts = require("./mock/posts.json");

const app = express();

app.get('/', (req, res) => {
  res.send("<h1>I Love Treehouse!</h1>");
});

app.get('/blog', function (req, res) {
    res.send( posts );
});

app.listen(3000, () => {
  console.log("The frontend server is running on port 3000!")
});
