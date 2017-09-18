/*
Reverse Integer
Reverse digits of an integer.
Example1: x = 123, return 321
Example2: x = -123, return -321

The input is assumed to be a 32-bit signed integer. Your function should return 0 when the reversed integer overflows.
 */

/**
 * @param {number} x
 * @return {number}
 */

/*
计算幂：Math.pow(a,b) a为底数 b为幂
计算绝对值： Math.abs(number)
 */
var reverse = function(x) {
	var num;
	if (x < 0) {
		num = -parseInt(x.toString().split('').reverse().join(''));
	} else {
		num = parseInt(x.toString().split('').reverse().join(''));
	}
	if (Math.abs(num) > Math.pow(2,31)) {
		return 0;
	} else {
		return num;
	}
};
