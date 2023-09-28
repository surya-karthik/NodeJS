const path = require ('path');
const { connected } = require('process');

const filepath1 = 'C:\Program Files\nodejs\node_modules\npm\index.js';


console.log ("sep >" , path.sep);

// console.log("process.env.Path >", process.env.path);

console.log("delimiter > ", path.delimiter);

const currentFilePath = __filename;
const currentDirPath = __dirname;
console.log ("currentpath is :" ,currentFilePath);
console.log ("currentDIRpath is :" ,currentDirPath);

console.log("basename >>", path.basename(__filename));

console.log("basenameWithooutEx >>", path.basename(currentFilePath, '.js'));

console.log("dirname   >>" ,path.dirname(currentFilePath));

console.log("parse >>", path.parse(currentFilePath));

console.log("Karthik >>", path.resolve());

console.log("normalize >>", path.normalize("\\home\\karthik\\users..\index.js"));

console.log("normalize2 >>", path.normalize("\\home:karthik;users@index.js"));

console.log("relative >>", path.relative("\home\karthik\index.js", "\home\karthik\node.js "));













