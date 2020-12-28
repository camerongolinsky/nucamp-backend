const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const query = req.body.cityName;
  const apiKey = "9e919bba442997474d53c5b5b72471b6";
  const units = "metric";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=${units}`;
  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const desc = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const id = weatherData.weather[0].id;
      const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

      res.write(`<p>The weather is ${desc}.</p>`);
      res.write(
        `<h1>The temperature in ${query} is ${temp} degrees Celcius.</h1>`
      );
      res.write(`<img src='${iconUrl}' />`);
      res.send();
    });
  });
});

app.listen(3002, function () {
  console.log("Server is running on port 3002");
});
