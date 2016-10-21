var Backbon = require('backbone');




// *********************************model setup***********************************************

var ContactModel = Backbone.Model.extend({
idAttribute: '_id',
defaults: {
  visible: true
}
});


// *********************************collection setup***********************************************

var ContacsCollection = Backbone.Collection.extend({
  model: PersonModel,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/mmperson',
});


// *********************************exports setup***********************************************

module.exports = {
  ContactModel: PersonModel,
  ContactsModel: PersonsCollection,
};
