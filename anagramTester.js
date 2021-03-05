var Dictionary = require('./anagramSolver');

var dictionary = new Dictionary();

dictionary
.addWord('alert')
.addWord('alter')
.addWord('later')
.addWord('caret')
.addWord('cater')
.addWord('crate')
.addWord('trace')
.addWord('emits')
.addWord('items')
.addWord('mites')
.addWord('smite')
.addWord('times')
.addWord('roma')
.addWord('amor')
.addWord('hares')
.addWord('hears')
.addWord('rheas')
.addWord('share')
.addWord('shear')
.addWord('steer')
.addWord('reset')
.addWord('trees')
.addWord('debit card');

console.log(dictionary.findAnagrams('trees'));
console.log(dictionary.findAnagrams('alert'));
console.log(dictionary.findAnagrams('roma'));
console.log(dictionary.findAnagrams('times'));
console.log(dictionary.findAnagrams('bad credit'));