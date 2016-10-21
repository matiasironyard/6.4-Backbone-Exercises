var Backbone = require('backbone');
var $ = require('jquery');


// *********************************view setup***********************************

var ContactFormView = Backbone.View.extend({
  tagName: 'form',
  className: 'form-horizontal',
  events: {
    'submit': 'addContact'
  },

addContact: function(event){
  event.preventDefault();

  var contactFirstName = $('#first-name').val();
  var contactLastName = $('#last-name').val();
  var contactPhoneNumber = $('#phone-number').val();
  var contactStreet = $('#street').val();
  var contactCity = $('#city').val();
  var contactState = $('#state').val();
  var contactZipCode = $('#zip').val();

$('#first-name').val("");
$('#last-name').val("");
$('#phone-number').val("");
$('#street').val("");
$('#city').val("");
$('#state').val("");
$('#zip').val("");

this.collection.create({
  ContactFirstName: contactFirstName,
  ContactLastName: contactLastName,
  ContactPhoneNumber: contactPhoneNumber,
  ContactStreet: contactStreet,
  ContactCity: contactCity,
  ContactState: contactState,
  ContactZipCode: contactZipCode,

});
},

});

// *********************************exports setup********************************

module.exports = {
  ContactFormView: ContactFormView,
};
