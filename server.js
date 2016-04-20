'use strict';
const PORT = 8000;
var http = require('http');
var server = http.createServer((req, res) => {
  console.log('req = ', req);
})

var md5 = require('md5');
var fs = require('fs'); // fs = 'file system'
var http = require('http');
var server = http.createServer((req, res) => {

  console.log('url: ', req.url);

  var params = req.url.split('/'); // >> ['/', '#', '#', '#']
  params.shift();
  var resource = params.shift().toLowerCase();

  console.log('resource: ', resource);


  if (req.url === '/') {
    var data = fs.readFileSync('./public/index.html') // do not need a callback, instead RETURNS data buffer
    res.end(data.toString());
    return;
  }
  /* if [/main.js] >> GO */
  if (req.url === '/main.js') {
    var data = fs.readFileSync('./public/main.js') // do not need a callback, instead RETURNS data buffer
    res.end(data.toString());
    return;
  }
  /* if localhost:8000/[case] >> FIND & GO */

    console.log('params server: ', params);
  switch (resource) {
    case 'analyzer': require('./analyzer')(params, res);
    break;
    case 'gravatar': require('./gravatar')(params, res);
    break;
    case 'math': require('./math')(params, res);
    break;
    case '':
      var data = fs.readFileSync('./public/main.js');
      var data = fs.readFileSync('./public/index.html')
      res.end(data.toString());
    break;
    default:
    // check if they're looking for a file that we don't already have mapped to a [var = param]
    fs.readFile(`./public/${resource}`, (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.write('Not Found.');
        res.end('\n');
      } else { // file FOUND
        res.end(data.toString());
      }
    });
  }
});
server.listen(PORT, function (err) {
  if (err) return console.log('error: ', err);
  console.log(`Node server listening on port ${PORT}`);
});
