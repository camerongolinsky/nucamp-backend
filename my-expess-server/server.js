const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>");
});

app.get("/contact", function (req, res) {
  res.send("Contact me at cam@camcam.com");
});

app.get("/about", function (req, res) {
  res.send("<h2>Cameron Golinsky, the lovable rascal</h2>");
});

app.get("/hobbies", function (req, res) {
  res.send("<ul><li>coffee</li><li>code</li><li>beer</li></ul>");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
