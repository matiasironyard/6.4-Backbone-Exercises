var Backbone = require('backbone');
var $ = require('jquery');

//Templates

var postDetailTemplate = require('../../templates/postItem_detail.hbs');
var postTitleTemplate = require('../../templates/post.hbs');

// 7 *************************************Post Item and Post Listing View Setup******************

//Post Listing**********************************************************
// a list of blog post in the server
var PostListing = Backbone.View.extend({
  tagName: 'ul',

  attributes: {
    'class': 'ul posts-listing'
  },

initialize: function(){
  this.listenTo(this.collection,'add',this.renderPostItem);
},

render: function(){
  return this;
},

renderPostItem: function(BlogPostModel){
  console.log(BlogPostModel);
  var postItem = new PostItemView({model: BlogPostModel});
console.log(postItem);
  this.$el.append(postItem.render().el);
}
});

//Post Item*********************************************
// display the title of a post

var PostItemView = Backbone.View.extend({
  tagName: 'ul',
  template: postTitleTemplate,
  attributes: {
    'class': 'ul post-item-view'
  },

  // events: {
  //
  // },

  // initialize: funciton(){
  //
  // }

  render: function(){
    var context = this.model.toJSON();
    // console.log(context);
    this.$el.html(this.template(context));
    //always return
    return this;
  },
});

var PostDetail = Backbone.View.extend({
    tagName: 'ul',
    template: postDetailTemplate,
    className: 'blog-content-ul',
    initialize: function(){
      this.listenTo(this.model, 'changed', this.render);
    },

    render: function(){
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
});


module.exports = {
  PostListing: PostListing,
  PostItemView: PostItemView,
  PostDetail: PostDetail,
}
