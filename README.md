
# LIRI: Language-Interpretation-Recognition-Interface

LIRI is a command line node app that takes in parameters and gives you back data using the Spotify, Bands in Town and OMDB APIs.

## NPM Modules Required

You will find these resources helpful in order to build off of the existing CLI program

 - [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
 - [Spotify Developer Account](https://developer.spotify.com/my-applications/#!/) - will provide CLIENT     ID & CLIENT SECRET
 - [Request](https://www.npmjs.com/package/request)
 - [OMDB API](http://www.omdbapi.com/) - will need API key
 - [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api) - will need API key
 - [Moment](https://www.npmjs.com/package/moment)
 - [DotEnv](https://www.npmjs.com/package/dotenv)

Using  Spotify will require a CLIENT ID and CLIENT SECRET. You'll need to register [here](https://developer.spotify.com/my-applications/#!/) as a developer in order to get them. 

## .env file setup

After obtaining the various Client ID/Client Secret/API keys, you will want to create a .env file with the following format (to reference the user-specific information):

    SPOTIFY_ID=*key*
    SPOTIFY_SECRET=*key*

    OMDB_ID=*key*

    BANDSINTOWN_ID=*key*

## Breakdown

### LIRI Can:

 - Search BandsInTown with the name of a band to receive:

    - Name of venue
    - Location of concert
    - Date of event

 - Search Spotify with a song title to see:
    - Artist(s) name
    - Complete song title
    - Preview of song from Spotify
    - Album title

 - Search IMDB for a movie title to see:
    - Title of the movie
    - Year the movie came out
    - IMDB Rating of the movie
    - Rotten Tomatoes Rating of the movie
    - Country where the movie was produced
    - Language of the movie
    - Plot of the movie
    - Actors in the movie

 - Execute raw text in a "command & argument" format from the [random.txt](https://github.com/rebake44/liri-node-app/issues/5#issue-375317844) file

## Using LIRI

To use each LIRI function - type the following CLI in the format below:

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
![bands in town](https://user-images.githubusercontent.com/40619158/47696044-fbdd4e80-dbd2-11e8-9051-217bf3208413.PNG)

Spotify:
![spotify](https://user-images.githubusercontent.com/40619158/47696124-4ced4280-dbd3-11e8-8602-5e9e54d426f0.PNG)

To See Spotify Functionality:
![spotify preview play](https://drive.google.com/file/d/1u_icV0oOGlJ3ci1qdqKAIiMget9upYEL/view)

OMDB:
![omdb](https://user-images.githubusercontent.com/40619158/47696113-41018080-dbd3-11e8-8b37-d9842a6535b3.PNG)

Do what it says:
![do-what-it-says](https://user-images.githubusercontent.com/40619158/47696133-58406e00-dbd3-11e8-9570-ffc3fac889e5.PNG)

Example of random.txt file format:
![do-what-it-says example](https://user-images.githubusercontent.com/40619158/47696175-976ebf00-dbd3-11e8-9294-707576ab6b47.PNG)
