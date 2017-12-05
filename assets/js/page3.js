requirejs(['../../config'], function() {
  requirejs(['commonjs'], function(o) {
     console.log(o.name);
   	 o.say();
  });
});