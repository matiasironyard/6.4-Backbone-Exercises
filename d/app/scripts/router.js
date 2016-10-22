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
    var addUrlForm = new views.AddUrlForm({collection: this.collection});
    var urlListing = new views.UrlListing({collection: this.collection});
    // console.log(urlListing);
    // var tagListing = new views.TagListing({collection: this.collection});

    $('.url-form')
    .html(addUrlForm.render().el);

    $('.url-listings')
    .append(urlListing.render().el);
  },

  // 7 --------------------------- bookmarks setup -------------------------------------------------

  getBookmarks: function(id){
    var self = this;
    var bookmarks = this.collection.get(id);

    if(!bookmark){
      this.collection.fetch().then(function(){
        self.getBookmarks(id);
      });
      return;
    }

    var tagUrlListing = new views.TagUrlListing({model: UrlTagModel});

    $('.tag-listing').html(tagUrlListing.render().el);
  },

});

// 8 --------------------------------router setup and exports ------------------------------------
var router = new AppRouter();
module.exports = router;
