
//var words = ['this', 'is', 'a', 'test'];

/* 
   Pass in array of words, a function, and a starting value that will return an object containing the counts for each word in the array.
*/

/*
function reduceFunc(arr, fn, initial) {
// arr is an array to reduce over
// fn is the function to use as a reduce step. Takes prevValue, currentValue, index, and array that is being iterated over
// initial is the required initial value of the reduction
    
    //  End condition
    //  perform action
    //  next
    //  recursion
    
    var obj = {};
    
}; */

function reduce(arr, fn, initial) {
    return (function reduceFn(index, value) {
	if (index > arr.length -1) return value;
	return reduceFn(index + 1, fn(value, arr[index], index, arr))
    })(0, initial);
}

module.exports = reduce
