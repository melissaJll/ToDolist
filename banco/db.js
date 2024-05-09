const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect(
      "mongodb+srv://root:root@todolist.fflkkgk.mongodb.net/?retryWrites=true&w=majority&appName=todoList",

    )
    .then(() => {
      console.log("MongoDB conectado");
    })
    .catch((err) => console.log(err));
};

module.exports = connectToDb;
