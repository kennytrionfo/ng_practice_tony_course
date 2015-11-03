// MODULE
var angularApp = angular.module('angularApp', ['ngResource']);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$log', '$resource', '$timeout', '$filter',  function ($scope, $log, $resource, $timeout, $filter) {
	console.log($resource );
	var things = [1,2,3];
	console.log(things );

	$scope.name = 'Kenny';

	$timeout(function() {
		$scope.name = 'Everybody';
	}, 3000);

	$scope.handle = '';
	$scope.lowercasehandle = function() {
		return $filter('lowercase')($scope.handle);
	};

}]);


