(function(){

  cards.directive('caScroller', function(){
    return {
      link: function(scope, element){

        var jqScrollElement = element.find('.structure-main');
        var jqHeaderRow = element.find('.structure-top .row');
        var jqHeaderColumn = element.find('.structure-left .column');


        jqScrollElement.on('scroll', function(){
          jqHeaderRow.css('left', - jqScrollElement.scrollLeft());
          jqHeaderColumn.css('top', - jqScrollElement.scrollTop());
        });

      }
    };
  });

})();