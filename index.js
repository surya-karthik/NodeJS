  const http = require ("http");

  const Port = 3015;

  const hostname = 'localhost';

  const server = http.createServer((req, res) => {

     res.end("Welcome to my page dudeee!!");
  });

  server.listen(Port, () => {

    console.log(`server is running at ${hostname}:${Port}`)

});

  

  




  