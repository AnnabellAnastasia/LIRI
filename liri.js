require("dotenv").config();

// Create a variable to access the keys.js file (which is in the same root directory) to access the api keys
// Create variables for the required package ( node-spotify-api, axios, fs for read/write, and moment)

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var axios = require("axios");
var fs = require("fs");
var moment = require('moment');


// Variables for the arguments to be entered by the user in liri
var appCommand = process.argv[2]
// console.log("appCommand: " + appCommand);
// use the slice method to account for user's search starting with index3 position forth because search could have several words
var userSearch = process.argv.slice(3).join(" ");

// Using switch statement to execute the code appropriate to the appCommend that is inputed from the user
function liriRun(appCommand, userSearch) {
    switch (AppCommand) {
        case "concert-this":
            searchForBandsInTown(userSearch);
            b.slice(3).join(" ");

        // Using switch statement to execute the code appropriate to the appCommend that is inputed from the userk;
        case "spotify-this-song":
            getMeSpotify(userSearch);
            b.slice(3).join(" ");

        // Using switch statement to execute the code appropriate to the appCommend that is inputed from the userk;
        case "movie-this":
            getMeMovie(userSearch);
            b.slice(3).join(" ");

        // Using switch statement to execute the code appropriate to the appCommend that is inputed from the userk;
        case "do-what-it-says":
            doWhatItSays();
            break;
    }
}

//pull in required variables
// var spotifyTest = process.env.SPOTIFY_ID

// fs.appendFile('log.txt', appCommand + ",", function (err) {
//     if (err) throw err;
// });

// 

// function searchForBandsInTown(artist) {
//     var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
//     axios.get(queryUrl).then(
//         function(response) {
//             if(response.data[0].venue !=  undefined) {
//                 console.log("Event Veunue: " + response.data[0].venue.name);
//                 console.log("Event Location: " + response.data[0].venue.city);
//                 var eventDateTime = moment(response.data[0].datetime);
//                 console.log("Event Date & Time: " + eventDateTime.format("dddd, MMMM Do YYYY"));
//             }
//             else {
//                 console.log("No results found.");
//             }
//         }
//     ).catch(function (error) {
//         console.log (error);
//   });
// }

// function getMeSpotify(song) {
//     spotify
//         .search({ type: 'track', query: song })
//         .then(function (response) {
//             if (response.tracks.total === 0) {
//                 errorConditionForSpotify();
//             } else {
//                 console.log('---------------------------------------------');
//                 console.log("Artist: " + response.tracks.items[0].artists[0].name);
//                 console.log("Track: " + response.tracks.items[0].name);
//                 console.log("Preview URL: " + response.tracks.items[0].preview_url);
//                 console.log("Album: " + response.tracks.items[0].album.name);
//                 console.log('---------------------------------------------');

//             }
//         }).catch(function (error) {
//             console.log(error);
//             console.log("No Results found. Showing results for 'The Sign' by Ace of Base");
//         });
// }

// function errorConditionForSpotify() {
//     var spotify = new Spotify(keys.spotify);

//     spotify
//         .search({ type: 'track', query: 'The Sign' })
//         .then(function (response) {
//             for (var i = 0; i < response.tracks.items.length; i++) {
//                 if (response.tracks.items[i].artists[0].name === "Ace of Base") {
//                     console.log("Artist: " + response.tracks.items[i].artists[0].name);
//                     console.log("Track: " + response.tracks.items[i].name);
//                     console.log("Preview URL: " + response.tracks.items[i].preview_url);
//                     console.log("Album: " + response.tracks.items[i].album.name);
//                     i = response.tracks.items.length;
//                 }
//             }
//         }).catch(function (error) {
//             console.log(error);
//             console.log("No Results found. ");
//         });
// }

// function getMeMovie(movieName) {
//     axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&tomatoes=true&apikey=trilogy").then(
//         function (response) {
//             //console.log(response.data);
//             if (response.data.Title != undefined) {
//                 console.log("Title: " + response.data.Title);
//                 console.log("Year: " + response.data.Year);
//                 console.log("imdbRating:: " + response.data.imdbRating);
//                 console.log("RottenTomatoes: " + response.data.tomatoRating);
//                 console.log("Country:: " + response.data.Country);
//                 console.log("Language:: " + response.data.Language);
//                 console.log("Plot: " + response.data.Plot);
//                 console.log("Actors: " + response.data.Actors);
//             }
//             else {
//                 getMeMovie("Mr. Nobody");
//             }
//         }
//         // if response is empty call the api again with the "default" movie 
//     ).catch(function (error) {
//         console.log(error);
//         console.log("No Results found. ");
//     });
// }

// function doWhatItSays() {
//     fs.readFile("random.txt", "utf8", function (error, data) {
//         var dataArr = data.split(",");
//         getMeSpotify(dataArr[1])
//         // If the code experiences any errors it will log the error to the console.
//         if (error) {
//             return console.log(error);
//         }
//     });
// }