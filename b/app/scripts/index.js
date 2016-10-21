var models = require('./models/personmodels.js');
var views = require('./views/personviews.js');
var $ = require('jquery');


// *********************************view setup***********************************


//DOM ready,
// Instaciate views**************************************************************

$(function(){
var contactsCollection = new models.ContactsCollection();
console.log(contactsCollection);

var contactForm = new views.ContactFormView({collection: contactsCollection});
contactForm.setElement($('.contact-form')[0]);

});
