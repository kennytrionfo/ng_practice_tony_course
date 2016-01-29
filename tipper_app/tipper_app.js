(function(){

	var app = angular.module('tipperApp', []);

/////////////////////////========CONTROLLERS=======\\\\\\\\\\\\\\\\\\\\\\\\\\\
	app.controller('PhraseCtrl', function($scope, $timeout ){
		$scope.phrase = "I'm a random phrase";
		$timeout(function(){
			$scope.phrase = "We built this city on Rock n Roll. ";
		}, 2000);
	});

	function HandleCtrl($scope, $filter){
		$scope.handle = "";
		$scope.lowercasehandle = function(){
			return $filter('uppercase')($scope.handle);
		};
		$scope.characters = 5;
		$scope.alertClick = function(){
			alert("Hey there!");
		};
	}
	app.controller('HandleCtrl', HandleCtrl);


})();