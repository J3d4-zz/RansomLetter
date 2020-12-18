function Clean(input){
    return input.replace(/\s/g,'').toLowerCase().split("")
}

function CanBuild(input, text) {

    const inputArray = Clean(input);
    const textArray = Clean(text);

    const canBuild = inputArray.every((char) => {
      const indexOfChar = textArray.indexOf(char);
      if (indexOfChar > -1) {
        textArray.splice(indexOfChar, 1);
        return true;
      }
    });
    return canBuild;
  }

module.exports = {
    Clean,
    CanBuild
}