/* file name   : controllerSample
*  author      : kntrieu
*  Date created: March 5, 2017
*/

angular.module('k-ui.sample', [])

.controller('CtrlSample', ['$scope', 'COLLECTION_TYPE', function($scope, COLLECTION_TYPE){
    
    // Define variables
    $scope.COLLECTION_TYPE = COLLECTION_TYPE;
}])