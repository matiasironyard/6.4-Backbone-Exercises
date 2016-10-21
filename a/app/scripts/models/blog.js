var backbone = require('backbone');

// *********************************model setup***********************************************

var BlogPostModel = Backbone.Model.extend({

idAttribute: '_id',
defaults: {
  visible: true
}

});


// *********************************Collection setup***********************************************

var BlogPostCollection = Backbone.Collection.extend({
model: BlogPost,
url: "http://tiny-lasagna-server.herokuapp.com/collections/mmblog",

});


// *********************************Exports Setup**********************************************

module.export = {
  BlogPostModel: BlogPostModel,
  BlogPostCollection: BlogPostCollection,
};
