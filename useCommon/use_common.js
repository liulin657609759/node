var tools=require('./module/tools')
var http = require('http');
console.log(tools);

http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type":"text/html;charset='utf-8'"});
  response.write("<head><meta charset='UTF-8'></head>");//解决乱码
  const api=tools.formatApi("hfjdjgfg");
  response.write(api);
  response.end();
}).listen(8081);
