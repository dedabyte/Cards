(function(){

  cards.directive('caViewTable', function(PlayerFactory, GameFactory){
    return {
      templateUrl: 'js/view-table/dir-view-table.html',
      link: function(scope, element){

        var game = new GameFactory();
        game.addPlayer(new PlayerFactory('Igor'));
        game.addPlayer(new PlayerFactory('Jela'));
        game.addPlayer(new PlayerFactory('Igor'));
        game.addPlayer(new PlayerFactory('Jela'));
        game.addPlayer(new PlayerFactory('Igor'));
        game.addPlayer(new PlayerFactory('Jela'));
        game.addPlayer(new PlayerFactory('Igor'));
        game.addPlayer(new PlayerFactory('Jela'));
        game.addPlayer(new PlayerFactory('Igor'));
        game.addPlayer(new PlayerFactory('Jela'));
        game.addPlayer(new PlayerFactory('Igor'));
        game.addPlayer(new PlayerFactory('Jela'));
        game.addPlayer(new PlayerFactory('Igor'));
        game.addPlayer(new PlayerFactory('Jela'));
        game.addPlayer(new PlayerFactory('Igor'));
        game.addPlayer(new PlayerFactory('Jela'));
        game.addPlayer(new PlayerFactory('Igor'));
        game.addPlayer(new PlayerFactory('Jela'));

        for(var i = 0; i < 100; i++){
          game.addRow();
        }

        scope.game = game;

      }
    };
  });

})();