const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
	constructor(direct = true) {
		this.direct = direct;
	}

	encrypt(text, key) {
		return this.process(text, key, "encrypt");
	}

	decrypt(text, key) {
		return this.process(text, key, "decrypt");
	}

	process(text, key, mode) {
		if (!text || !key) {
			throw new Error("Incorrect arguments!");
		}
		let processedText = this.performVigenereCipher(text, key, mode);
		return this.direct
			? processedText
			: processedText.split("").reverse().join("");
	}

	performVigenereCipher(text, key, mode) {
		const ALPHA = "A".charCodeAt(0);
		const ALPHASIZE = 26;
		let keyIndex = 0;
		let result = "";

		key = key.toUpperCase();

		for (const char of text) {
			const charCode = char.toUpperCase().charCodeAt(0);
			if (charCode >= ALPHA && charCode < ALPHA + ALPHASIZE) {
				const keyCharCode = key[keyIndex % key.length].charCodeAt(0);
				const shift = keyCharCode - ALPHA;

				const offset = mode === "decrypt" ? ALPHASIZE - shift : shift;
				const encodedCharCode =
					((charCode - ALPHA + offset) % ALPHASIZE) + ALPHA;

				result += String.fromCharCode(encodedCharCode);
				keyIndex++;
			} else {
				result += char;
			}
		}

		return result;
	}
}

module.exports = {
	VigenereCipheringMachine,
};
