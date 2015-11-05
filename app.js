// MODULE
var angularApp = angular.module('angularApp', ['ngResource']);
 
// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$log', '$resource', '$timeout', '$filter',  function ($scope, $log, $resource, $timeout, $filter) {
	$scope.name = 'Kenny';

	$timeout(function() {
		$scope.name = 'Everybody';
	}, 3000);

	$scope.handle = '';
	$scope.lowercasehandle = function() {
		return $filter('lowercase')($scope.handle);
	};

}]);


