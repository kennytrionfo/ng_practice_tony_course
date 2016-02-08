(function(){

	var app = angular.module('tipperApp', ['ngResource', 'ngRoute']);

/////////////////////////========ROUTES=======\\\\\\\\\\\\\\\\\\\\\\\\\\\
	app.config(function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'pages/first.html',
				controller: 'FirstCtrl'
			})
			.when('/second', {
				templateUrl: 'pages/second.html',
				controller: 'SecondCtrl'
			})		
			.when('/second/:num', {
				templateUrl: 'pages/second.html',
				controller: 'SecondCtrl'
			})		
	})

/////////////////////////========CONTROLLERS=======\\\\\\\\\\\\\\\\\\\\\\\\\\\
	app.controller('FirstCtrl', ['$scope', '$timeout',  function($scope, $timeout){

	}]);

	app.controller('SecondCtrl', ['$scope', '$routeParams',  function($scope, $routeParams){
		$scope.num = $routeParams.num || 'no value yet'
	}]);

	app.controller('PhraseCtrl', function($scope, $timeout ){
		$scope.phrase = "I'm a random phrase";
		$timeout(function(){
			$scope.phrase = "We built this city on Rock n Roll. ";
		}, 2000);
	});

	function HandleCtrl($scope, $filter, $http, $resource){
		$scope.handle = "";
		$scope.lowercasehandle = function(){
			return $filter('uppercase')($scope.handle);
		};
		$scope.characters = 5;
		$scope.alertClick = function(){
			alert("Hey there!");
		};

///////////////========This was trying to use $http Service. Couldn't get to work=======\\\\\\\\\\\\\\\\\
		// $scope.data = $http.get('data.json')
		// 	.success(function(result){
		// 		return result;
		// 	})
		// 	.error(function(data, error){
		// 		console.log(data );
		// 	})
		// console.log($scope.data );
/////////////////////////========End of $http Service stuff=======\\\\\\\\\\\\\\\\\\\\\\\\\\\
		$scope.fakeData = $resource('data.json').get().$promise.then(function(data){
			$scope.names = data.records;
			// console.log($scope.names );
		})

	}
	app.controller('HandleCtrl', HandleCtrl);


})();