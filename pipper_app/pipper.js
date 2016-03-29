'use strict';
var angularApp = angular.module('pipperApp', ['ngRoute']);

/////////////////////////========Controllers=======\\\\\\\\\\\\\\\\\\\\\\\\\\\
	angularApp.controller('phraseCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
		$scope.phrase = "If the elevator tries to break you down, go crazy! ";
		$timeout(function() {
			$scope.phrase = "I should be here in 2 seconds!";
		}, 2000);
	}]); 

	angularApp.controller('handleCtrl', ['$scope', function ($scope) {
		$scope.handle = "";
	}]);

	angularApp.controller('firstCtrl', ['$scope', 'customService', function ($scope, customService) {
		$scope.billybob = customService.customServiceVar;
	}]);

	angularApp.controller('secondCtrl', ['$scope', 'anotherService', function ($scope, anotherService) {
		$scope.freddie = anotherService.anotherServiceVar;
	}]);

/////////////////////////========Services=======\\\\\\\\\\\\\\\\\\\\\\\\\\\
	angularApp.service('customService', function() {
		this.customServiceVar = "I'm a customServiceVar!";
	});

	angularApp.service('anotherService', function() {
		this.anotherServiceVar = "I'm the Var from the anotherService Service. yeah. . "
	});

/////////////////////////========Routes=======\\\\\\\\\\\\\\\\\\\\\\\\\\\
	angularApp.config(function($routeProvider) {
		$routeProvider
			.when('/first',  {
				templateUrl: 'pages/first.html', 
				controller: 'firstCtrl'
			}) 
			.when('/second', {
				templateUrl: 'pages/second.html',
				controller: 'secondCtrl'
			});
	});




