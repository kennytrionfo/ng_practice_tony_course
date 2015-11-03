// MODULE
var angularApp = angular.module('angularApp', []);
 
// CONTROLLERS
angularApp.controller('mainController', ['$scope', function ($scope ) {
console.log("Don't be a cottenheaded ninimugin " );
	$scope.handle = '';
	// $scope.lowercasehandle = function() {
	// 	return $filter('lowercase')($scope.handle);
	// };

}]);