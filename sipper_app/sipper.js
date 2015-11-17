var angularApp = angular.module('sipper', []);

angularApp.controller('phraseController', ['$scope', '$timeout', function ($scope, $timeout ) {
	$scope.phrase = ' "You got to Move it Move it."' ;
	$timeout(function() {
		$scope.phrase = ' "I\'m the second, 1 second delayed phrase ! !"';
	}, 1000);
}]);

angularApp.controller('handleController', ['$scope', function ($scope ) {
	handle = '';
}]);