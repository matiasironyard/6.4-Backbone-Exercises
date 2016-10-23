var Backbone = require('backbone');

// 1 ------------------------- model --------------------------

var UrlTagModel = Backbone.Model.extend({

idAttribues: '_id',
defaults: {
  visible: true,
}
});

// 2 ------------------------- collection ---------------------

var UrlTagsCollections = Backbone.Collection.extend({

model: UrlTagModel,
url: "https://tiny-lasagna-server.herokuapp.com/collections/mmurltags",
});

// 3 -------------------------- exports ----------------------

module.exports = {
  UrlTagModel: UrlTagModel,
  UrlTagsCollections: UrlTagsCollections,
};
