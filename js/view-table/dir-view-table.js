(function(){

  cards.directive('caViewTable', function(PlayerFactory, GameFactory){
    return {
      templateUrl: 'js/view-table/dir-view-table.html',
      link: function(scope, element){

        var game = new GameFactory();
        game.addPlayer(new PlayerFactory('Igor'));
        game.addPlayer(new PlayerFactory('Jela'));

        game.addRow();
        game.addRow();

        scope.game = game;

      }
    };
  });

})();