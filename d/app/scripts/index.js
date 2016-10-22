var Backbone = require('backbone');
var $ = require('jquery');
require('./router');

// 4 ----------------------------history set up -----------------------------

//DOM Ready

$(function(){
  Backbone.history.start();
});
