var Haystack = Haystack || { Models: {}, Collections: {}, Views: {} };

// Haystack.initialize = function() {
//   var collection = new Haystack.Collections.MapCollection();

//   collection.fetch({success: function(){
//     console.log(collection.models[0].attributes.pins[0]);
//   }})

//   var listView = new Haystack.Views.MapListView({
//     collection: collection,
//     el: $('.map_list_ul')
//   });

// $(".new_map_form").on("submit", function(e){
//   e.preventDefault();
//   var map_name= $(".new_map_form").find('input').val();
//   console.log(map_name);
//   map_view = new Haystack.Views.MapView({
//       el: $('#map-canvas')[0],
//       new_map_name: map_name
//   });
//     map_view.renderCurrentLocation(map_name);
//     $(".new_map_form").find('input').val("");
//   });

// }



var Router = Backbone.Router.extend({
      routes:{
        '' : 'home'
      }
    });

$(function() {

  $.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
    options.url = 'http://serene-dawn-6520.herokuapp.com' + options.url;
  });

  var signInView = Backbone.View.extend({
                el: '.main',
                render: function(){
                  var template = _.template($('#signInTemplate').html());
                  this.$el.append(template);
                }
              });

  var router = new Router();

  router.on('route:home', function() {
    console.log("you are home!");
    signIn = new signInView();
    signIn.render();
  });

  Backbone.history.start();
});




  // $('.main').append( "<p>Test</p>" );
