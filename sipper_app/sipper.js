var angularApp = angular.module('sipper', ['ngRoute']);

/////////////////////////========CONTROLLERS=======\\\\\\\\\\\\\\\\\\\\\\\\\\\
angularApp.controller('phraseController', ['$scope', '$timeout', function ($scope, $timeout ) {
	$scope.phrase = ' "You got to Move it Move it."' ;
	$timeout(function() {
		$scope.phrase = ' "I\'m the second, 1 second delayed phrase ! !"';
	}, 1000);
}]);

angularApp.controller('handleController', ['$scope', function ($scope ) {
	handle = '';
}]);

angularApp.controller('firstController', ['$scope', function ($scope) {

}]);

angularApp.controller('secondController', ['$scope', function ($scope) {

}]);

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
		});
});