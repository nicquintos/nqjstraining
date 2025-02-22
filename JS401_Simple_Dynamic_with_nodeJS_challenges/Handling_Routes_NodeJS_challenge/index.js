const http = require("http");
const routes = require("./routes.js");

http.createServer(function(request, response){
    routes.root(request, response);
    routes.contact(request, response);
    routes.about(request, response);
}).listen(3000);