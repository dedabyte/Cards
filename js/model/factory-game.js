(function(){

  cards.factory('GameFactory', function(PlayerFactory){
    return function Game(){
      var game = this;

      var emptyPlayer = new PlayerFactory();
      game.players = [emptyPlayer];

      game.rowsCount = 0;

      game.addPlayer = function(player){
        game.players.push(player);
      };

      game.addRow = function(){
        game.rowsCount++;
        game.players.forEach(function(player){
          if(player.name){
            player.rows.push('x');
          }else{
            player.rows.push(game.rowsCount);
          }
        })
      };
    }
  });

})();