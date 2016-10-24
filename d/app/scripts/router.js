var Backbone = require('backbone');
var $ = require('jquery');
var models = require('./models/links.js');
var views = require('./views/linksviews.js');
//
// ###
// 5-router setup
// ###

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'tags/:id': 'getTags',
  },

// ###
// 6 initialize
// ###

initialize: function(){
  this.collection = new models.LinksCollections();
  this.collection.fetch();

  console.log(this.collection);
},

// ###
// 8-index setup
// ###

index: function(){
  var linkListing = new views.LinkListing({collection:this.collection});
  $('.link-listings')
  .append(linkListing.render().el);

  var linkAddForm = new views.LinkAddForm({collection: this.collection});
  $('.link-form')
  .html(linkAddForm.render().el);
},

getTags: function(id){
  var tags = this.collection.get(tag);
  console.log('hello',tags);
  var tagDetail = new views.TagView({model: tags});
  console.log('hi',tagDetail);

  $('.tag-listing').html(tagDetail.render().el);
},



});
var router = new AppRouter();
module.exports = router;
