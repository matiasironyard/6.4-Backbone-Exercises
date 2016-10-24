var Backbone = require('backbone');
var $ = require('jquery');
var models = require('./models/blogpostsmodels.js');
var views = require('./views/blogpostsviews.js');


// 5********************************router setup**********************************************

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'post/:id': 'getPost',
  },

// 6 ***************************initialize******************************************************

initialize: function(){
  this.collection = new models.BlogPostsCollection();
  this.collection.fetch();
  console.log(this.collection);
},

// 8 ****************************index setup***************************************************

index: function(){
  var postListing = new views.PostListing ({collection: this.collection});
  $('.blog-list')
  .html(postListing.render().el);
// console.log(postListing);
},

// 9 ****************************post setup *****************************************************

getPost: function(x){
  var self = this;
  console.log(self);
  var post = this.collection.get(x);
  console.log('post', post);

  if(!post){
    this.index();
    this.collection.fetch().then(function(){
      self.getPost(x);
    });
    return;
  }

  var postDetail = new views.PostDetail({model: post});
  // console.log('details', postDetail);

  $('.blog-post').html(postDetail.render().el);

},

});


var router = new AppRouter();
module.exports = router;
