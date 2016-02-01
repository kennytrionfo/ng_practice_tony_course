(function(){

	var app = angular.module('tipperApp', ['ngResource']);

/////////////////////////========CONTROLLERS=======\\\\\\\\\\\\\\\\\\\\\\\\\\\
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
		$scope.data = $http.get('data.json')
			.success(function(result){
				return result;
			})
			.error(function(data, error){
				console.log(data );
			})
		console.log($scope.data );
/////////////////////////========End of $http Service stuff=======\\\\\\\\\\\\\\\\\\\\\\\\\\\
		$scope.fakeData = $resource('data.json').get().promise.then(function(data){
			$scope.names = data;
		})
		console.log($scope.fakeData );

	}
	app.controller('HandleCtrl', HandleCtrl);


})();