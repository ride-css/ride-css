var express = require("express");
var stylus = require("stylus");
var jade = require("jade");
var thisUnnamedPlugin = require('../');

var app = express();

// setup for stylus middleware
app.use(stylus.middleware({
  src: __dirname,
  dest: __dirname +'/public',
  force: true,
  compile: function compileFunction (string, path) {
    return stylus(string).set('filename', path).use(thisUnnamedPlugin());
  }
}));

// using static middleware
app.use(express.static(__dirname +'/public'));

// setup for jade rendering
app.use(function(request, response){
  jade.renderFile(__dirname + '/index.jade', function(error, string) {
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    response.end(string);
  });
});


// listening to port 3000
app.listen(3000, function () {
  console.log('Listening on port 3000');  
  console.log('You can go to \n\t http://localhost:3000/');  
  console.log('Thanks for coding with us! \n\t https://github.com/ride-css/ride-css');
});