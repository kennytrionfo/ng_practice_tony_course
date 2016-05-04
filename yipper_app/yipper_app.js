(function(){
	'use strict';

	var app = angular.module('yipperApp', []);

/////////////////////////========CONTROLLERS=======\\\\\\\\\\\\\\\\\\\\\\\\\\\
	app.controller('PhraseCtrl', ['$scope', '$timeout',  function($scope, $timeout){
		$scope.randomPhrase = "This life is more than just a read-through. ";
		
		$scope.handle = '';
		
		$timeout(function(){
			$scope.randomPhrase = "I should show up after 2 seconds!";
		}, 2000);

		$scope.characters = 3; 

    // $scope.hideStuff = function () {
    // $scope.startFade = true;
    // $timeout(function(){
    //     $scope.hidden = true;
    // 	}, 2000);
    // };


	}]);


})();
