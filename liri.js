require("dotenv").config();

//Require statements and variables

var keys = require("./keys");
var fs = require("fs");
var request = require("request");
var moment = require("moment");
var Spotify = require("node-spotify-api");

var spotify = new Spotify(keys.spotify);
var bit = keys.bit.id;
var omdb = keys.omdb.id;


// function movieThis(movieName, callback) {
    var nodeArgs = process.argv;
    var movieName = "";


    // Loop through all the words in the node argument
    // And do a little for-loop magic to handle the inclusion of "+"s
    // We start at 3 to bypass the "node", path, & command args

    for (var i = 2; i < nodeArgs.length; i++) {
        if (i > 2 && i < nodeArgs.length) {
            movieName = movieName + "+" + nodeArgs[i];
        }
        else {
            movieName += nodeArgs[i];
        }
    }
    console.log("\r");

console.log(movieName);


var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=" + omdb;
// console.log(queryUrl);
// console.log(omdb);


request(queryUrl, function(error, response, body) {
    //if request is successful (no error)
    if (!error && response.statusCode === 200) {
        //parse body for user return formatting
        var parsed = (JSON.parse(body));

console.log("\n");
        console.log("Movie Title: " + parsed.Title);
        console.log("Year Released: " + parsed.Year);
        console.log("IMDB Rating: " + parsed.imdbRating + "/10");
        console.log("Rotten Tomatoes: " + parsed.Ratings[1].Value);
        console.log("Country Produced: " + parsed.Country);
        console.log("Language: " + parsed.Language);
        console.log("Plot: " + parsed.Plot);
        console.log("Actors: " + parsed.Actors);

       
    } else {
        console.log("error");

    }
});

