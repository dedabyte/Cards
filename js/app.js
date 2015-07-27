String.prototype.toInt = function(){
  return parseInt(this);
};
Number.prototype.toInt = function(){
  return parseInt(this);
};

var cards = angular.module('app', []);