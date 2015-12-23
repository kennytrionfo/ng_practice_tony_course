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

angularApp.controller('firstController', ['$scope', '$routeParams', function ($scope, $routeParams){
	$scope.num = $routeParams.num || "No value yet!"
}]);

angularApp.controller('secondContoller', ['$scope', '$routeParams', function ($scope, $routeParams){

}])


/////////////////////////========Routing=======\\\\\\\\\\\\\\\\\\\\\\\\\\\
angularApp.config(function($routeProvider){
		$routeProvider
				.when('/first', {
					templateUrl: 'pages/first.html',
					controller: 'firstController'
				})
				.when('/second', {
					templateUrl: 'pages/second.html',
					controller: 'secondContoller'
				})
});


