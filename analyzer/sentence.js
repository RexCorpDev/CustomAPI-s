'use strict';
// >> analyzer/index.js'use strict';

module.exports = function (params, res) {


  var text = decodeURI(params);
  console.log('text', text);
  var wordCounter = text.split(" ").length;
  var charCounter = text.match(/./g).length;
  var spaceCounter = text.match(/\s/g).length;
  var totWordsLength = text.length - spaceCounter;
  var wordAverage = totWordsLength / wordCounter;
  var results =
  {
    "Word Count":wordCounter,
    "Character Count":charCounter,
   "Space Count":spaceCounter,
    "Avg Word Length":wordAverage
  };
  res.end(JSON.stringify(results));
}
