var angularApp = angular.module('twifferApp', []);

angularApp.controller('stringController', ['$scope',  function ($scope) {
	$scope.randomPhrase = 'If the elevator tries to break you down, go crazy! ';

}]);