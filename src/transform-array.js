const { NotImplementedError } = require("../extensions/index.js");

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
function transform(arr) {
	if (!Array.isArray(arr)) {
		throw new Error(`'arr' parameter must be an instance of the Array!`);
	}
	const newArr = arr.slice();
	for (let i = 0; i < newArr.length; i++) {
		switch (newArr[i]) {
			case "--double-next":
				newArr.splice(i, 1, newArr[i + 1]);
				break;
			case "--double-prev":
				newArr.splice(i, 1, newArr[i - 1]);
				break;
			case "--discard-next":
				newArr.splice(i, 2, false);
				break;
			case "--discard-prev":
				if (i > 0) {
					newArr.splice(i - 1, 1, false);
				}
				newArr.splice(i, 1, false);
				break;
			default:
				break;
		}
	}
	return newArr.filter((e) => e);
}

module.exports = {
	transform,
};
