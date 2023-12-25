const { NotImplementedError } = require("../extensions/index.js");

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
	let asStr = n.toString();
	let max = +asStr.replace(asStr[0], "");
	for (let i = 0; i < n.toString().length; i++) {
		let substr = +asStr.replace(asStr[i], "");
		max = Math.max(max, substr);
	}
	return max;
}

module.exports = {
	deleteDigit,
};
