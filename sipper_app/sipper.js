var angularApp = angular.module('sipper', ['ngRoute']);

/////////////////////////========CONTROLLERS=======\\\\\\\\\\\\\\\\\\\\\\\\\\\
angularApp.controller('phraseController', ['$scope', '$timeout', function ($scope, $timeout ) {
	$scope.phrase = ' "You got to Move it Move it."' ;
	$timeout(function() {
		$scope.phrase = ' "I\'m the second, 1 second delayed phrase ! !"';
	}, 1000);
}]);

angularApp.controller(' handleController', ['$scope', 'customService',  function ($scope, customService ) {
	handle = '';
	$scope.billybob = customService.customServiceVar;	
}]);

angularApp.controller('firstController', ['$scope', function ($scope) {
	$scope.firstPageVarTest = "I know what a Prince and lover ought to be"
	$scope.person = {
		name: 'Fluffy Funnelcakes', 
		address: '1212 Bigdog lane'
	};
}]);

angularApp.controller('secondController', ['$scope', '$routeParams',  function ($scope, $routeParams) {
	$scope.secondPageVarTest = "I'm not gonna spend my life being a color.  "
	$scope.num = $routeParams.num || 'No value yet' 
}]);

/////////////////////////========SERVICES=======\\\\\\\\\\\\\\\\\\\\\\\\\\\
angularApp.service('customService', function() {
	this.customServiceVar = "I'm am the Funky Variable in the custom service";
});

/////////////////////////========DIRECTIVES=======\\\\\\\\\\\\\\\\\\\\\\\\\\\
angularApp.directive('searchResult', function() {
	return {
		templateUrl: 'directives/search_result.html'
	}
});

/////////////////////////========ROUTES=======\\\\\\\\\\\\\\\\\\\\\\\\\\\
angularApp.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'pages/first.html', 
			controller: 'firstController'			
		})
		.when('/second', {
			templateUrl: 'pages/second.html',
			controller: 'secondController'
		})
		.when('/second/:num', {
			templateUrl: 'pages/second.html',
			controller: 'secondController'
		});
});