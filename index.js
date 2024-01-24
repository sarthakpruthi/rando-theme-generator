const express = require('express');

const {themes} = require("./themes")
const cors = require("cors");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());


app.get('/theme', async (req, res) => {
    const randomIndex = Math.floor(Math.random() * themes.length);
    res.send(themes[randomIndex]);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
