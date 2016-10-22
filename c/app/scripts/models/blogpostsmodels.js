var Backbone = require('backbone');

// 1*********************************model setup***********************************************

var BlogPostModel = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    visible: true
  }
});

// 2*********************************Collection setup***********************************************

var BlogPostsCollection = Backbone.Collection.extend({
  model: BlogPostModel,
  url: "https://tiny-lasagna-server.herokuapp.com/collections/mmblog",
});

// 3*********************************Exports Setup**********************************************

module.exports = {
  BlogPostModel: BlogPostModel,
  BlogPostsCollection: BlogPostsCollection,
};
