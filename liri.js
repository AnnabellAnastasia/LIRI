// require the keys from the keys.js folder
var keys = require('./keys.js');

var dotenv = require("dotenv").config();

// var Twitter = require('twitter');
// var spotify = require('spotify');
// var request = require('request');

// var getMyTweets = function () {

//     var client = new Twitter(keys.twitterKeys);
//     console.log(keys.twitterKeys);

//     var params = { screen_name: 'Anna75893882' };
//     client.get('statuses/user_timeline', params, function (error, tweets, response) {
//         if (!error) {
//             // console.log(tweets);
//             for (var i = 0; i < tweets.length; i++) {
//                 console.log(tweets[i].created_at);
//                 console.log('');
//                 console.log(tweets[i].text);
//             }
//         }
//     });
// }

// var getArtistName = function(artist){
//     return artist.name;
// }

// var getMeSpotify = function(songName) {
// spotify.search({ type: 'track', query: 'dancing in the moonlight' },
//     function (err, data) {
//         if (err) {
//             console.log('Error occurred: ' + err);
//             return;
//         }
//         console.log(data)
        //         var songs = data.tracks.items;
        //         for(var i=0; i<songs.length; i++){
        //             console.log(i);
        //             console.log('artist(s): '+ songs[i].artists.map(
        //                 getArtistName));
        //             console.log('song name: '+ songs[i].name);
        //             console.log('preview song: '+ songs[i].preview_url);
        //             console.log('album: '+ songs[i].album.name);
        //             console.log('----------------------------------------')
        //             }
    });
// }

// var getMeMovie = function(movieName){
//     request('http://www.omdbapi.com/?t' + movieName + '&y=&plot=short&r=json&apikey=trilogy', 
//     function (error, response, body) {
//     if (!error && response.statusCode == 200){
//         console.log(body);
//     } 
//     console.log(response)
//     })
// }


// var pick = function (caseData, functionData) {
//     switch (caseData) {
//         case 'my-tweets':
//             getMyTweets();
//             break;
//         //         case 'spotify-this-song':
//         //         getMeSpotify(functionData);
//         //         break;
//         //         case 'movie-this':
//         //         getMeMovie(functionData);
//         //         break;
//         default:
//             console.log('Liri does not know that');
//     }
// }

// var runThis = function (argOne, argTwo) {
//     pick(argOne, argTwo);
// };

// runThis(process.argv[2], process.argv[3]);