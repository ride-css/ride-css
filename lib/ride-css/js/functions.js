// copyright 2015 - this year @ Paolo Roth <iamoctod@gmail.com>
// MIT licenced

// requiring stylus
var stylus = require('stylus');
// getting stylus helpers
var helpers = stylus.helpers;
// getting stylus nodes
var nodes = stylus.nodes;

// exporting the plugin
module.exports = function () {
  // returning function for use();
  return function ($stylus) {
    // Number functions
    // parse-float definition
    $stylus.define('parse-float', stylusParseFloat);
    // parse-int definition
    $stylus.define('parse-int', stylusParseInt);
    // String functions
    // has-char function
    $stylus.define('has-char', stylusHasChar);
    // replace-all function
    $stylus.define('replace-all', stylusReplaceAll);
  }
}

/**
 * parse-float function those could be handy for forcing unit conversion to numbers
 * @param  {Object} value passed by stylus
 * @return {Number}       the decimal number passed back to stylus .styl file
 */
function stylusParseFloat (value) {
  return parseFloat(value.val);
}

/**
 * Returns a Number (int)
 * @param  {Object} value passed by stylus
 * @return {Number}       
 */
function stylusParseInt (value) {
  return parseInt(value.val);
}

/**
 * this function will return a boolean
 * @param  {Object} string a string passed through stylus
 * @param  {Object} find   a string passed through stylus (the match)
 * @return {Boolean}        returns true or false
 */
function stylusHasChar (string, find) {
  var regex = new RegExp(find.val);
  var match = string.val.match(regex);

  return match ? match.length > 0 : false;
}

/**
 * This will help to replace every occurrance in a string
 * @param  {Object} string      A string passed in stylus
 * @param  {Object} find        The matching string
 * @param  {Object} replaceWith The replacing string
 * @return {String}             The returning string
 */
function stylusReplaceAll (string, find, replaceWith) {
  var regex = new RegExp(find.val, 'gi');

  return string.val.split(regex).join(replaceWith.val);
}