'use strict';
// >> math/index.js

module.exports = function (params, res) {

  var operation = params.shift(); // operation

  switch (operation) {
    case 'math_tasks':
    var tasks = require('./math_tasks')(params, res);
    res.end(`${operation}`);
    break;

    default:
    res.end('Error');
  }
}
