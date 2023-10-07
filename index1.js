const http = require ("http");

  const Port= 3025;

  const hostname = 'localhost';

  const server = http.createServer((req, res) => {

    if(req.url === '/'){
        res.statusCode = 200;
        res.setHeader("content-type", "application/json");
        res.end(JSON.stringify({"mentor":"Karthik"}));
    }

    else if(req.url === '/about'){
        res.statusCode = 200;
        res.setHeader("content-type", "text/plain");
        res.end("About Page!!");

    }
    else if(req.url === '/contact'){
        res.statusCode = 200;
        res.setHeader("content-type", "text/plain");
        res.end("Contact Page!!");

    }

    else {
        res.statusCode = 500;
        res.setHeader("content-type", "text/plain");
        res.end("Page not found!!");

    }

});

  server.listen(Port, () => {

    console.log(`server is running at ${hostname}:${Port}`)


  });


