var Backbone = require('backbone');

// ###
// 1-Model setup
// ###

var Links = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    visible: true
  }
});

// ###
// 2-Collection setup
// ###

var LinksCollections = Backbone.Collection.extend({
  model: Links,
  url: "https://tiny-lasagna-server.herokuapp.com/collections/mmurltags",
});

// ###
// 3-exports
// ###

module.exports = {
  Links: Links,
  LinksCollections: LinksCollections,
};
