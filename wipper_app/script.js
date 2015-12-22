var angularApp = angular.module('wipper', []);

angularApp.controller('phraseController', ['$scope', function ($scope){
	$scope.randomPhrase = "Kenny kendog";
}]);

