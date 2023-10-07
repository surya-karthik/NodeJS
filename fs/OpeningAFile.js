const fs = require("fs"); // accessing file sysyem module.

//Read = Opening a file + Reading a file.




//Opening a file

const buf = new Buffer(1024);

fs.open('input.txt', "r+", function (err,fd) {

    if (err){

        console.log("Error in opening a file");
    }

    else{

        console.log("File opened successfully");
    
    }
  
//Reading a file.

    fs.read(fd, buf, 0, buf.length, 0, function(error, bytes){

        if (err){

            console.log("Error in reading the file");
        }

        else{

            console.log("Success in reading the file");

            console.log("data is:",  buf.slice(0, bytes).toString());

        }

        
//Closing the file

        fs.close(fd, function(err){

            if(err){
                console.log("Error in closingg the file");
            }
            else{
        
                console.log("success in closing the file");
            }


        });
    });

});

// Writing into a file

fs.writeFile("input.txt", "Content is Updated by karthik", function(err){

    if(err){
        console.log("Error in writing the file");
    }
    else{

        console.log("success in writing the file");
    }
});

// Appending data to a file

fs.appendFile("input.txt", "-- Good morning AMIGOS!!", function(err){

    if(err){
        console.log("Error in appending data to the  file");
    }
    else{

        console.log("success in appending the file");
    }


});

//Deleting a file:

fs.unlink("input2.txt", function(err){

    if(err){
        console.log("Error in deleting the  file");
    }
    else{

        console.log("success in deleting the  file");
    }

});


