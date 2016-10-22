var Backbone = require('backbone');
var models = require('./models/urltagmodels.js');
var views = require('./views/urltagviews.js');

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
  },

  index: function(){
    var addUrlForm = new views.AddUrlForm({collection: this.collection});
    var urlListing = new views.UrlListing({collection: this.collection});
    // var tagListing = new views.TagListing({collection: this.collection});
  },
});
