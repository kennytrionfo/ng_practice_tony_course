// MODULE
var angularApp = angular.module('angularApp', ['ngResource']);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$log', '$resource', function ($scope, $log, $resource) {
	console.log($resource );
	var things = [1,2,3];
	console.log(things );

}]);


