var $ = require('jquery');
var models = require('./models/blog.js');
var views = require('./views/blogviews.js');


//DOM Ready

$(function(){

// *****instaciate-DO NOT FORGET*********************************
var blogPostsCollection = new models.BlogPostsCollection();

var blogForm = new views.BlogPostForm({collection:blogPostsCollection});
console.log(blogForm);
blogForm.setElement($('.blog-form')[0]);



});
