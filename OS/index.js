const OS = require("os");

console.log("CPU Architecture : " + OS.arch());

console.log("Free Memory :"  + OS.freemem());

console.log("Total Memory: " + OS.totalmem());

// console.log("Network Interfaces: " + JSON.stringify(OS.networkInterfaces()));

console.log("Temp dir: " + OS.tmpdir());

console.log("Endianness: " + OS.endianness());

console.log("Hostname: " + OS.hostname(), "Type: "+  OS.type());

console.log("Platform: " + OS.platform(), "Release: "+  OS.release());








