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

if (searchType === "concert-this") {
  concertThis(searchTerm, function () {
    console.log("concert progress");
  })
}
else if (searchType === "movie-this") {
  movieThis(searchTerm, function () {
    console.log("movie progress");
  })
}
else if (searchType === "spotify-this-song") {
  spotifyThisSong(searchTerm, function () {
    console.log("spotify progress");
  })
}
else if (searchType === "do-what-it-says") {
  doThis(searchTerm, function () {
    console.log("do it progress");
  })
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
function spotifyThisSong(searchTerm, callback) {
  if (searchTerm === undefined) {
    searchTerm === "The Sign"
  }
  else {
    searchTerm = "\""+searchTerm+"\"";
  }

spotify.search({ type: "track", query: searchTerm, limit: 2 }, function (err, data) {
  if (err) {
      return console.log('Error occurred: ' + err);
  }
    console.log("Artist: ");
    // console.log(data.tracks.items[0]);
    for (let h = 0; h < data.tracks.items.length; h++) {
      console.log(JSON.stringify(data,  null, 2));
      console.log(data.tracks.items[h].artists);
    

    // for (let i = 0; i < data.tracks.items[0].artists.length; i++) {
    //   console.log(JSON.stringify(data, null, 2));

    //   console.log(data.tracks.items[0].artists[i].name);
    callback();
    }


  });
  }



  // for (let i = 0; i < body.length; i++) {
  //   if (parsed[i] != undefined) {
  //     console.log("\n");
  //     console.log(parsed[i].venue.name);


  // console.log(data); 
