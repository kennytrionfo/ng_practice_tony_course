var twittisterApp = angular.module('twittisterApp', []);

twittisterApp.controller('stringController', ['$scope', '$timeout', function ($scope, $timeout) {
	$scope.name = 'Kenny Ken ken';
	$timeout(function() {
		$scope.name = "Willy Wonka"
	}, 2000);
}]);

twittisterApp.controller('handleController', ['$scope', function ($scope) {
	$scope.handle = '';
}]);