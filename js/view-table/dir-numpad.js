(function(){

  cards.directive('caNumpad', function(){
    return {
      replace: true,
      templateUrl: 'js/view-table/dir-numpad.html',
      link: function(scope, element){
        var model = '';
        var jqInput = element.find('.input');

        function activateNumpad(){
          model = '';
          writeModel();
          scope.numpadActive = true;
        }

        function deactivateNumpad(){
          scope.selectedPlayer = null;
          scope.selectedPlayerIndex = null;
          scope.selectedIndex = null;
          scope.numpadActive = false;
        }

        function keyTap(value){
          if(value === 'sign'){
            var firstChar = model.substring(0, 1);
            if(firstChar === '-'){
              model = model.substring(1, model.length);
            }else{
              model = '-' + model;
            }
          }else if(value === 'backspace'){
            model = model.substring(0, model.length-1);
          }else{
            model += '' + value;
          }
          writeModel();
        }

        function writeModel(){
          jqInput.text(model);
        }

        function addModelToPlayersScores(){
          var value = model.toIntZero();
          var previousValue = scope.selectedPlayer.rows[scope.selectedIndex-1];
          if(!previousValue){
            scope.selectedPlayer.rows[scope.selectedIndex] = value;
          }else{
            scope.selectedPlayer.rows[scope.selectedIndex] = previousValue.toIntZero() + value;
          }
          deactivateNumpad();
        }

        function addModelToPlayersScoresAndNext(){
          var value = model.toIntZero();
          var previousValue = scope.selectedPlayer.rows[scope.selectedIndex-1];
          if(!previousValue){
            scope.selectedPlayer.rows[scope.selectedIndex] = value;
          }else{
            scope.selectedPlayer.rows[scope.selectedIndex] = previousValue.toIntZero() + value;
          }

          if(scope.selectedPlayerIndex >= scope.game.players.length-1){
            deactivateNumpad();
          }else{
            scope.selectedPlayerIndex++;
            scope.selectedPlayer = scope.game.players[scope.selectedPlayerIndex];
            activateNumpad();
          }
        }

        // PUBLIC
        scope.keyTap = keyTap;
        scope.activateNumpad = activateNumpad;
        scope.deactivateNumpad = deactivateNumpad;
        scope.addModelToPlayersScores = addModelToPlayersScores;
        scope.addModelToPlayersScoresAndNext = addModelToPlayersScoresAndNext;

      }
    };
  });

})();