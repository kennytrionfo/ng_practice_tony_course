// MODULE
var angularApp = angular.module('angularApp', ['ngResource']);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$log', '$resource', '$timeout', function ($scope, $log, $resource, $timeout) {
	console.log($resource );
	var things = [1,2,3];
	console.log(things );

	$scope.name = 'Kenny';

	$timeout(function() {
		$scope.name = 'Everybody';
	}, 3000);


}]);


