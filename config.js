require.config({　　　　
  baseUrl: "./assets/js",
  paths: {　　　　　　
    "jquery": "jquery.min",
    "jquery-say": "jquery.say",
    "say": "jquery.say",
    "amd": "amd",
    "commonjs": "commonjs"
  },
  shim: {
    "funs": {
      init: function() {
        return {
          fn1: fn1,
          fn2: fn2
        }
      }
    }
  }
});