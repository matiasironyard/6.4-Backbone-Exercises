var Backbone = require('backbone');
var $ = require('jquery');

//Templates

var linkFormTemplate = require('../../templates/add_link_form.hbs');
var linkListingsTemplate = require('../../templates/url_listings.hbs');
var tagListingsTemplate = require('../../templates/tag_listings.hbs');

// ###
// 7- a.Link Listing setup
// ###

var LinkListing = Backbone.View.extend({
  tagName: 'ul',
  className: 'links-listing',


  initialize: function(){
    this.listenTo(this.collection,'add',this.renderListingItem);
    console.log(this.listenTo);
  },

  render: function(){
    return this;
  },

  renderListingItem: function(Links){
    var linkItem = new LinkItemView({model: Links});
    console.log('linkitem', linkItem);
    this.$el.append(linkItem.render().el);
  }
});

// ###
// b.Link item setup
// ###

var LinkItemView = Backbone.View.extend({
  tagName: 'ul',
  template: linkListingsTemplate,
  className: 'link-item-view',
  events: {
    'click .clickme': 'complete',
    'click .hideme': 'hide'
  },
  initialize: function(){
    this.listenTo(this.model, 'destroy', this.remove);
    this.listenTo(this.model, 'changed', this.render);
    this.listenTo(this.model, 'change:visible', this.toggleVisible);
  },

  render: function(){
  var context = this.model.toJSON();
  // console.log(context);
  this.$el.html(this.template(context));
  //always return
  return this;
},
});

// ###
// c.tag view set up
// ###

var TagView = Backbone.View.extend({
  tagName: 'ul',
  template: tagListingsTemplate,
  initialize: function(){
        this.listenTo(this.model, 'changed', this.render);
      },
      render: function(){

        this.$el.html(this.template(this.model.toJSON()));

        return this;
      },
  });

// ###
// 8-Link Add Form
// ###

var LinkAddForm = Backbone.View.extend({
  tagName: 'form',
  className: 'well',
  template: linkFormTemplate,

  events: {
  'submit': 'add'
},
render: function(){
  this.$el.html(this.template());

  return this;
},

add: function(e){
  e.preventDefault();

  var newLink = {
    url: $('#url').val(),
    tag: $('#tag').val(),
      };

    $('#url').val('');
    $('#tag').val('');

  this.collection.create(newLink);
}
});




module.exports = {
  LinkListing: LinkListing,
  LinkItemView: LinkItemView,
  TagView: TagView,
  LinkAddForm: LinkAddForm,
};
