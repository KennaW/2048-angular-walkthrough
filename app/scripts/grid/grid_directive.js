angular.module('Grid')
.directive('grid', function() {
    return {
        restrict: 'A',
        require: 'mgModel',
        scope: {
            ngModel: '='
        },
        templateUrl: 'scripts/grid/grid.html'
    };
});
