const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");
port = process.env.PORT || 8080;

app.use(bodyParser.json());
//routes import
const postsRoutes = require("./routing/post");
app.use(postsRoutes);

mongoose.set("useFindAndModify", false);

mongoose.connect(
  process.env.database_connection,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connect to db")
);

app.get("/", (req, res) => {
  res.send("Welcome to the book api");
});

//tell express to listen on port3000
app.listen(port, () => console.log(`server is listening on ${port}!`));
