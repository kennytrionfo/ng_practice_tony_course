var angularApp = angular.module('twinnerApp', ['ngRoute']);

angularApp.service('nameService', function() {
	this.name = "I'm the name of the nameService !" 	
});

angularApp.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'pages/main.html', 
			controller: 'handleController'
		})
		.when('/second/:num', {
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

angularApp.controller('handleController', ['$scope', '$timeout', 'nameService', function ($scope, $timeout, nameService) {
	$scope.delayedPhrase = ''; 
	$timeout(function() {
		$scope.delayedPhrase = 'After two seconds, I should be here!';
	}, 2000);
	$scope.billybob = nameService.name;

}]);

angularApp.controller('secondController',  ['$scope', '$timeout', '$routeParams', function ($scope, $timeout, $routeParams) {
	$scope.delayedPhrase = ''; 
	$timeout(function() {
		$scope.delayedPhrase = 'After THREE seconds, I should be here!';
	}, 3000);
	$scope.num = $routeParams.num;
}]);

angularApp.directive("searchResult", function() {
	return {
		templateURL: 'directives/searchResult.html',
		replace:true

	}
});