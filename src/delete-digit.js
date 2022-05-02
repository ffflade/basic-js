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
	let str = String(n).split('').map(item => +item);
	let min = Math.min(...str);

	str.splice(str.indexOf(min), 1)
	return (+str.join(''))
}

module.exports = {
  deleteDigit
};