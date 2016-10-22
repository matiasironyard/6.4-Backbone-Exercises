var Backbone = require('backbone');
var $ = require('jquery');
require('./router');

//4*********************************history start************************************************
//DOM Ready
$(function(){
  Backbone.history.start();
});
