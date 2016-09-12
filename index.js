'use strict';

var metaMarked = require('meta-marked');


module.exports = function (markdown) {
  this.cacheable();
  var result = metaMarked(markdown);
  delete result.markdown;
  return result;
};
