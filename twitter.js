// MODULE
var angularApp = angular.module('angularApp', []);
 
// CONTROLLERS
angularApp.controller('mainController', ['$scope', function ($scope ) {
	$scope.handle = '';
	// $scope.lowercasehandle = function() {
	// 	return $filter('lowercase')($scope.handle);
	// };

}]);