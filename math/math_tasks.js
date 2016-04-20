'use strict';
module.exports = function (params, res) {
  var task = params.shift();
  console.log(params);

  switch (task) {
    case 'pow':
    var base = params[0];
    var expo = params[1];
    var pow = Math.pow(base, expo);

    res.end(`${pow}\n`);
    break;

    case 'square':
    var num = params[0];
    var square = Math.pow(num, 2);
    res.end(`${square}\n`);
    break;

    case 'sum':
    var sum = params.reduce((acc, num) => {
      return acc + parseInt(num);
    }, 0);
    res.end(`${sum}\n`);
    break;

    default:
    res.end('Error');
  }
}
