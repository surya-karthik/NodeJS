

//Read = Opening a file + Reading a file.

//Reading a file

const fs = require("fs");

const buf = new Buffer(1024);

fs.open('input.txt', "r+", function (err,fd) {

    if (err){

        console.log("Error in opening a file");
    }

    else{

        console.log("File opened successfully");
    
    }
  
    //Opening a file.

    fs.read(fd, buf, 0, buf.length, 0, function(error, bytes){

        if (err){

            console.log("Error in reading the file");
        }

        else{

            console.log("Success i reading the file");

            console.log("data is:",  buf.slice(0, bytes).toString());

        }
    });

});


