const express = require('express');
const app = express();
const fetch = require('node-fetch');
const file = 'views/graphData.csv';
const fs = require('fs');
const csv = require('fast-csv');
var request = require('request');

fs.truncate(file, 0, function(){})

fs.appendFile(file, 'id, value\n', function (err) {
   if (err) throw err;
 });

var options = {
   url: "https://api.github.com/orgs/google/repos",
   headers: {
     'User-Agent': 'request'
   }
 };
         
request(options,"https://api.github.com/orgs/google/repos", function (error, response, body) {
     parse(body);
 });

function parse(body){
  var repos = JSON.parse(body);
  var keys;
  var str;
  fs.appendFile(file, "google,\n", function (err) {
    if (err) throw err;
  });

  // only display info for 4 repos 
  
  for(var i = 0; i < 4; i++) {
    str = "google." + repos[i].name + ",\n";
    fs.appendFile(file, str, function (err) {
      if (err) throw err;
    });
    keys = Object.keys(repos[i]);
    var string = JSON.stringify(repos[i]);
    var val = JSON.parse(string);

    for(var k = 0; k < 72; k++){
      str = "google." + repos[i].name + "." + keys[k] + ",\n";
      fs.appendFile(file, str, function (err) {
        if (err) throw err;
      });

      var find = '.';
      var re = new RegExp(find, 'g');
      if(val[keys[k]] != null)
        str =  "google." + repos[i].name + "." + keys[k] + "." +val[keys[k]].toString().replace(/\./gi,"#") + ",1\n";
      fs.appendFile(file, str, function (err) {
        if (err) throw err;
      });
    }
  }
}

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/assets'));

app.get('/', function(req, res){
  res.render('home');
})

app.get('/GithubAPI', (req, res) => {
  res.render('graph');
});

app.use(express.static(__dirname + '/views'));

app.listen(3069);
