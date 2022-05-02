const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(/* arr */) {
	if (Array.isArray(arr)) {
        let copy = arr.slice();
        let correction = 0;
        let deleted = [];
        arr.forEach((el, i) => {
            switch (el) {
                case '--discard-next':
                    if (i !== arr.length - 1) {
                        copy.splice(i + correction, 2);
                        deleted.push(i + 1);
                        correction -= 2;

                    } else {
                        copy.splice(i + correction, 1);
                        correction -= 1;
                    }
                    break;
                case '--discard-prev':
                    if (i !== 0 && !deleted.includes(i - 1)) {
                        copy.splice(i - 1 + correction, 2);
                        correction -= 2;
                    } else {
                        copy.splice(i + correction, 1);
                        correction -= 1;
                    }
                    break;
                case '--double-next':
                    if (i !== arr.length - 1) {
                        copy.splice(i + correction, 1, arr[i + 1]);
                    } else {
                        copy.splice(i + correction, 1);
                        correction -= 1;
                    }
                    break;
                case '--double-prev':
                    if (i !== 0 && !deleted.includes(i - 1)) {
                        copy.splice(i + correction, 1, arr[i - 1]);
                    } else {
                        copy.splice(i + correction, 1);
                        correction -= 1;
                    }
                    break;
                default:
                    break;
            }
        });
        return copy;
    } else {
        throw new Error('\'arr\' parameter must be an instance of the Array!');
    }
}

module.exports = {
  transform
};
