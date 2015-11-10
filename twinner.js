var angularApp = angular.module('twinnerApp', []);

angularApp.controller('stringController', ['$scope', '$timeout', function ($scope, $timeout ) {
	$scope.phrase = "Don't be a cottenheaded ninimugin ";
	$timeout(function() {
		$scope.phrase = "What would I do without your sweet mouth ";
	}, 2000);

angularApp.controller('handleController', ['$scope', function ($scope) {
	$scope.handle = ''; 
	}]);

}]);