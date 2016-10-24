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

getTags: function(tag){
  var self = this;
  console.log('self---->>>', self);
  console.log('tag?', tag);
  var links = this.collection.filter({tag: tag});
  console.log(links);
  this.collection.reset(links);

  console.log('tags---->>>',tag);
  if(!links){
    this.index();
    this.collection.fetch().then(function(){
      self.getTag(tag);
    });
  return this;
  }

  var tagListing = new views.TagView({collection: this.collection});
  $('.tag-listing')
  .html(tagListing.el);

},

});
var router = new AppRouter();
module.exports = router;
