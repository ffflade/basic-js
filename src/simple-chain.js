const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
	chain: [],

	addLink(n) {
		if (n == null || n == undefined) {
			this.chain.push(`()`);
			return (this);
		} else {
			this.chain.push(`(${n})`);
			return (this);
		}
	},
	getLength() {
		let len =  0;
		for (let i = 0; i < this.chain.length; i++) {
			if (Number.isInteger(+(this.chain[i])) && this.chain[i] !== ' ') {
				len += 1;
			}
		};

		return (len)
	},
	removeLink(num) {
		if (num !== Math.trunc(num) || num <= 0 || num > this.chain.length || !Number.isInteger(num)) {
			throw new Error('ERROR: NEEDED NUMBER')
		}
		this.chain.splice(num - 1, 1);
		return (this);
	},
	reverseChain() {
		this.chain = this.chain.reverse();
		return (this);
	},
	finishChain() {
		let res = this.chain;
		this.chain.length = 0;

		return (res.join(' ~~ '));
	},
};

module.exports = {
  chainMaker
};
