(function() {
  function seekBar($document) {
    var calculatePercent = function(seekBar, event) {
      var offsetX = event.pageX - seekBar.offset().left;
      var seekBarWidth = seekBar.width();
      var offsetXPercent = offsetX / seekBarWidth;
      offsetXPercent = Math.max(0, offsetXPercent);
      offsetXPercent = Math.min(1, offsetXPercent);
      return offsetXPercent;
    };

    return {
      //Directive Options
      templateUrl: '/templates/directives/seek_bar.html', //this looks like the state stuff
      replace: true, // truthy replaces element, falsy replaces content of element
      restrict: 'E', //only for element here
      scope: {}, //isolate-scope binds functions from directive's view to scope. directive.
      link: function(scope, element, attributes) {
        scope.value = 0;
        scope.max = 100;
        var seekBar = $(element);
        var percentString = function() {
          var value = scope.value;
          var max = scope.max;
          var percent = value / max * 100;
          return percent + "%";
        };

        scope.fillStyle = function() {
          return {
            width: percentString()
          };
        };
        scope.onClickSeekBar = function(event) {
          var percent = calculatePercent(seekBar, event);
          scope.value = percent * scope.max;
        };
        scope.trackThumb = function() {
     $document.bind('mousemove.thumb', function(event) {
         var percent = calculatePercent(seekBar, event);
         scope.$apply(function() {
             scope.value = percent * scope.max;
         });
     });

     $document.bind('mouseup.thumb', function() {
         $document.unbind('mousemove.thumb');
         $document.unbind('mouseup.thumb');
     });
 };
      }
    };
  }
  angular
    .module('blocJams')
    .directive('seekBar', ['$document', seekBar]); //looks a lot like the service and controllers.
})();
