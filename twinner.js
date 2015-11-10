var angularApp = angular.module('twinnerApp', ['ngRoute']);

angularApp.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'pages/main.html', 
			controller: 'handleController'
		})
		.when('/second', {
			templateUrl: 'pages/second.html',
			controller: 'secondController'
		})
});

angularApp.controller('stringController', ['$scope', '$timeout', function ($scope, $timeout ) {
	$scope.phrase = "Don't be a cottenheaded ninimugin ";
	$timeout(function() {
		$scope.phrase = "What would I do without your sweet mouth ";
	}, 2000);
}]);

angularApp.controller('handleController', ['$scope', function ($scope) {
	$scope.handle = ''; 
}]);

angularApp.controller('secondController',  ['$scope', function ($scope) {
}]);
