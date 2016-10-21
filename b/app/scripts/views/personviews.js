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

  var ContactFirstName = $('#first-name').val();
  var ContactLastName = $('#last-name').val();
  var ContactPhoneNumber = $('#phone-number').val();
  var ContactStreet = $('#street').val();
  var ContactCity = $('#city').val();
  var ContactState = $('#state').val();
  var ContactZipCode = $('#zip').val();

$('#first-name').val();
$('#last-name').val();
$('#phone-number').val();
$('#street').val();
$('#city').val();
$('#state').val();
$('#zip').val();
},

});

// *********************************exports setup********************************

module.exports = {
  ContactFormView: ContactFormView,
};
