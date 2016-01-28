(function(){

	var app = angular.module('tipperApp', []);

/////////////////////////========CONTROLLERS=======\\\\\\\\\\\\\\\\\\\\\\\\\\\
	app.controller('PhraseCtrl', function($scope){
		$scope.phrase = "I'm a random phrase";
		$scope.handle = ""
	});


})();