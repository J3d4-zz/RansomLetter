const Spellchecker = require("hunspell-spellchecker");
const spellchecker = new Spellchecker();

var DICT = spellchecker.parse({
    aff: fs.readFileSync("./en_EN.aff"),
    dic: fs.readFileSync("./hu_HU.dic")
});

spellchecker.use(DICT);

class Dictionary {

	constructor() {
		this._hashMap = { };
	}

	sortedWord(word) {
		return [].slice.call(word).sort().join('').toLowerCase();
	}

	addWord(word) {
		 let sortedLetters = this.sortedWord(word);
		 if(!this._hashMap[sortedLetters]) {
			 this._hashMap[sortedLetters] = [];
			 this._hashMap[sortedLetters].push(word);
		 } else if(this._hashMap[sortedLetters] && this._hashMap[sortedLetters].indexOf(word) === -1) {
			 this._hashMap[sortedLetters].push(word);
		 }
		 return this;
	}

	findAnagrams(word) {
		let sortedLetters = this.sortedWord(word);
		return this._hashMap[sortedLetters]? this._hashMap[sortedLetters] : `${word} not in Dictionary`;
	}

	get collection() {
		return this._hashMap;
	}
}

module.exports = Dictionary;