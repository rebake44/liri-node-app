
# LIRI: Language-Interpretation-Recognition-Interface
 
LIRI is a command line node app that takes in parameters and gives you back data.

You will find these resources helpful in order to build off of the existing CLI program
 - [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
 - [Request](https://www.npmjs.com/package/request)
 - [OMDB API](http://www.omdbapi.com/) 
 - [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)
 - [Moment](https://www.npmjs.com/package/moment)

Using  Spotify will require a CLIENT ID and CLIENT SECRET. You'll need to register [here](https://developer.spotify.com/my-applications/#!/) as a developer in order to get them. 

## Breakdown
LIRI Can:
 - Search BandsInTown for tour schedules.
 - Search Spotify for an artist, band, or song.
 - Search IMDB for an actor, actress, or movie.
 - Execute raw text in a "command & argument" format from the [random.txt](https://github.com/rebake44/liri-node-app/issues/5#issue-375317844) file

## Using LIRI
Bands in Town:

    node liri.js concert-this <artist/band name here>

Spotify:

    node liri.js spotify-this-song  <song name here>

OMDB

    node liri.js movie-this <movie name here>

Do what it says:

    node liri.js do-what-it-says

## Returns
Bands in Town:
![bands in town](https://github.com/rebake44/liri-node-app/issues/1#issue-375316818)


Spotify:
![spotify](https://github.com/rebake44/liri-node-app/issues/3#issue-375317487)

To See Spotify Functionality:
![screencastify](https://drive.google.com/file/d/1u_icV0oOGlJ3ci1qdqKAIiMget9upYEL/view)


OMDB:
![omdb](https://github.com/rebake44/liri-node-app/issues/2#issue-375317442)


Do what it says:
![do what it says image](https://github.com/rebake44/liri-node-app/issues/4#issue-375317554)

