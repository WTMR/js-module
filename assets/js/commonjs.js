(function() {
  var Obj = {
    name: 'DH',
    say: function() {
      console.log('你好')
    }
  }
  if (typeof module !== 'undefined' && typeof exports === 'object') {
    module.exports = Obj;
  } else if (typeof define === 'function' && (define.amd || define.cmd)) {
    define(function() {
      return Obj;
    });
  } else {
    this.Obj = Obj;
  }
}).call(this || (typeof window !== 'undefined' ? window : global));