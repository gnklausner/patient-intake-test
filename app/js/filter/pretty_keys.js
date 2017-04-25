'use strict';

module.exports = function() {
  return function(input) {
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    var words = input.split('_');

    var output_words = [];

    for (var word of words) {
      word = capitalizeFirstLetter(word);
      output_words.push(word);
    }
    
    var output_string = output_words.join(' ');
    return output_string;
  };
};