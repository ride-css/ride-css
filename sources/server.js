var express = require('express')
  , grunt = require('grunt')
  , path = require('path')
  , app = express()
  , packageJSON = grunt.file.readJSON('package.json');

app.use(express.static(path.resolve(__dirname, '../')));
app.listen(8080);