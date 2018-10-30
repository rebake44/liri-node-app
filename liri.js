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


//CLI syntax
var searchType = process.argv[2];
var searchTerm = process.argv.slice(3).join(" ");

chooseFunction(searchType, searchTerm);

function chooseFunction(searchType, searchTerm) {

  if (searchType === "concert-this") {
    concertThis(searchTerm, function () {
      // console.log("concert progress");
    })
  }
  else if (searchType === "movie-this") {
    movieThis(searchTerm, function () {
      // console.log("movie progress");
    })
  }
  else if (searchType === "spotify-this-song") {
    spotifyThisSong(searchTerm, function () {
      // console.log("spotify progress");
    })
  }
  else if (searchType === "do-what-it-says") {
    // console.log("do this console");
    doThis()
    // console.log("do it progress");
  }
}


function concertThis(searchTerm, callback) {
  var queryUrl = "http://rest.bandsintown.com/artists/" + searchTerm + "/events?app_id=" + bit;
  // console.log(queryUrl);
  // console.log(omdb);


  request(queryUrl, function (error, response, body) {
    //if request is successful (no error)
    if (!error && response.statusCode === 200) {
      //parse body for user return formatting
      var parsed = (JSON.parse(body));

      for (let i = 0; i < body.length; i++) {
        if (parsed[i] != undefined) {
          console.log("\n");
          console.log(parsed[i].venue.name);
          console.log((parsed[i].venue.city) + ", " + (parsed[i].venue.country));
          datetime = moment(parsed[i].datetime, "YYYY-MM-DDtHH:mm:ss").format("MM-DD-YYYY");
          console.log(datetime);
        }
      }
    }
    callback();
  });
}

function spotifyThisSong(searchTerm, callback) {
  console.log(searchTerm);
  if (searchTerm.length < 1) {
    console.log("I saw a sign");
    searchTerm = "\"" + "The Sign" + "\"";
  }
  else {
    searchTerm = "\"" + searchTerm + "\"";
  }

  spotify.search({ type: "track", query: searchTerm, limit: 2 }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    for (let i = 0; i < data.tracks.items[0].artists.length; i++) {
      console.log(data.tracks.items[0].artists[i].name);
    }

    console.log(("Song Name: ") + data.tracks.items[0].name);
    console.log(("Preview Link: ") + data.tracks.items[0].preview_url);
    console.log(("Song Album: ") + data.tracks.items[0].album.name);

    callback();

  });
}

function movieThis(searchTerm, callback) {
  if (!searchTerm) //if no title is defined
    searchTerm = "Mr. Nobody";

  var queryUrl = "http://www.omdbapi.com/?t=" + searchTerm + "&y=&plot=short&apikey=" + omdb;
  // console.log(queryUrl);
  // console.log(omdb);


  request(queryUrl, function (error, response, body) {
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
    }
    callback();
  });
}

function doThis() {
  fs.readFile("random.txt", "utf8", function (error, data) {

    // If the code experiences any errors it will log the error to the console.
    if (error) {
      return console.log(error);
    }

    // Then split it by commas (to make it more readable)
    var dataArr = data.split(",");

    chooseFunction(dataArr[0], dataArr[1]);

  });
}
