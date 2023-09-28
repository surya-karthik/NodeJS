 
 
 const fs = require ('fs');


//Asynchronous way to read a file.

 console.log(" Reading is started")

 const data1 = fs.readFile('input.txt' , function(err, data1) {

    if (err){

        console.log("error is :" , err);
    }
    console.log("data is :" , data1.toString());

    console.log("Reading is Completed");
 });

 console.log("Suceess");

// Synchronous way to read a file



 console.log(" Reading is started")

 const data2 = fs.readFileSync("input.txt");

 console.log("data is :", data2.toString());
 console.log("Suceess");


