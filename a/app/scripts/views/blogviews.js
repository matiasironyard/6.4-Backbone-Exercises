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
    var fullDate = new Date();
    var twoDigitMonth = ((fullDate.getMonth().length+1) === 1)? (fullDate.getMonth()+1) :(fullDate.getMonth()+1);
    var currentDate = twoDigitMonth  + "/" + fullDate.getDate() + "/" + fullDate.getFullYear();
    console.log(currentDate);

    var postTitle = $('#post-title').val();
    var postContent = $('#post-content').val();

    $('#post-title').val("");
    $('#post-content').val("");

    this.collection.create({
      PostTitle: postTitle,
      PostContent: postContent,
      currentDate:currentDate,
    });

  },

});

// ***********************************Exports******************************************************

module.exports = {
  BlogPostForm: BlogPostForm,
};
