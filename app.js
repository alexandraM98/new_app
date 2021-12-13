var express = require("express");
var path = require("path");

var routes = require("./routes");
var app = express();

require('dotenv').config();

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(routes);

app.listen(app.get("port"), function(){
    console.log("Server started on port " + app.get("port"));
})


const request = require('request');
const argv = require('yargs').argv;

/*
let apiKey = 'ffb92f5691371697cb699c3a235cc350'; //api key obtained from OpenWeather API
let city = argv.c || 'bucharest';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } 
  
  else {
    let weather = JSON.parse(body);
    let message = `It's ${weather.main.temp} degrees in ${weather.name}.`;
    console.log(message);
  }
});
*/