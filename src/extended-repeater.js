const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
	const { repeatTimes, separator, additionRepeatTimes, additionSeparator } =
		options;
	//
	if (!!options.addition || typeof options.addition !== "string") {
		if (options.addition === undefined) {
			options.addition = "";
		}
		options.addition = String(options.addition);
	}
	let resultSeparator = Array(additionRepeatTimes)
		.fill(options.addition)
		.join(additionSeparator || "|");
	return Array(repeatTimes)
		.fill(str + resultSeparator)
		.join(separator || "+");
}

module.exports = {
	repeater,
};
