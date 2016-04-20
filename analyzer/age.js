'use strict';

// >> analyzer/age.js'use strict';

module.exports = function (params, res) {

  res.rend(age(params));

  function age (params) {
    var results;
    var year = params[0];
    var month = params[1];
    var day = params[2];

    console.log(year, month, day);

    var today = new Date().getTime();
    var givenDate = new Date(year, month - 1, day).getTime();

    var dateDiff = givenDate - today;

    var years = 1000*60*60*24*30*12;
    var months = (years/12);
    var days = (months/30).toFixed(2);


    var yearDiff = (dateDiff / years).toFixed(0);
    var monthDiff = dateDiff / months;
    var daysDiff = ((dateDiff / months) % 1)*30;

    if(dateDiff < 0){
      return (
        ((Math.floor(-1*dateDiff / years).toFixed(0))*-1 + " years,") +
        ((Math.floor(-1*dateDiff / years))*-1 + " months,") +
        (Math.floor(((dateDiff / months) % 1)*30) + " days.")
      )
    }
    else{

      return (
        ((Math.floor(dateDiff / years).toFixed(0)) + " years,") +
        ((Math.floor(dateDiff / years)) + " months,") +
        (Math.floor(((dateDiff / months) % 1)*30) + " days.")
      )
    }
  }
