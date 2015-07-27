(function(){

  cards.directive('caViewTable', function(PlayerFactory, GameFactory){
    return {
      templateUrl: 'js/view-table/dir-view-table.html',
      link: function(scope, element){
        var jqTableTbody = element.find('tbody');

        var game = new GameFactory();
        game.addPlayer(new PlayerFactory('Igor'));
        game.addPlayer(new PlayerFactory('Jela'));
        game.addPlayer(new PlayerFactory('Gagi'));
        game.addPlayer(new PlayerFactory('Zoli'));
        game.addPlayer(new PlayerFactory('Damjan'));
        game.addPlayer(new PlayerFactory('Đare'));

//        for(var i = 0; i < 10; i++){
//          game.addRow();
//        }

        function cellTap(player, playerIndex, index){
          jqTableTbody.stop().animate({
            scrollTop: jqTableTbody[0].scrollHeight
          }, 350);

          scope.activateNumpad();
          scope.selectedPlayer = player;
          scope.selectedPlayerIndex = playerIndex;
          scope.selectedIndex = index;
        }

        // PUBLIC
        scope.game = game;
        scope.cellTap = cellTap;

        // TODO remove this!
        scope.addRow = function(){
          game.addRow();
        };

      }
    };
  });

})();