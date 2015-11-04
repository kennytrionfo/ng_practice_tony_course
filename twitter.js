var angularApp = angular.module('angularApp', []);
 
angularApp.controller('mainController', ['$scope', function ($scope ) {
	console.log("the seal goes owe owe owe " );
	$scope.handle = '';
	$scope.name = "MIBOSO "
	// $scope.lowercasehandle = function() {
	// 	return $filter('lowercase')($scope.handle);
	// };

}]);