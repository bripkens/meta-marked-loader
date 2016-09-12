'use strict';

var metaMarked = require('meta-marked');


module.exports = function (markdown) {
  this.cacheable();
  return metaMarked(markdown);
};
