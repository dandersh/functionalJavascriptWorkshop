// Return # of arguments passed that has property 'quack' defined directly on them. Do not allow prototypicly inherited properties.

// 0-20 arguments of any type. No loops, forEach, counter/accumulator variables, or helper functions.

/*
var notDuck = {0 : true, 1 : true, length: 2 }//Object.create({quack: true})
    var duck = {quack: true}
    var test = { quack: true};
var baz = {quack: true};
*/

function duckCount() {
  return Array.prototype.slice.call(arguments).filter(function(obj) {
    return Object.prototype.hasOwnProperty.call(obj, 'quack')
  }).length
}

module.exports = duckCount

//duckCount(duck, test, baz);

