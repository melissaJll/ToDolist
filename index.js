const express = require('express')
const app = express()

const port = 3000;
app.set("view engine", "ejs")

app.get('/', function (req, res) {
    //nome da pasta
  res.render("index")
})

app.listen(port, () => {
    console.log(`servidor rodadando em http://localhost:${port}`)
})