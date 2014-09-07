var Twitter = require('node-tweet-stream');
var config =  require("./config.json");
var t = new Twitter(config);

t.on('tweet', function (tweet) {
  //console.log(tweet);
  /*
  Not RT
  In user.lang='en'
  */
  if(!tweet.retweeted && tweet.user.lang==='en'){
    console.log(tweet.text);
  }
});

t.on('error', function (err) {
  console.log('Oh no');
});

 // t.track(' ');
 t.track('android');
//
// // 5 minutes later
// t.track('tacos');
//
// // 10 minutes later
// t.untrack('pizza');
