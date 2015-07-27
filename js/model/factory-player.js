(function(){

  cards.factory('PlayerFactory', function(){
    return function Player(_name, _rows){
      var player = this;

      player.name = _name || '';
      player.rows = _rows || [];
    }
  });

})();