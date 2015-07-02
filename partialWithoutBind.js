var slice = Array.prototype.slice;
function logger(namespace) {
  return function() {
    // Due to closure 'arguments' here will refer to the arguments passed when the function is invoked
    var args = slice.call(arguments);
    console.log.apply(console, [namespace].concat(args));
  }
}

module.exports = logger;
