
function repeat(func, num) {
/*    for (var i = 0; i < num; i++) {
	func();
    }
*/
    // Official solution:
   /* if (num <=0 ) return;
    func();
    return repeat(func, --num);*/
    do {
	func();
	num--;
    } while (num > 0);
}


module.exports = repeat;
