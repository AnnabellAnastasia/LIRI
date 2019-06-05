require('dotenv').config()
// create a variables to acces keys.js file to access the api keys 
// create variables for the required packages node-spotify-api, axios, fs for read/write and moment to convert
var Spotify = require('node-spotify-api');
var keys = require('./keys');
var axios = require("axios");
var fs = require("fs");
var moment = require('moment');


// // Variables for the arguments to be entered by the user in liri
var appCommand = process.argv[2]
// console.log("appCommand: " + appCommand);
// use the slice method to account for user's search starting with index3 position forth because search could have several words
var userSearch = process.argv.slice(3).join(" ");

// Using switch statement to execute the code appropriate to the appCommend that is inputed from the user
function liriRun(appCommand, userSearch) {

    switch (appCommand) {
        case "spotify-this-song":
            getSpotify(userSearch);
            break;

        case "concert-this":
            getBranndsInTown(userSearch);
            break;

        case "movie-this":
            getOMDB(userSearch);
            break;

        case "do-what-it-says":
            getRandom();
            break;
        // if appCommand is left blank, return a default message to user

        default:
            console.log("Please enter one of the following commands: 'concert-this', 'spotify-this-song', 'movie-this' and 'do-what-it-says'")
    }
};
// // function to search Spotify

function getSpotify(songName) {
    var spotify = new Spotify(keys.spotify);
    if (!songName) {
        songName = "The Sign";
    };

    spotify.search({ type: 'track', query: songName }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log('---------------------------------------------');
        console.log("Artist: " + data.tracks.items[0].album.artists[0].name + "\r\n");
        console.log("Song Name: " + data.tracks.items[0].name + "\r\n");
        console.log("Preview URL: " + data.tracks.items[0].href + "\r\n");
        console.log("Album: " + data.tracks.items[0].album.name + "\r\n");
        console.log('---------------------------------------------');

        var logSong = "========Begin Spotify log Entry======" + "\nArtist: " + data.tracks.items[0].album.artists[0]

        fs.appendFile('log.txt', logSong, function (err) {
            if (err) throw err;
        });
    });
};
// function to search bands in town API
function getBranndsInTown(artist) {

    var artist = userSearch;

    var bandQueryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(bandQueryURL)
        .then(function (response) {
        //     console.log(response)
        // })
        // .catch(function (error) {
        //     console.log(error)
        // })

            // adding a line break for clarity of when search results begin
            console.log("--------------------------------------");
            console.log("Event Veunue: " + response.data[0].venue.name + "\r\n");
            console.log("Event Location: " + response.data[0].venue.city + "\r\n");
            console.log("Event Date & Time: " + moment(response.data[0].datetime).format("MM-DD-YYYY") + "\r\n");

            //    Append text into log.txt file
            var logConcert = "--------Begin Concert log Entry---------" + "\nName of the musician: " + artist + "\nName of the venue:" +

                fs.appendFile("log.txt", logConcert, function (err) {
                    if (err) throw err;

                });
            });
};

function getOMDB(movie) {
    if (movie) {
        movie = "Mr.Nobody";
    }
    var movieQueryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&tomatoes=true&apikey=trilogy";
    axios.request(movieQueryUrl).then(
        function (response) {
            console.log("Title: " + response.data.Title + "\r\n");
            console.log("Year: " + response.data.Year + "\r\n");
            console.log("imdbRating:: " + response.data.imdbRating + "\r\n");
            console.log("RottenTomatoes: " + response.data.tomatoRating);
            console.log("Country:: " + response.data.Country + "\r\n");
            console.log("Language:: " + response.data.Language + "\r\n");
            console.log("Plot: " + response.data.Plot + "\r\n");
            console.log("Actors: " + response.data.Actors + "\r\n");

            var logMovie = "----------Begin Movie Log Entry--------" + "\nMovie title:" + response.data.Title + "\nYear released:" + response.data.Year
            fs.appendFile("log.txt", logMovie, function (err) {
                if (err) throw err;
            });
        });
};
// function to log results from the other functions

function getRandom() {
    fs.readFile("random.txt", "utf8", function (error, data){
        if (error){
            return console.log(error);
    } else {
        console.log(data);
        var randomData = data.split(",");
        liriRun(randomData[0], randomData[1]);
    }
    // console.log("\r\n" +"testing : " + randomData[0] + randomData[1]);
});
};
// Function to log results from the other functions
function logResults (data){
    fs.appendFile("log.txt", data, function (err) {
        if (err) throw err;
    });
};
    
liriRun(appCommand, userSearch);