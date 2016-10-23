var Backbone = require('backbone');
var $ = require('jquery');

// 9 -------------------------------------------- template hookup -----------------------------------------------

var addUrlFormTemplate = require('../../templates/add_url_form.hbs');
var urlListingTemplate = require('../../templates/url_listing.hbs');
var tagUrlListingTemplate = require('../../templates/tag_url_listing.hbs');

// 10 ----------------------------------------- Form View Setup -----------------------------------------------

var AddUrlFormView = Backbone.View.extend({
  tagName: 'form',
  className: 'add-url-form',
  template: addUrlFormTemplate,
  events: {
    'submit': 'add'
  },


render: function(){
  this.$el.html(this.template());

  return this;
},

add: function(e){
  e.preventDefault();

  var newUrl = {
    url: $('#url').val(),
    tag: $('#tag').val(),
  };

  $('#url').val('');
  $('#tag').val('');

  this.collection.create(newUrl);
},
});

//--------------------------------- url listing view --------------------------------------------------------------

var UrlListingView = Backbone.View.extend({
  tagName: 'ul',
  className: 'url-listing-view',

  initialize: function(){
    this.listenTo(this.collection, 'add', this.renderTagUrlListing);
  },

  render: function(){

    return this;
  },

  renderTagUrlListing: function(UrlTagModel){
    var tagUrlItem = new UrlItemView({model: UrlTagModel});
    // console.log(tagUrlItem);
    this.$el.append(tagUrlItem.render().el);
  }
});

//------------------------------- url item view -----------------------------------------------------------

var UrlItemView = Backbone.View.extend({
  tagName: 'ul',
  className: 'url-listing-view',
  template: urlListingTemplate,

  render: function(){
    var context = this.model.toJSON();
    // console.log(context);
    this.$el.html(this.template(context));

    return this;
  },
});

// ------------------------------tag url listing view -------------------------------------------------------

var TagUrlListingView = Backbone.View.extend({
  tagName: 'ul',
  template: tagUrlListingTemplate,
  className: 'tag-url-listing-ul',

  initialize: function(){
    this.listenTo(this.model, 'changed', this.render);
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  },

});


// ------------------------------ exports -----------------------------------------------------

module.exports = {
  AddUrlFormView: AddUrlFormView,
  UrlListingView: UrlListingView,
  UrlItemView: UrlItemView,
  TagUrlListingView: TagUrlListingView,
};
