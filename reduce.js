var words = ['Bananna', 'Dorian', 'Apple', 'Dorian', 'Bananna', 'Dorian'];
var latin = ["qui", "laboris", "sint", "est", "voluptate", "qui", "laboris", "laboris", "laboris", "sint", "est"];

function countWords(inputWords) {
    var obj = {};
    return inputWords.reduce(function(current, prev, index, arr) {
	if (!obj[prev]) {
	    obj[prev] = 1;
	} else {
	    obj[prev]++;
	}
	return obj;
    }, inputWords[0]);
}

module.exports = countWords;

/*
// This is how we could get the result using filter:
words.filter(function(word) {
  var count= 1;
  if (arr.indexOf(word) === -1) {
    arr.push(word);
    test[word] = count;
    return test;
  } else {
    count++;
    test[word] = count;
  }
});

*/
