var Backbon = require('backbone');




// *********************************model setup***********************************************

var PersonModel = Backbone.Model.extend({
idAttribute: '_id',
defaults: {
  visible: true
}
});


// *********************************collection setup***********************************************

var PersonsCollection = Backbone.Collection.extend({
  model: PersonModel,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/mmperson',
});


// *********************************exports setup***********************************************

module.exports = {
  PersonModel: PersonModel,
  PersonsCollection: PersonsCollection,
};
