const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	let str = String(n);
	let min = str.split('').find(((value, index) => value < str[index + 1])) || str[1];
	return +str.replace(min, '');
}

module.exports = {
  deleteDigit
};

console.log(deleteDigit(92919))