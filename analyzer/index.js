'use strict';

var md5 = require('md5');


// >> analyzer/index.js'use strict';

module.exports = function (params, res) {


  console.log(params);
  var task = params.shift();
  console.log('params: ', task);
  switch (task) {
    case 'email': var hash = md5(email);
      res.end(hash);
    case 'age': require('./math')(params, res);
    break;
    case 'sentence': require('./sentence')(params, res);
    break;
    default:
    res.end('Error');
  }
}
