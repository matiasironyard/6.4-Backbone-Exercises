var Backbone = require('backbone');
var $ = require('jquery');


// **********************************Blog Form view *****************************************


var BlogPostForm = Backbone.View.extend({
  tagName: 'form',
  className: 'form-horizontal',

  events: {
    'submit': 'addPost'
  },

  addPost: function(event){
    event.preventDefault();

    var postTitle = $('#post-title').val();
    var postContent = $('#post-content').val();

    $('#post-title').val("");
    $('#post-content').val("");

    this.collection.create({
      PostTitle: postTitle,
      PostContent: postContent,
    });

  },

});

// ***********************************Exports******************************************************

module.exports = {
  BlogPostForm: BlogPostForm,
};
