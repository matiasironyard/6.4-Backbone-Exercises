var Backbone = require('backbone');




// *********************************model setup*********************************

var ContactModel = Backbone.Model.extend({
idAttribute: '_id',
defaults: {
  visible: true
}
});


// *********************************collection setup*****************************

var ContactsCollection = Backbone.Collection.extend({
  model: ContactModel ,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/mmperson',
});


// *********************************exports setup********************************

module.exports = {
  ContactModel: ContactModel,
  ContactsCollection: ContactsCollection,
};
