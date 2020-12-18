const con = require('console-read-write')
const ransomLetter = require("./ransomLetter")

async function TestSuite(){
    con.write('Adjon meg egy szot:')
    var input = await con.read();
    con.write('Adjon meg egy mondatot:')
    var text = await con.read();

    var cleanTest = ransomLetter.Clean(input);
    con.write("A letisztitott szo tombre bontva: " + cleanTest + ".")

    var ransomTest = ransomLetter.CanBuild(input, text);
    con.write("A megadott szo kirakhato-e a megadott mondatbol: " + ransomTest + ".")
}

TestSuite();