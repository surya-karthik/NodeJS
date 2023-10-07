const http = require("http");

const server =http.createServer((req, res) => {

    if (req.url =='/'){

        res.write("<h1> Hello Node Js!! </h1>");
    }

    else if(req.url == '/about') {

        res.write('About Page!!');
    }


    res.end();

    

});

server.listen(5006);

console.log("HTTP server is running on port 5006");
