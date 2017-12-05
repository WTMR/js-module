;
(function(factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else {
    factory(jQuery);
  }
}(function($) {
  
  // plugin start
  $.extend({
    say: function() {
      console.log('jquery say')
    }
  })
  // plugin end

}));