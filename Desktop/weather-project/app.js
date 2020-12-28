const express = require('express');
const https = require('https');

const app = express();

app.get('/', function(req,res){

    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Pasadena&appid=9e919bba442997474d53c5b5b72471b6&units=metric'
    https.get(url, function(response){
        console.log(response.statusCode);

        response.on('data', function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const desc = weatherData.weather[0].description;
        })
    })

    res.send('Server is up and running');
})



app.listen(3002, function(){
    console.log('Server is running on port 3002');
})