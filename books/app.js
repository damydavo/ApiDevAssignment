const express = require("express");
const app = express();
const request = require("request");
app.set("view engine", "ejs");
port = process.env.PORT || 8080;

app.get("/api/external-books/:id?", function (req, res) {
  request("https://www.anapioficeandfire.com/api/books", function (
    error,
    response,
    body
  ) {
    console.error("error:", error); // Print the error if one occurred
    console.log("message entered successfully");
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received

    const data = JSON.parse(body);
    res.send(data);
  });
});

//tell express to listen on port3000
app.listen(port, () => console.log(`server is listening on ${port}!`));
