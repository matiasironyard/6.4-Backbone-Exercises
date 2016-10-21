var Backbone = require ('backbone');


// *********************************model setup***********************************************

var BlogPostModel = Backbone.Model.extend({

idAttribute: '_id',
defaults: {
  visible: true
}

});


// *********************************Collection setup***********************************************

var BlogPostsCollection = Backbone.Collection.extend({
model: BlogPostModel,
url: "https://tiny-lasagna-server.herokuapp.com/collections/mmblog",
});


// *********************************Exports Setup**********************************************

module.exports = {
  BlogPostModel: BlogPostModel,
  BlogPostsCollection: BlogPostsCollection,
};
