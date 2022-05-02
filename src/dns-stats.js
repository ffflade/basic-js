const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
	let f = {};
	let arr = domains.map(e => e.split('.').reverse());
	for (let el of arr) {
		let curr = '';
		for (let i of el) {
			curr += '.' + i;
			if (f[curr]) {
				f[curr]++;
			} else {
				f[curr] = 1;
			}
		}
	}
	return (f);
}

module.exports = {
  getDNSStats
};
console.log(getDNSStats(['code.yandex.ru','music.yandex.ru','yandex.ru']))