var angularApp = angular.module('wipper', ['ngRoute']);

/////////////////////////========Controllers=======\\\\\\\\\\\\\\\\\\\\\\\\\\\
angularApp.controller('phraseController', ['$scope', '$timeout', function ($scope, $timeout){
	$scope.randomPhrase = "Kenny kendog";
	$timeout(function(){
		$scope.randomPhrase = "I'm a 2 second delayed phrase!";

	}, 2000);
}]);

angularApp.controller('handleController', ['$scope', function ($scope){
	$scope.handle = '';
}] );

/////////////////////////========Routing=======\\\\\\\\\\\\\\\\\\\\\\\\\\\
angularApp.config(function($routeProvider){
		$routeProvider
				.when('/', {
					templateUrl: 'pages/first.html',
					controller: ''
				})
});


