(function(){

  cards.directive('caViewTable', function(PlayerFactory, GameFactory){
    return {
      templateUrl: 'js/view-table/dir-view-table.html',
      link: function(scope, element){

        var game = new GameFactory();
        game.addPlayer(new PlayerFactory('Igor'));
        game.addPlayer(new PlayerFactory('Jela'));
        game.addPlayer(new PlayerFactory('Gagi'));
        game.addPlayer(new PlayerFactory('Zoli'));
        game.addPlayer(new PlayerFactory('Damjan'));
        game.addPlayer(new PlayerFactory('Mušicki'));
        game.addPlayer(new PlayerFactory('Deki'));
        game.addPlayer(new PlayerFactory('Đare'));
        game.addPlayer(new PlayerFactory('Lord'));
        game.addPlayer(new PlayerFactory('Mitar'));

        for(var i = 0; i < 30; i++){
          game.addRow();
        }

        scope.game = game;

      }
    };
  });

})();