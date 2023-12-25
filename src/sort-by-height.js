const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
	let copy = [...arr];
	arr = arr.filter((item) => item > 0).sort((a, b) => a - b);
	for (let i = 0; i < copy.length; i++) {
		if (copy[i] < 0) {
			arr.splice(i, 0, copy[i]);
		}
	}
	return arr;
}

module.exports = {
	sortByHeight,
};
