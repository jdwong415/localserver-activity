// Here we require/import the HTTP module
var http = require("http");

// Here we define a port to listen to
var PORT1 = 7000;
var PORT2 = 7500;

var temp;
var city;

// Here we create a generic function to handle requests and responses
function goodRequest(request, response) {

  // The below statement is triggered (client-side) when the user visits the PORT URL
  response.end("You are cool.");

}

function badRequest(request, response) {

  // The below statement is triggered (client-side) when the user visits the PORT URL
  response.end("You are not cool.");
}

// Here we use the Node HTTP package to create our server.
// We then pass it the handleRequest function to empower it with functionality.
var server1 = http.createServer(goodRequest);
var server2 = http.createServer(badRequest);

// Here we start our server so that it can begin listening to client requests.
server1.listen(PORT1, function() {

  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("Server listening on: http://localhost:%s", PORT1);

});

server2.listen(PORT2, function() {

  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("Server listening on: http://localhost:%s", PORT2);

});
