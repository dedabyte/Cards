String.prototype.toInt = function(){
  return parseInt(this);
};
String.prototype.toIntZero = function(){
  var val = parseInt(this);
  if(isNaN(val)){
    return 0;
  }else{
    return val
  }
};

Number.prototype.toInt = function(){
  return parseInt(this);
};
Number.prototype.toIntZero = function(){
  var val = parseInt(this);
  if(isNaN(val)){
    return 0;
  }else{
    return val
  }
};

var cards = angular.module('app', []);