const express = require('express');
const path = require("path")

const app = express();
const port = 3000;

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "publica")))

app.get('/', function (req, res) {
    //nome da pasta ejs
  res.render("index")
})

app.listen(port, () => {
    console.log(`servidor rodadando em http://localhost:${port}`)
})