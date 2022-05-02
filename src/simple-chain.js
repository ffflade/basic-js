const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
	chain: [],
	getLength() {
		return this.chain.length;
	},
	addLink(value) {
		this.chain.push(`( ${String(value)} )`);
		return this;
	},
	removeLink(position) {
		if (typeof position === 'number' && position > 0 && position < this.chain.length) {
			this.chain.splice(position - 1, 1);
			return this;
		} else {
			this.chain = [];
		}
	},
	reverseChain() {
		this.chain.reverse();
		return this;
	},
	finishChain() {
		let resultChain = this.chain.join('~~');
		this.chain = [];
		return resultChain;
	}
};

module.exports = {
  chainMaker
};
