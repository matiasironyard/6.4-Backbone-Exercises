var Backbone = require('backbone');
var models = require('./models/urltagmodels.js');
var views = require('./views/urltagviews.js');
var $ = require('jquery');

// 5 -------------------------------- router set up -------------------------------------------------------

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'bookmarks/:id/': 'getBookmarks',
    // 'tags/:id/': 'getTags',
  },

  initialize: function(){
    this.collection = new models.UrlTagsCollections();
    this.collection.fetch();
    console.log('models.UrlTagsCollection', this.collection);
  },

  // 6 ----------------------------- index setup ------------------------------------------------------

  index: function(){
    var addUrlForm = new views.AddUrlFormView({collection: this.collection});
    var urlListing = new views.UrlListingView({collection: this.collection});
    console.log('urllistin', urlListing);
    // var tagListing = new views.UrlItemView({collection: this.collection});

    $('.url-form')
    .html(addUrlForm.render().el);

    $('.url-listings')
    .append(urlListing.render().el);
  },

  // 7 --------------------------- bookmarks setup -------------------------------------------------

  getBookmarks: function(tag){
    var self = this;
    var bookmarks = this.collection.get(tag);
    console.log(bookmarks);

    if(!bookmarks){
      this.collection.fetch().then(function(){
        self.getBookmarks(tag);
      });
      return;
    }

    var tagUrlListing = new views.TagUrlListingView({model: bookmarks});
    console.log('tagUrlListing', tagUrlListing);

    $('.tag-listing').html(tagUrlListing.render().el);
  },

});

// 8 --------------------------------router setup and exports ------------------------------------
var router = new AppRouter();
module.exports = router;
