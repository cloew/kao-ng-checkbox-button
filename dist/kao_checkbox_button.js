$traceurRuntime.ModuleStore.getAnonymousModule(function() {
  "use strict";
  angular.module("kao.checkbox-button", []).directive("checkboxButton", function() {
    return {
      restrict: "E",
      replace: true,
      transclude: true,
      scope: {
        selected: "=",
        onToggle: "=",
        onToggleOn: "=",
        onToggleOff: "="
      },
      controller: function($scope) {
        $scope.toggle = function() {
          $scope.selected = !$scope.selected;
          if ($scope.onToggle) {
            $scope.onToggle($scope.selected);
          }
          if (!!$scope.selected && !!$scope.onToggleOn) {
            $scope.onToggleOn();
          } else {
            if (!$scope.selected && !!$scope.onToggleOff) {
              $scope.onToggleOff();
            }
          }
        };
      },
      template: "<button class=\"btn btn-primary\" ng-click=\"toggle()\">     <div class=\"text-left\">         <span class=\"glyphicon glyphicon-check\" ng-show=\"selected\"></span>         <span class=\"glyphicon glyphicon-unchecked\" ng-hide=\"selected\"></span>         <ng-transclude style=\"margin-left: 5px;\"></ng-transclude>     </div> </button>"
    };
  });
  return {};
});
