var keys = require("./keys")
var fs = require("fs")
var dotenv = require("dotenv").config();
var moment = (require("moment");
var request = require("request");
var Spotify = require("node-spotify-api");

var spotify = new Spotify(keys.spotify);

var searchType = process.argv[2];
var searchTerm = process.argv.slice(3).join(" ");


spotify.search({ type: "track", query: searchTerm }, function (err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }
    console.log(data); 

    callback();
});

