(function(){
	'use strict';

	var app = angular.module('yipperApp', []);

/////////////////////////========CONTROLLERS=======\\\\\\\\\\\\\\\\\\\\\\\\\\\
	app.controller('PhraseCtrl', ['$scope',  function($scope){
		$scope.randomPhrase = "This life is more than just a read-through. ";
	}]);


})();
