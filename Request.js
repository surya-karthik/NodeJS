
// Server to server call using http.request() method. //

const http = require("http");

const options ={

    hostname : "fakestoreapi.com",

    path: "/products/1",

    method : "GET"

}

const req = http.request(options, (res) =>{

    res.on("data", (d) =>{               // when we get some data as a response excecute this method.//

        process.stdout.write(d);  // To print the data.//
    
    
    });

});

    req.on("error", (e)=>{     // when we get any error print that error.//

        console.log(e);



    });



req.end();